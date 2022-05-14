import './Postview.css';
import data1 from './Mock-Data/data'
import { Link } from 'react-router-dom';


const Postview=()=> {
  const api=data1


  return (
    <>
    <header className='heading'>
      <h1 style={{width:'90%',paddingLeft:'150px',float:""}}><Link to="*">Instaclone</Link></h1>
      <img  style={{width:'50px',height:'50px',padding:'10px 100px 0 0'}}src={'https://cdn-icons-png.flaticon.com/128/1077/1077042.png'} alt="image5">
      </img>
    </header>
    <div className="site-container">
      {api.map((data,idx)=>{
        const {name,location,likes,description,PostImage}=data
        
        return(
        <div className='boxs' key={idx}>
        <div className="top">
          <div style={{display:'flex',flexDirection:'column',width:'90%'}}>
          <p style={{paddingLeft:'20px'}}><strong>{name}</strong><br></br>{location}</p>
          </div>
          <div style={{paddingTop:'20px'}}><strong>...</strong></div>
        </div>
        <img src={PostImage} style={{width:'inherit',height:'150px',float:'left'}} alt="image4"></img>
        <div className="mid">
          <img style={{width:'20px',height:'20px'}}src={'https://cdn-icons-png.flaticon.com/128/833/833300.png'} alt="image2">
          </img>
          <img style={{width:'20px',height:'20px',paddingLeft:'15px'}} src={'https://cdn-icons-png.flaticon.com/128/2526/2526496.png'} alt="image3">
          </img>
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