import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Landing from './components/landing';
function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route element={<Landing/>} path="/">
                            
          </Route>
          <Route element={<Login/>} path="/login">
                      
          </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
