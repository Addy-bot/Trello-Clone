import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty';
import './css/style.css';

const Nav = () => {
    const navigateTo = useNavigate();

    let userExists = false;
    if (!isEmpty(localStorage.getItem('userData'))) {
        userExists = true;
    }

    const Handler = () => {
        localStorage.removeItem('userData');
        navigateTo('/');
    }

    return (
        <div className='nav-bar' >
            <ul className="nav nav-underline">
                <li className="nav-item"> <Link className="nav-link" to={'/'}>Home</Link></li>
                <li className="nav-item"> <Link className="nav-link" to={'/Dashboard'}>Dashboard</Link></li>
            </ul>
            <ul className="nav nav-underline" >
                {userExists ?
                    <li className="nav-item"> <button className="btn btn-dark" onClick={() => Handler()}>Logout</button></li>
                    : <>
                        <li className="nav-item"><Link className="nav-link" to={'/Login'}>
                            <button className="btn btn-dark">Login</button>
                        </Link></li>
                        <li className="nav-item"><Link className="nav-link" to={'/Register'}>
                            <button className="btn btn-dark">Register</button>
                        </Link></li>
                    </>}
            </ul>

        </div>
    )
}

export default Nav