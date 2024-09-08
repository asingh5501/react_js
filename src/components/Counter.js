import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Counter = () => {
  const value = useContext(counterContext)

  const increment = () => {
    value.setCount(value.count + 1)
  }

  const decrement = () => {
    value.setCount(value.count - 1)
  }

  const reset = () => {
    value.setCount(0)
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  }

  return (
    <div className='counter-main-div profile-card'>
      <h2>Counter: {value.count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  )
}

export default Counter;
