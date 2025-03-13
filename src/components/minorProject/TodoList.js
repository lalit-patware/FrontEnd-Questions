import React, { useState } from "react";

export const TodoList = () => {
    const [item, setItem] = useState('')
    // const [query, setQuery] = useState('')
    const [todos, setTodos] = useState([])
    // const [todosFilter, setTodosFilter] = useState([])


    const handleTodo = () => {
        if (item.trim() === "") return;
        const newTodos = [...todos, item];
        setTodos(newTodos);
        // setTodosFilter(newTodos); 
        setItem('')
    }
    const removeTodo = (idx) => {
        // setTodos(todos.filter((_, i) => i !== idx))
        const newTodos = todos.filter((_, i) => i !== idx);
        setTodos(newTodos);
        // setTodosFilter(newTodos.filter((item) => item.toLowerCase().includes(query)));
    }
    // const handleSearch = (e) => {
        
    //     // setQuery(e.target.value)
    //     let key = e.target.value.toLowerCase();
    //     setQuery(key);
    //     setTodosFilter(todos.filter((item) => item.toLowerCase().includes(key)));
    // }
    return <div>
        <h2>Todo List</h2>
        <input name='todo' type='text' value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={handleTodo}>Add</button>
        {/* <div>
            <input placeholder="search item" value={query} type='text' name='query' onChange={(e) => handleSearch(e)} />
        </div> */}
        {
            // todosFilter && todosFilter.length > 0 &&
            todos.map((todo, index) => <div key={index} style={{ display: 'flex', margin: '10px' }}>
                <p>{todo}</p><button onClick={() => removeTodo(index)}>delete</button>
            </div>)
        }
    </div>
}


// MobX uses automatic reactivity and UI updates by making components and stores observable with the help of makeObservable and @observable. Once a particular value changes in store via some action trigger , it automatically re-renders the UI. We can create multiple Stores and consume those in required components via making components observable.

// Please describe a project that you have worked on in react-native, and could you describe a particular challenge in that project and how you solved it? 

// Project: - Wealth management application  

// Wealth Management portal is a dedicated portal tailored specifically for ultra-high-net-worth individuals (UHNWIs). The platform offers a range of sophisticated financial services and tools designed to meet the unique needs of these clients.
// -  Account Management 
// -  Portfolio Management 
// - Funds Transfers and Payments  
// - Comprehensive Financial Services  
// - User-Friendly Design 
// - Security and Compliance 

// while working on welcome experience module we faced lot of challanges to diplay video/image with high resolution and quick load time on landing page. Incase of video as video is of very HD quality & we are getting those through backend services specific to particluar screen resultion. same with image while reaching landing page user is able to see painting of backgroung image that dosen't look good. so to achieve accurray we optimized the delivery of assets by using lazy loading for videos and images, ensuring they are loaded only when visible. For the background image, we implemented responsive image loading, serving different image sizes based on the user's screen resolution. Additionally, we utilized compression tools to reduce file sizes without sacrificing visual quality. This approach helped achieve faster load times and improved visual accuracy on the landing page.



// const arr = [
//     {"a": null, "b": 1},
//     null, [2, undefined, 3],
//     [null, [null], {"a": null, "b": [null]}],
//     {"a": 4, "b": { "a": null, "b": null}, "c": {"a": null}}
//     ]
    
//     function cleanData(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             const item = arr[i];
//             if (item === null || item === undefined) {
//                 arr.splice(i, 1);
//                 i--; // Adjust index after removal
//                 continue; 
//             }
    
//             if (Array.isArray(item)) {
//                 for (let j = 0; j < item.length; j++) {
//                     if (item[j] === null || item[j] === undefined || item[j].length === 0 ) {
//                         item.splice(j, 1);
//                         j--; 
//                     } else if (Array.isArray(item[j]) || typeof item[j] === 'object') {
//                         console.log('****', item[j], item)
//                         arr.push(item[j]); 
//                         item.splice(j, 1); 
//                         j--; 
//                     }
//                 }
//                 if (item.length === 0) {
//                     arr.splice(i, 1);
//                     i--; 
//                 }
//             }
    
//             if (typeof item === 'object' && !Array.isArray(item)) {
//               // const filterItem =  removeNullValues(item)
//                 for (let key in item) {
//                     if (Array.isArray(item[key] === null) || item[key] === null || item[key] === undefined 
//                     || (typeof item[key] === 'object' && Object.keys(item[key]).length === 0)) {
//                         delete item[key];
//                     }
                    
//                 }
//                 if (Object.keys(item).length === 0) {
//                     arr.splice(i, 1);
//                     i--; 
//                 }
//             }
//         }
//     }


