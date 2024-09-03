import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  }

  return (
    <div className='counter-main-div profile-card'>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  )
}

export default Counter;
