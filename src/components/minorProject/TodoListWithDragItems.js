import { useState } from "react"

const TodoListNew = () => {
    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([]);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const handleAdd = () => {
        if (item.trim() === "") return;
        const newTodos = [...todos, item]
        setTodos(newTodos)
        setItem('')
    }
    const handleRemove = (index) => {
        const newTodos = todos.filter((_,i)=> i !== index)
        setTodos(newTodos)
    }
    const handleUp =(index)=>{
        if (index === 0) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index -1]] = [newTodos[index-1], newTodos[index]]
        setTodos(newTodos)
    }
    const handleDown =(index)=>{
        if (index === todos?.length -1) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index+1]] = [newTodos[index+1], newTodos[index]];
        setTodos(newTodos)
    } 
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDrop = (index) => {
        // if (draggedIndex === null || draggedIndex === index) return; //Prevent Unnecessary Operations
        const newTodos = [...todos];
        const draggedItem = newTodos.splice(draggedIndex, 1)[0]; //Remove the Dragged Item from Its Original Position:  
        // [0]: Since splice returns an array, we extract the first element to get the actual item.
        newTodos.splice(index, 0, draggedItem);  //Insert the Dragged Item at the New Position:
        setTodos(newTodos);
        setDraggedIndex(null);
    };  
    const displayTodos = (todos) =>{
        return <div style={{display: "flex",
            flexDirection: "column", alignItems: 'center'}}>
            {todos?.map((todo, index)=> 
            <div style={ {display: 'flex' , padding: '10px' , margin: '10px'}}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => e.preventDefault()} // to hold the dragged item at new position
                onDrop={() => handleDrop(index)}
            >
                    <p key={index} style={{display: 'flex'}}>{todo}</p>
                    <button onClick={()=> handleRemove(index)} style={ {padding: '10px' , margin: '10px'}}>Remove</button>
                    <button onClick={()=> handleUp(index)} style={ {padding: '10px' , margin: '10px'}}>up</button>
                    <button onClick={()=> handleDown(index)} style={ {padding: '10px' , margin: '10px'}}>down</button>
                    </div>
            )}
        </div>
    }
    return <div style={{textAlign: 'center'}}>
            <h1>Todo LIst</h1>
            <input type="text" value={item} key={"item"} name={"item"} onChange={(e) => setItem(e.target.value)} />
            <button onClick={handleAdd} style={{padding:'10px', margin:'10px'}}>Add </button>
            {displayTodos(todos)}
        </div>
}
export default TodoListNew