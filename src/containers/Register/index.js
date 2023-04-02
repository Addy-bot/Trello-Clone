import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { minEightOneNumOneLetter, validEmail } from '../../utils/commonFunctions';

const Register = () => {
    const [userName, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isDisabled, setDisabled] = useState(true);
    const [passFieldError, setPassError] = useState(false);
    const [emailFieldError, setEmailError] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!isEmpty(userName) && !isEmpty(email) && !isEmpty(password)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userName, email, password]);


    const onSubmitHandler = () => {
        const emailValidation = validEmail(email);
        const validPass = minEightOneNumOneLetter(password);

        if (!emailValidation) {
            setEmailError(true);
        } else if (!validPass) {
            setEmailError(false);
            setPassError(true);
        } else if (validPass && emailValidation) {
            alert('User Successfully Registered! Click OK to Redirect To Login Page')
            navigateTo('/Login', {
                state: {
                    userName,
                    email,
                    password
                }
            });
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className='form'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input className="form-control" type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    {emailFieldError && <div style={{ color: 'lightsalmon' }} >
                        Please Enter in Correct Format: example@gmail.com!
                    </div>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control" type="password" id="pwd" name="pwd" onChange={(e) => setPassword(e.target.value)} />
                    {passFieldError && <div style={{ color: 'lightsalmon' }} >
                        Please Enter in Correct Format: Minimum 8 characters, at least 1 letter and 1 number!
                    </div>}
                </div>
                <div className="d-grid gap-2 col-2 mx-auto">
                    <input className="btn btn-outline-dark" type="submit" value="Submit" onClick={() => onSubmitHandler()} disabled={isDisabled} />
                </div>
            </form>
        </div>
    )
}

export default Register