import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axios'

const PendingData = ({data,index,count}) => {

    const navigate= useNavigate();
    console.log(count)

    const deleteMsg = async(e) =>{
        e.preventDefault()

        const complain = data.complain

        await axios.delete('/user/pending/delete?complain='+complain)
        .then((data)=>{
            if(data.status===200)
            alert("Deleted successfully")
            else
            alert("error occured")

            navigate('/pendingData')
        })
    }
  return (
    <tr>
                <th scope="row">{count}</th>
                <td><p style={{textDecoration: "none",cursor:"pointer"}} onClick={(e)=>navigate('/ticketDetail',{state:{data}})}>{data.title}</p></td>
                <td>{data.senderrole}</td>
                <td>{data.sendername}</td>
                <td><button type="button" onClick={deleteMsg} class="btn btn-danger btn-sm">Delete</button></td>
                <td><button type="button" class="btn btn-info btn-sm">Edit</button></td>
              </tr>
  );
}

export default PendingData;
