import './App.css';
import react, { useState } from "react"


function Test1() {
  //  Testig Arry
  let Arry = ["Tushar" ,"Sagar", "Frank", "Tedd" , "Mark" ,"Rahul" ,"Rohan", "Rohit", "Amir" ,"Akash"]

  // save input in state
  const [finalarry, setFinalarry] = useState([])
  console.log(finalarry)

  return (
    <div style={{marginLeft:"30%"}}>
      <input type="text"  maxLength={1}  onChange={(e)=> setFinalarry(Arry.filter(name=> name.includes(e.target.value))[0])}  />
      <h2>{finalarry}</h2>
    </div>
  );
}

export default Test1;