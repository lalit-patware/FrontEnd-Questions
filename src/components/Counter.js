import { useState } from "react"

const Counter = () =>{
    const [count,setCount] = useState(0)

    return(
        <>
        <h>Counter: {count}</h>
        <button onClick={()=> setCount(prevCount => prevCount  + 1)}>Add</button>
        <button onClick={()=> setCount(Math.max(prevCount  => prevCount - 1, 0))}>Delete</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        </>
    )
}
export default Counter;