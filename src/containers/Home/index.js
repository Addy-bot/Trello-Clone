import React, { useEffect } from 'react'
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import './css/style.css';


const Home = () => {
    const navigateTo = useNavigate();

    const userObj = JSON.parse(localStorage.getItem('userData'));
    const userExists = !isEmpty(userObj) ? true : false;

    useEffect(() => {
        navigateTo('/');
    }, [localStorage.getItem('userData')]);

    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-1">Welcome to Trello!</h1>
            {userExists ?
                <h1 className="display-4">{userObj?.userName}</h1>
                : <h1 className="display-6">Please Login/Register!</h1>
            }
        </div>
    )
}

export default Home