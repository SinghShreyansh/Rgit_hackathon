import React,{useState,useEffect} from 'react';
import PendingData from './PendingData';
import {  useNavigate,useLocation } from 'react-router-dom';
import axios from "./axios"

const PendingDataSheet = () => {

    let count = 1;

    const { state } = useLocation();
    const  UserId  = state.UserId.signInEmail || {};
    const[pendingData,setPendingData]=useState()
    useEffect(() => {
     
        axios.get('/user/pending?senderemail='+UserId)
        .then(response => {
            if (response.data) {
              console.log(response.data)
              setPendingData(response.data)
            }
    
          })

    },[]);

  return (
    <div>
      <div class="admintable" style={{margin: "15px 2px"}}>
        <h5>Pending...</h5>
        <table class="table">
            <thead style={{border: "2px solid black"}}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Sender Role</th>
                <th scope="col">Sender Name</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>

              {pendingData && pendingData.map((pendingDataNum,index)=>{
                  if(pendingDataNum){
                      console.log(index)
                      return <PendingData data={pendingDataNum} key={index} count={count++} />
                  }
              })}
              
              
            </tbody>
          </table>
    </div>
    </div>
  );
}

export default PendingDataSheet;
