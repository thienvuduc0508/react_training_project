import React from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({history}) => {
    const handleLogin = () => {
        alert('You are logged in');
        history.push('/home')
    }
    return (
        <div>
           <button onClick={handleLogin}>Login</button> 
        </div>
    )
}

export default withRouter(Login)
