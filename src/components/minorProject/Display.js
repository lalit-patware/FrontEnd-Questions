import React, { useCallback, useEffect, useState } from 'react';
import VirtualizedList from './Vitual-List';

export const Display = () => {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1)
    // const usersPerPage = 10;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json()
            setData(data);
            setOriginalData(data); 
        };
        fetchData()
    }, [])
    const handleSearch =(e)=>{
        const key = e.target.value;
        setData(originalData.filter((item) => item.title.toLowerCase().includes(key)));
    }
    function debounce(func, delay){
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                func(...args);
            }, delay)
        };
    }
    const debounceSearch =  useCallback(debounce(handleSearch, 1000), [handleSearch])
    return <>
    <input placeholder='search' onChange={debounceSearch}/>
    {/* <select onChange={()=> console.log('')}>
        <option>1</option>
        <option>2</option>
    </select> */}
        {data && data.length > 0 && data.map((d) => <p key={d.id}>{d.title}</p>)}
        {/* <VirtualizedList /> */}
    </>
}
