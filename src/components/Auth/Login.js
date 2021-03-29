import React from 'react'

function Login() {
    return (
        
            <>
                <meta charSet="utf-8" />
                <title />
                <link rel="stylesheet" href="style.css" />
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="textbox">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="textbox">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="button" className="btn" defaultValue="Sign in" />
                </div>
            </>

        
    )
}

export default Login
