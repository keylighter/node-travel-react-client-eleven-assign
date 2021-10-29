import React from 'react';
import './Login'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>

                {/* // onClick={handleGoogleLogin} */}
                <button
                    className="btn-regular"

                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;