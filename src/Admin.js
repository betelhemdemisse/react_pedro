import {About} from "./App/About";
import {Dashboard} from './App/Dashboard';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css'
const Admin = () => {
    return ( 
        <div className="App">
            <Router>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}>Dashboard   </Route> 
                    <Route path="/About" element={<About/>}>   About</Route>
                    <Route path="*"element={<h1>PAGE NOT FOUND</h1> }></Route>
                </Routes>
            </Router>
        </div>
     );
}
 export default  Admin;
