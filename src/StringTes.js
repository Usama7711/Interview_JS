import React, { useState } from 'react'



const StringTes = () => {
    let S1 = "ABCD"
    let S2 = "CDAB"
    const [test, setTest] = useState([S1])
    const [result, setResult] = useState('')



    console.log(test)

    const check = () => {
        let comapre = test.includes()
    }

    check()
    return (
        <div>

        </div>
    )
}

export default StringTes