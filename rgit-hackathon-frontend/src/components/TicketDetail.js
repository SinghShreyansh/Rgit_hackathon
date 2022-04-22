import React from 'react';
import './TicketDetail.css'
import {  useNavigate,useLocation } from 'react-router-dom';

const TicketDetail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
     const  UserId  = state.data || {};

  return (
    <div className='ticketDetailMain'>
        <div class="admin_information">
        <div class="admin_info"><span>Title : </span><p>{UserId.title}</p></div>
        <div class="admin_info"><span>Sender Name :</span><p>{UserId.sendername}</p></div>
        <div class="admin_info"><span>Sender Email :</span><p>{UserId.senderemail}</p></div>
        <div class="admin_info"><span>Sender Role :</span><p>{UserId.senderrole}</p></div>
        <div class="admin_info"><span>Recever Role :</span><p>{UserId.receiverrole}</p></div>
        <div class="admin_info"><span>Complain :</span><p>{UserId.complain}</p></div>
    </div>
    </div>
  );
}

export default TicketDetail;
