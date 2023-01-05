import React from 'react'

// Q=1
// let a =[] // compare memory location
// let b =[]
// console.log(a==b)
// console.log(a===b)

// Q=2
// let a=[]  memory location is same for b also 
// let b=a
// console.log(a==b)
// console.log(a===b)

// Q=3
// let a =[20] Compare element in the arry 
// let b=[20]
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])

// Q=4
// let a=[1,2,3,4]  Its Show only value without [] clg =  1 2 3 4
// let b={name:"Usama"}
// console.log(...a)

// Q=5
// console.log(typeof NaN) //Number

// Q=6
// let a =10- -10   // 20
// console.log(a)

// Q=7
// let a = new Set([1,2,2,3,4])  // Remove Duplicate value
// console.log(a)

// Q=8
// let a= {name:"Usama"}  
// console.log(delete a.name) // Delect name property return true 
// console.log(a) // return empty object

// Q=9
// let a = {name : "Usama"} // only delete value of a not all object
// console.log(delete a)

// Q=10
// let a= ["Usama" , "Musba" , "Perdesi"]
// let [y,z] = a //consider index value
// console.log(y)

// Q=11
// let a= ["Usama" , "Musba" , "Perdesi"]
// let [,z] = a //consider second index value
// console.log(z)

// Q=12
// let a = {name : "usama" , age:25 , skills:"JS"}
//find value without . operater
// let {age} = a
// console.log(age)

// Q==13 //Add value of to object in single object
// let a = {name : "usama" , age:25 , skills:"JS"}
// let b = {Lname : "Musab" , Number:255756 , base:"Nanded"}
// console.log({...a , ...b})

// Q=14
// let a = { name: "usama", age: 25, skills: "JS" }
// let b = { city: "Noida" }
// let c = {a, ...b}
// console.log(c)

// Q=15
// let a = { name: "usama", age: 25, skills: "JS" }
// let b = { city: "Noida" , skills:"HTML" }
// let c = {a, ...b}
// console.log(c)

// Q=16
// let a = "Usama"
// console.log(a()) // error

// Q=17
// let a = false || {} || null
// console.log(a)  //Return object











const Interviwe = () => {
    return (
        <div>Interviwe</div>
    )
}

export default Interviwe