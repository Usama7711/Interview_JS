import React, { useState } from 'react'

const Addcircul = () => {
    const [addcircul, setAddcircul] = useState([{}])
    const [count , setCount] = useState(0)

const Addcircul = () =>{
    setAddcircul([...addcircul , {}])
}
const changeColor =(item)=>{
    setAddcircul(
        addcircul.map((color , indexNo)=>{
            if(indexNo === item){
                if(color.color === "grey"){
                    setCount(count - 1)
                    return{color:""}
                }else{
                    setCount(count + 1)
                    return { color : "grey"}
                }
            }
            else return {...color}
        })
    )
}
  return (
    <div>
        <div>
            <button onClick={()=>Addcircul()}>Add Circul</button>
            <p>No of Count = {count}</p>
            {addcircul.map((item , index)=>{
                return(
                    <div className="circul"
                    style={{background: item.color && "grey"}}
                    onClick={()=>changeColor(index)}
                    ></div>
                )
            })}
        </div>
    </div>
  )
}

export default Addcircul