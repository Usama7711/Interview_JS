import React, { useState } from 'react'

const Testpracrice = () => {
    const [addcircul, setAddcircul] = useState([{}])
    const [count , setCount] = useState(0)

    const Newcircul =()=>{
        setAddcircul([...addcircul , {} ])
    }
    
    const chngeColor=(item)=>{
        setAddcircul(
            addcircul.map((color , indexNo)=>{
                if(indexNo === item){
                    if(color.color === "black"){
                        setCount(count - 1)
                        return{color : ""}
                    }else{
                        setCount(count + 1)
                        return{color:"black"}
                    }
                }
                else return {...color}
            })
        )
    }
  return (
    <div>
        <div>
            <button onClick={()=>Newcircul()}>Add Circul</button>
            <p>No Of Count = {count}</p>
        </div>
        {addcircul.map((item , index)=>{
            return(
                <>
                    <div className="circul"
                    style={{ backgroundColor: item.color && "black" }}
                    onClick={()=>chngeColor(index)}
                    ></div>
                </>
            )
        })}
    </div>
  )
}

export default Testpracrice