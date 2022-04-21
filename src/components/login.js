import React from 'react';
import './login.css'

const Login = () => {

    const register = () => {
        document.getElementById("login").style.left = "-400px";
        document.getElementById("register").style.left = "50px";
        document.getElementById("btn").style.left = "110px";
    }
    const login = () => {
        document.getElementById("login").style.left = "50px";
        document.getElementById("register").style.left = "450px";
        document.getElementById("btn").style.left = "0px";
    }

    return (
        <div className="hero">
            <div className="fire-box">
                <button className='btn-primary' style={{borderRadius:"5px",padding:"0 5px"}} type='button'>go back🔙</button>
                <div className="title">
                    Welcome to Help Desk
                </div>
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" onClick={login}>Log In</button>
                    <button type="button" className="toggle-btn" onClick={register}>Register</button>

                </div>

                <form id="login" className="input-group">
                    <input type="email" id='loginEmail' className="input-field" placeholder="email Id" required />
                    <div className="admin-password-field-login">
                        <input type="password" id="loginPassword" class="input-field" autoComplete='password' placeholder="Enter Password" />
                        <span><i id="loginToggler"  class="far fa-eye"></i></span>
                    </div>                    <br />
                             <button type="submit"  className="submit-btn">Log In</button>
                    
                </form>
                <form id="register" className="input-group">
                    <input type="text"  id='regName' className="input-field" placeholder="User Name" required />
                    <input type="email"  id='regEmail' className="input-field" placeholder="email Id" required />
                    <input type="number"  id='regMobile' className="input-field" placeholder="Mobile Number" required />
                    <div class="admin-password-field">
                        <input type="password" id="regPassword" class="input-field"  autoComplete='password' placeholder="Enter Password" />
                        <span><i id="toggler"  class="far fa-eye"></i></span>
                    </div>  
                    <button  type="submit"  className="submit-btn">Register</button>
                
                </form>
            </div>

        </div>
    );
}

export default Login;
