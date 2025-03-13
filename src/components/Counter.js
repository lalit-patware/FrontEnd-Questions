import { useState } from "react"

const Counter = () =>{
    const [count,setCount] = useState(0)
    return(
        <div style={{display: 'flex', alignItems: 'center', padding: '50px', margin: '50px'}}>
        <h>Counter: {count}</h>
        <button onClick={()=> setCount(prevCount => prevCount  + 1)}>Add</button>
        <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>Delete</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;