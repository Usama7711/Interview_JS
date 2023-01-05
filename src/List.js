import React, { useState } from 'react'

const List = () => {
    let data = [
        {
            'id' : 0 ,
            "name" : "Usama" ,
            "last" : {
                "inner" : "data1",
                "inner" : "data1",
                "inner" : "data1",
            }
        },
        {
            'id' : 1 ,
            "name" : "Usama2" ,
            "last" : "Musab2",
            "last" : {
                "inner" : "data2",
                "inner" : "data2",
                "inner" : "data2",
            }
        },
        {
            'id' : 2 ,
            "name" : "Usama3" ,
            "last" : "Musab3" ,
            "last" : [{
                "inner1" : "data3",
                "inner2" : "data4",
                "inner3" : "data5",
            }]
        }
    ]
    const [list, setlist] = useState(data)
    const [first, setfirst] = useState('')
    const [second, setsecond] = useState([])

    const alphabate = (e) =>{
        setfirst(e.target.value)
    }

    // console.log("first" , first)
    // console.log(list)


    const conpare = () => {
        if(first == list[2].id){
            setsecond(list[2].last)
        }else{
            console.log("false")
        }
    }

    console.log(second)

    

    
  return (
    <div>
        <select name="" id="" onChange={(e)=>{alphabate(e)}}>
           {data && data.length && data.map((item , id)=>{
            return(
                <option value={id}>{item.name}</option>
            )
           })}
        </select>
        <select name="" id="">
            {second.map((item)=>{
                return(
                    <option value="">{item.inner}</option>
                )
            })}
        </select>
        <button onClick={conpare()}>datata</button>
    </div>
  )
}

export default List