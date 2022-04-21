import React,{useEffect} from 'react';
import './login.css'
import {  useNavigate } from 'react-router-dom';
import axios from './axios';


const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        register();
    }, []);

    const signInCall = async (e) =>{
        e.preventDefault();

        const signInEmail = document.getElementById("loginEmail").value;
        const signInPassword = document.getElementById("loginPassword").value;

        await axios.get(`/signIn?email=${signInEmail}&password=${signInPassword}`).then((data)=>{
            if(data.status===200){
                alert("Successfully login")
            }

            navigate('/userHome',{state: {signInEmail}})
            

        }).catch((err)=>{
            alert(" Please first register yourself !")
        })
    }


    const registerCall = async (e) =>{
        e.preventDefault();

            const regName= document.getElementById("regName").value
            const regEmail= document.getElementById("regEmail").value
            const regMobile= document.getElementById("regMobile").value
            const regPassword= document.getElementById("regPassword").value

            if(regName==="" || regEmail==="" || regMobile==="" || regPassword===""){
               return alert("Please fill all input data");
            }

            await axios.post("/user/register",{
                username: regName,
                email: regEmail,
                mobile: regMobile,
                password: regPassword
            }).then((data)=>{
                if(data.status===200){
                   
                    document.getElementById("regName").value =""
                    
                    document.getElementById("regMobile").value = ""
                    document.getElementById("regPassword").value = ""
                }

                navigate('/userHome',{state: {regEmail}})
            }).catch((err)=>{
                alert(" Registration failed!")
            })
   
           
    }

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
                <button className='btn-primary' style={{borderRadius:"5px",padding:"0 5px",cursor:"pointer"}} onClick={()=>{navigate('/')}} type='button'>Back🔙</button>
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
                    </div>                    <br />
                             <button type="submit" id='loginSub' className="submit-btn" onClick={signInCall}>Log In</button>
                    
                </form>
                <form id="register" className="input-group">
                    <input type="text"  id='regName' className="input-field" placeholder="User Name" required />
                    <input type="email"  id='regEmail' className="input-field" placeholder="email Id" required />
                    <input type="number"  id='regMobile' className="input-field" placeholder="Mobile Number" required />
                    <div class="admin-password-field">
                        <input type="password" id="regPassword" class="input-field"  autoComplete='password' placeholder="Enter Password" />
                    </div>  
                    <button  type="submit"  className="submit-btn" onClick={registerCall}>Register</button>
                
                </form>
            </div>

        </div>
    );
}

export default Login;
