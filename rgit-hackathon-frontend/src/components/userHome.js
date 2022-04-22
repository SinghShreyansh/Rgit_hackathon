import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import './userHome.css'
// import Footer from './Footer';
import UserQuery from './userQuery';
import {  useNavigate,useLocation } from 'react-router-dom';
import axios from './axios';


const UserHome = () => {

    const navigate = useNavigate();

    const { state } = useLocation();
     const  UserId  = state.signInEmail || {};


     const[pending,setPending]=useState()

     useEffect(() => {
     
        axios.get('/user/pending?senderemail='+UserId)
        .then(response => {
            if (response.data) {
              setPending(response.data.length)
            }
    
          })

    },[]);

    const pendingQuery = async(e) =>{
        e.preventDefault()

        navigate('/pendingData',{state:{UserId}})

        

    }

  return (
    <div>
        <Navbar/>
        <div className="mainUserHome">
            <div className="userHome">
                <div className="userHomeLeft">
                     <div className="pendingOutline1">
                             <div className="pendingOutline2" onClick={pendingQuery}>
                                 <div className='pendingNumber'>{pending} <br/>
                                  
                                 <div className='pendingStatus'>Pending...</div>
                                 </div>
                         </div>
                     </div>
                     <div className="completeOutline1">
                             <div className="completeOutline2">
                             <div className='completeNumber'>1 <br/>
                                 <div className='completeStatus'>Checked✔</div>
                             </div>
                             </div>
                     </div>
                </div>

                <UserQuery/>

            </div>
        </div>
      {/* <Footer/> */}
    </div>
  );
}

export default UserHome;
