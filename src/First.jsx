import {useState} from 'react'
import './First.css'
const First=(props)=>{
    const[number,setNumber]=useState(0)
    const [number1,setNumber1]=useState(0)
    const [number2,setNumber2]=useState(0)

    const addition=()=>{
        setNumber(number1+number2)
        }
    const sub=()=>{
        setNumber(number1-number2)
        }
    const div=()=>{
        setNumber(number1/number2)
        }
    const multi=()=>{
        setNumber(number1*number2)
        }

    return (
        <div>
            
            <input type='number' onChange={(e)=>{setNumber1(parseInt(e.target.value,10))}}/><br/>
            <input type='number' onChange={(e)=>{setNumber2(parseInt(e.target.value,10))}}/><br/>

            <button onClick={addition}>add</button>
            <button onClick={sub}>subtract</button>
            <button onClick={div}>divison</button>
            <button onClick={multi}>multiple</button><br/>
            <h1>the value is:{number}</h1>

        </div>
            )
}
export default First;