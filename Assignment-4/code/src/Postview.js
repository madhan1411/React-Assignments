/* eslint-disable no-new-func */
import React, { useEffect, useState } from 'react';
import './Postview.css';


const Postview=()=> {
  const [api,setApi]=useState([])

  const data= ()=>{
  fetch('http://localhost:3004/user')
  .then(response=> response.json())
  .then(res=> setApi(res) )
  .catch(error=> console.log(error))
  }

  useEffect(()=>{
    data()
  },[])

  return (
    <>
    <header className='heading'>
      <h1 style={{width:'90%',paddingLeft:'150px'}}>Instaclone</h1>
      <img  style={{width:'50px',height:'50px',padding:'10px 100px 0 0'}}src={'https://cdn-icons-png.flaticon.com/128/1077/1077042.png'} alt="image0">
      </img>
    </header>
    <div className="site-container">
      {api.map((data,idx)=>{
        const {name,location,likes,description,PostImage}=data
        //
        return(
        <div className='boxs' key={idx}>
        <div className="top">
          <div style={{display:'flex',flexDirection:'column',width:'90%'}}>
          <p style={{paddingLeft:'20px'}}><strong>{name}</strong><br></br>{location}</p>
          </div>
          <div style={{paddingTop:'20px'}}><strong>...</strong></div>
        </div>
        <img src={PostImage} style={{width:'inherit',height:'150px'}} alt="image1"></img>
        <div className="mid">
          <img style={{width:'20px',height:'20px'}}src={'https://cdn-icons-png.flaticon.com/128/833/833300.png'} alt="image2">
          </img>
          <img style={{width:'20px',height:'20px',paddingLeft:'15px'}}src={'https://cdn-icons-png.flaticon.com/128/2526/2526496.png'} alt="image3">
          </img>
           <p style={{margin:'0',position:'absolute',right:'10px'}}>{}</p>
        </div>
        <div className="footer">
          <p style={{margin:'0'}}>{likes} likes</p>
          <h3 style={{marginTop:'5px'}}>{description}</h3>
        </div>

        </div>
        )
      })}
    </div>
  </>);
}

export default Postview;
