import './App.css';



function App(props) {
 const {employee}=props;
 const myfunc=(label,value)=>{
   return(
     <div className='field-container'>
       <label>{label}</label>
       <div>{value}</div>
     </div>
   );
 }
    
return(
  <div className="App">
  <div className='card-container'>
  <img src={employee.profileImg} width='100%'/>
  <h2>{employee.name}</h2>
  {myfunc('location',employee.location)}
  {myfunc('bloodGroup',employee.location)}
  {myfunc('age',employee.age)}
  {/* Start your React code here */}
</div>
</div>
)
}



export default App;