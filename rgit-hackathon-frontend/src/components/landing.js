import React from 'react'
import userImage from '../temp/user.png'
import adminImage from '../temp/admin.png'
import { useNavigate} from 'react-router-dom'
import './landing.css'

const Landing = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="Landing_header">           



                <h1>Welcome To Help Desk</h1>

                <div className="admin_user_component">
                <div className="landing_user">
                 
                 <img className="landing_user_img" src={userImage} alt=".." />
                 <button className="btn" onClick={(e)=>{
                     e.preventDefault();
                     navigate('/login')
                 }} >USER</button>
 
              </div>
                 
                <div className="landing_admin">
                <img className="landing_admin_img" src={adminImage} alt=".." />
                 <button className="btn" onClick={(e) => {
                     e.preventDefault();
                     navigate('/login')
                 }} >ADMIN</button>
                </div>
                </div>

            
               

            </div>

        </>
    )
}

export default Landing
