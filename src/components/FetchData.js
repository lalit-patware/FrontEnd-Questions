import aggScore from "./SubmissionArray";
import { useEffect, useState } from "react";
import flattenArray from "../components/PracticeProgram";
import CycleCal from "./Cycle";

const DisplayTodo = () => {
    const [todo, setTodo] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         const data = await response.json();
        //         setTodo(data);
        //     }
        //     catch (error) {
        //         setError(error.message)
        //     }finally {
        //         setLoading(false);
        //     }

        // }
        // fetchData()
    }, []) // Empty dependency array ensures useEffect runs only once after the initial render
    // const objArr = [
    //     { name: 'abc', score: 20 },
    //     { name: 'pqr', score: 30 },
    //     { name: 'abc', score: 40 },
    //     { name: 'pqr', score: 50 }
    // ];
    // const inputNestedArray = ['Dog', 'Cat', ['Sheep', ['Wolf', 'Lion', 'new', ['cow'], ['Hen']]]];
    // const inp = 'aaabbbcccd'
    // const flattenedArray = flattenArray(inputNestedArray);
    // const sum = aggScore(objArr)
    const inp = 'aaaaabbbbccc'
    const cyc = CycleCal(inp)
    // console.log(flattenedArray, sum, todo, cyc);
    console.log(cyc);
    if (loading) {
        return <div>Loading...</div>; // Display loading state
      }
    
      if (error) {
        return <div>Error: {error}</div>; // Display error state
      }
    return (
        <>  
        {/* {flattenArray()} */}
            <h1>Todo Item</h1>
            {/* {todo && todo.map((list) => { */}
                {/* return <div key={list.id}> */}
                {todo && <>
                    <p><strong>ID:</strong> {todo.id}</p>
                    <p><strong>Title:</strong> {todo.title}</p>
                    <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
                    </>
                }
                {/* </div> */}
            {/* }) */}


            {/* } */}
        </>
    )
}

export default DisplayTodo;