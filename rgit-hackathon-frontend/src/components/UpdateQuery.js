import React from 'react';

const UpdateQuery = () => {
    const addQuery = async(e)=>{
        e.preventDefault()

        const title = document.getElementById("userTitle").value
        const senderName = document.getElementById("senderName").value
        const senderEmail = document.getElementById("senderEmail").value
        const senderRole = document.getElementById("senderRole").value
        const receiverRole = document.getElementById("receiverRole").value
        const complain = document.getElementById("txtuser").value

        console.log(title,senderName,receiverRole,senderRole,complain)

        await axios.post('/userquery',{
            title: title,
            sendername: senderName,
            senderemail:senderEmail,
            senderrole: senderRole,
            receiverrole: receiverRole,
            complain:complain,
            }).then((data)=>{
            if(data.status===200){
                document.getElementById("userTitle").value=""
                document.getElementById("senderName").value=""
                document.getElementById("senderEmail").value=""
                document.getElementById("senderRole").value=""
                document.getElementById("receiverRole").value=""
                document.getElementById("txtuser").value=""
                            
            }

        }).catch((err)=>{
            alert(" Your Complain failed!")
            console.log(err)
        })
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
                        <input class="inputuser input-author-user" id='senderName' type="text" required/>
                    </div>
                    <div class="emailuser">
                        <label for="authoruser">Your Email-ID:</label>
                        <input class="inputuser input-author-user" id='senderEmail' type="email" required/>
                    </div>
                    <div class="w">
                        <label for="location">Your Role In Company :</label>
                        <input class="inputuser input-state-user" id='senderRole' type="text"  required/>
                    </div>
                    <div class="stateuser">
                        <label for="location">Message whom you want to send :</label>
                        <input class="inputuser input-state-user" type="text"  id='receiverRole' required/>
                    </div>
                </div>
                <label for="desc" class="cont-user">Complaint/Request/Queries:</label>
                <textarea class="textareauser" name="" id="txtuser" cols="30" rows="10" required></textarea>
               
            </form>
            
            <button type="submit" form="form1" onClick={addQuery} class="btnuser" value="Submit">Submit</button>
        </div>
    </div>
  )
}

export default UpdateQuery;
