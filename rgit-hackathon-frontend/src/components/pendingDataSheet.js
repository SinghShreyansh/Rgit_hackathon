import React from 'react';
import PendingData from './PendingData';

const pendingDataSheet = () => {
  return (
    <div>
      <div class="admintable" style={{margin: "15px 2px"}}>
        <h5>Recents...</h5>
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

              <PendingData />
              <PendingData/>
              
            </tbody>
          </table>
    </div>
    </div>
  );
}

export default pendingDataSheet;
