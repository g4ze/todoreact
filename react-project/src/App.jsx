import { useState } from 'react'
import './App.css'
 let state={
  count:0
 }
function App() {
  const[count,setCount]=useState(0);
  function onClickHandler(){
    setCount(count+1)
  }
  return (
    
      <div>
        <CounterButton count={count} setCount={setCount}></CounterButton>
        <CounterButton count={count+10} setCount={setCount}></CounterButton>
        <CounterButton count={count*100} setCount={setCount}></CounterButton>

    </div>
  )
}
function CounterButton(props){
  console.log(props)
  function increasecount(){
    props.setCount(props.count+1);
  }
    return <button onClick={increasecount}>
      count is {props.count}
    </button>
}

export default App

