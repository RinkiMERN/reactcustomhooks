import React, { useState } from 'react'
import useCount from '../hook/useCount'

const CounterOne = () => {
   const [count, increment, decrement, reset] = useCount()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
