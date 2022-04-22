import React,{useState,useEffect} from 'react';
import kit from '../temp/kit.png'
import message from '../temp/message.png'
import unlock from '../temp/unlock.png'
import {  useNavigate,useLocation } from 'react-router-dom';
import lock from '../temp/lock.png'
import './AdminDashboard.css'
import AdminTable from './AdminTable';
import axios from './axios'
import AdminTableData from './AdminTableData';

const AdminDashboard = () => {

    const navigate = useNavigate();

    let count = 1;
    const[counter,setCounter]=useState()


    const { state } = useLocation();
     const  UserId  = state.signInAdminRole || {};
    const[pendingData,setPendingData]=useState()
    useEffect(() => {
     
        axios.get('/user/pending?receiverrole='+UserId)
        .then(response => {
            if (response.data) {
              console.log(response.data)
              setPendingData(response.data)
              setCounter(response.data.length)
            }
    
          })

    },[]);


     console.log(UserId)
  return (
      <>
    <div>
        <h2 style={{marginTop: "10px"}}>Admin Dashboard</h2>
        <div class="main-container-admin">
        
        <div class="container-admin">
            <div class="admin-image1 admin-image"><img src={kit} alt=""/></div>
            <div class="admin-div">
                <h6>Total tickets</h6>
                <h4>{counter}</h4>
            </div>
        </div>
        <div class="container-admin">
            <div class="admin-image2 admin-image"><img src={message} alt=""/></div>
            <div class="admin-div">
                <h6>New tickets</h6>
                <h4>{counter}</h4>
            </div>
        </div>
        
    </div>
    </div>

    <div>
      <div class="admintable" style={{margin: "15px 2px"}}>
        <table class="table">
            <thead style={{border: "2px solid black"}}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Sender Role</th>
                <th scope="col">Sender Name</th>
                {/* <th scope="col">Delete</th> */}
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
            {pendingData && pendingData.map((pendingDataNum,index)=>{
                  if(pendingDataNum){
                      console.log(index)
                      return <AdminTableData data={pendingDataNum} key={index} count={count++} />
                  }
              })}


              
            </tbody>
          </table>
    </div>
    </div>
     

    </>

  );
}

export default AdminDashboard;
