import React, { useCallback, useEffect, useState } from 'react';
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
const List = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(()=>{
        const fetchApi = async () => {
            let res = await fetch('https://dummyjson.com/products')
            let result = await res.json();
            setData(result.products)
        }
        fetchApi()
    },[]);
    const handleChange = (e) => {
        setQuery(e.target.value.trim().toLowerCase());
    };
    const debouncedFun = useCallback(debounce(handleChange, 500), [handleChange]);

    const filteredList = data?.filter(
        (item) => item.title.toLowerCase().includes(query)
    );
    return (
        <>  
            <input placeholder='Search by title...' onChange={debouncedFun} />
            <ul style={{listStyle: 'none'}}>
                {filteredList?.map((pdts)=>(
                    <li key = {pdts.id}>
                        <p>{pdts.title}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default List

// Const orders = [{id: ‘1’, status: ‘ready to dispatch’}, {id: ‘2’, status: ‘ready to dispatch’}]
// o/p = [{id: ‘1’, status:  ‘ready to dispatch’}, {id: ‘2’,  status: ‘dispatched’}] //output 



// Solution:-  Function updateOrderStatus(orders, orderId){ //orderId =2
// return orders.map(order => order.id === orderId ? { ...order, status: 'dispatched' } : order );
// } 
