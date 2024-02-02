
import './App.css';
import {useState} from 'react'


function App() {
  const[dirvalue,setDirValue]=useState([])
  const[movvalue,setMovValue]=useState([])

  const AddDir=(event)=>{
       
       dirvalue=setDirValue(event.targt.value)
       console.log(value)
const AddMov=(event)=>{
       
        movvalue=setMovValue(event.targt.value)
        console.log(value)
       
  }
  return (
    <div className="App">
      <h1>Director and Movies</h1>
      <div className='content'>
        <input id='dir' className='dir' type='text' placeholder='DirectorName' value={dirvalue} ></input>
        <input className='mov' type='text'  placeholder='MovieName' value={movvalue}></input>
        <button className='add-btn' onChange={AddDir}>Add</button>
      </div>
    
      <div>{
      dirvalue.map((event)=>{
        <h2>{dirvalue}</h2>
      })
    }
    <button className='rm-btn'>Remove</button>
     </div>
    </div>
  );
}

export default App;
