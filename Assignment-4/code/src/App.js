import React from "react";
import LandPage from "./LandPage/LandPage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Postview from "./Postview";


function App(){
    return(
        <div className="wrapper" style={{padding:'20px'}} >
            <Router>
                <Routes>
                <Route path="/" element={<LandPage/>}/>
                <Route path="/Postview" element={<Postview/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App; 