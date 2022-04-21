import React from 'react';
import Navbar from './Navbar';
import './userHome.css'
// import Footer from './Footer';
import UserQuery from './userQuery';

const userHome = () => {

  return (
    <div>
        <Navbar/>
        <div className="mainUserHome">
            <div className="userHome">
                <div className="userHomeLeft">
                     <div className="pendingOutline1">
                             <div className="pendingOutline2">
                                 <div className='pendingNumber'>1 <br/>
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

export default userHome;
