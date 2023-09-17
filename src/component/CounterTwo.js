import React from 'react'
import useCount from '../hook/useCount'

const CounterTwo = () => {
    const [count, increment, decrement, reset] = useCount(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
