import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Profile} from "./Pages/Profile";
import {Contact} from "./Pages/Contact";
import {Navbar} from "./Pages/Navbar";
import {useState} from "react";
const App1 = () => {
    const [username, setUsername] = useState("Betelhem");
    return (
        <div className="App">
            <Router>
           <Navbar/>
                <Routes>
                    <Route path="/" element={<Home username={username} />} />
                    <Route path="/profile" element={<Profile username={username}/>} />
                    <Route path="/contact" element={<Contact />} />

                    {/* <Route path="/menu/:foodtype" element={<Menu />} /> you will use this to pass variable through url  */}
                  
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />{/*you will use this for wrong routes */}
                </Routes>
              <h3>FOOTER</h3>  
            </Router>
        </div>);
}
export default App1;