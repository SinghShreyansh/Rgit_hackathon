import React from 'react';
import './userQuery.css'

const userQuery = () => {

    const addQuery = (e)=>{
        e.preventDefault()

        const title = document.getElementById("userTitle").value
        const senderName = document.getElementById("userTitle").value
        const senderRole = document.getElementById("userTitle").value
        const receiverRole = document.getElementById("userTitle").value
        const complain = document.getElementById("userTitle").value
        const uploadedFile= document.getElementById("userTitle").value
    }

  return (
    <div id="upload_section">
        <h1 class="h1-user">Upload Your Queries </h1>
        <div class="container-user">

            <form id="formuser" action="" method="post">
                <div class="titleuser">
                    <label class="label" for="titleuser">Title:</label>
                    <input class="inputuser title-bar-user" id='userTitle' type="text" required/>
                </div>
                <div class="bottomuser">
                    <div class="authoruser">
                        <label for="authoruser">Your name:</label>
                        <input class="inputuser input-author-user" type="text" required/>
                    </div>
                    <div class="stateuser">
                        <label for="location">Your Role In Company :</label>
                        <input class="inputuser input-state-user" type="text" id="" required/>
                    </div>
                    <div class="stateuser">
                        <label for="location">Message whom you want to send :</label>
                        <input class="inputuser input-state-user" type="text"  id="" required/>
                    </div>
                </div>
                <label for="desc" class="cont-user">Complaint/Request/Queries:</label>
                <textarea class="textareauser" name="" id="txtuser" cols="30" rows="10" required></textarea>
               
                <div class="img-user">
                    Upload:
                    <input type="file" name="image" id="preview-img-user"/>
                </div>

            </form>
            
            <button type="submit" form="form1" class="btnuser" value="Submit">Submit</button>
        </div>
    </div>
  );
}

export default userQuery;
