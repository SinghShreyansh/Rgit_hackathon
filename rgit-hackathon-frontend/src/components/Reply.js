import React from 'react';
import './Reply.css'
import {  useNavigate,useLocation } from 'react-router-dom';
import axios from './axios'
const Reply = () => {

    const { state } = useLocation();
     const  Data  = state.data || {};

     console.log(Data)
     let senderemail=""

     const adminReply =async(e)=>{
         e.preventDefault()
         if(Data.senderemail){
             senderemail=Data.senderemail
         }else{
            senderemail=""
         }

         await axios.post('/adminReply',{
             sendername:Data.sendername,
             senderemail:senderemail,
             replymsg: document.getElementById("replyMsg").value,
             complain:Data.complain
         }).then((data)=>{
            if(data.status===200){
               
                document.getElementById("replyMsg").value = ""
            }

            alert("Reply is given successfully")

        }).catch((err)=>{
            alert(" Registration failed!")
        })
     }

  return (
   <div className="replyMain">
       <h1 style={{textAlign:"center"}}>Admin Reply</h1>
       <div className="replySenderEmail">
                    <div className="authoruser">
                        <label htmlFor="replySenderName">Sender name:</label>
                        <input className="inputuser input-author-user" id='replySenderName' type="text" value={Data.sendername} ></input>
                    </div>
                    <div className="authoruser">
                        <label htmlFor="replySenderEmail">Sender Email:</label>
                        <input className="inputuser input-author-user" id='replySenderEmail' type="text" value={Data.senderemail} required/>
                    </div>
                    <div className="authoruser">
                        <label htmlFor="replyMsg">Message:</label>
                        <textarea class="textareauser" name="" id="replyMsg" style={{width:"100%"}} cols="30" rows="10" required></textarea>
                    </div>
          </div>

          <button type="submit" onClick={adminReply} form="form1" style={{margin:"20px auto",width:"30%",height:"40px"}}  class="btn" value="Submit">Submit</button>

   </div>
  );
}

export default Reply;
