import React from "react";
import { Link } from "react-router-dom";
import './LandPage.css'

const LandPage =()=>
{
    return(
        <div className="Home">
            <div className="img">
                <img src="https://images.unsplash.com/photo-1636484229128-dbbf72bbe764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="cover"></img>
            </div>
            <div className="container">
                <h1>10x Team 04</h1>
                <Link to ="/Postview">
                    <button id="btn">Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default LandPage;