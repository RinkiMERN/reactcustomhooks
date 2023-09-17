import {useState} from 'react'

function useCount() {
  
    const [count, setCount] = useState(0)

    let increment =()=>{
        setCount(prevState=> prevState + 1)
    }
    let decrement =()=>{
        setCount(prevState=> prevState - 1)
    }
    let reset =()=>{
        setCount(0)
    }

    return [count, increment, decrement, reset]
}

export default useCount
