import { useState } from 'react'
import './App.css'
import InputText from './components/InputText'


function App() {
  const [count, setCount] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [enteredValue, setEnteredValue] = useState('')
let handleInc = ()=>{
    setIsDisabled(false)
  if(count < 10){
  setCount((val)=> val + 1)
}

}
let handleDec =()=>{
  if(count>0){
  setCount((val)=> val - 1)
  }
 if(count == 0){
  setIsDisabled(true)
 }
}

let handleSubmit = (e)=>{
  e.preventDefault();
  setInputValue(enteredValue)
}
let handleChange = (e)=>{
setEnteredValue(e.target.value)
}
  return (
    <>
      <h1>My App</h1>
      <h3>Count value: {count}</h3>
      <button  onClick={handleInc}>+</button>
      <button disabled={isDisabled} onClick={handleDec}>-</button>
      <form action="" onSubmit={handleSubmit}>
        <input type='tel'/>
        <input type="text" onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>
      <InputText data={inputValue} />
    </>
  )
}

export default App
