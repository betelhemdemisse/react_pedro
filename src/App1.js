import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Profile} from "./Pages/Profile";
import {Contact} from "./Pages/Contact";
import {Navbar} from "./Pages/Navbar";
import {useState,createContext} from "react";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
export const AppContext = createContext();
const App1 = () => {
    const [username, setUsername] = useState("Betelhem");
   const client = new QueryClient();
    return (
        <div className="App">
            <QueryClientProvider client={client}>
            <AppContext.Provider value={{username ,setUsername}}>
            <Router>
           <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/contact" element={<Contact />} />

                    {/* <Route path="/menu/:foodtype" element={<Menu />} /> you will use this to pass variable through url  */}
                  
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />{/*you will use this for wrong routes */}
                </Routes>
              <h3>FOOTER</h3>  
            </Router>
            </AppContext.Provider>
            </QueryClientProvider>
        </div>);
}
export default App1;