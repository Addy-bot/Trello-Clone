import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './css/style.css';
import isEmpty from 'lodash/isEmpty';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isDisabled, setDisabled] = useState(true);
    const navigateTo = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (!isEmpty(email) && !isEmpty(password)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password])

    const onSubmitHandler = () => {
        if (isEmpty(state)) {
            alert('User Data Not Found! Click OK To Redirect To Registration Page');
            navigateTo('/Register');
        } else if (state?.email === email && state?.password === password) {
            localStorage.setItem('userData', JSON.stringify({ "userName": state?.userName }));
            navigateTo('/');
        } else if (state?.email !== email) {
            alert('Email Id Not Matching Please Re-enter!');
        } else if (state?.password !== password) {
            alert('Password Not Matching Please Re-enter!');
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className='form'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control" type="password" id="pwd" name="pwd" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2 col-2 mx-auto">
                    <input type="submit" data-cy="submit" className="btn btn-dark" value="Login" onClick={() => onSubmitHandler()} disabled={isDisabled} />
                </div>
            </form>
        </div>
    )
}

export default Login