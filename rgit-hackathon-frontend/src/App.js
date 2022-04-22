import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import AdminLogin from './components/adminLogin'
import Landing from './components/landing';
import UserHome from './components/userHome';
import AdminHome from './components/adminHome';
// import splashScreen from './components/splashScreen.html'
import PendingDataSheet from './components/pendingDataSheet';
import AdminDashboard from './components/AdminDashboard';
import TicketDetail from './components/TicketDetail';
function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route element={<Landing/>} path="/">
                            
          </Route>
          <Route element={<Login/>} path="/login">
                      
          </Route>
          <Route element={<AdminLogin/>} path="/adminLogin">
                      
          </Route>
          <Route element={<UserHome/>} path="/userHome">
                      
          </Route>
          <Route element={<AdminHome/>} path="/adminHome">
                      
          </Route>
          <Route element={<PendingDataSheet/>} path="/pendingData">
                      
          </Route>
          <Route element={<AdminDashboard/>} path="/adminDashboard">
                      
          </Route>
          <Route element={<TicketDetail/>} path="/ticketDetail">
                      
          </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
