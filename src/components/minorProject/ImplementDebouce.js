// 1) show data> search> debouced > pag ui > logic

import { useCallback, useEffect, useState } from "react"

function debounce(func, delay){
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}
// function throttle(func, delay) {
//     let lastExecuted = 0;

//     return (...args) => {
//         const now = Date.now();

//         if (now - lastExecuted >= delay) {
//             func(...args);
//             lastExecuted = now;
//         }
//     };
// }

const ImplementDebounce = () =>{
    const [list, setList] = useState([]);
    const [orginalList, setOrginalList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 10
    useEffect(()=>{
       fetchApi()
    },[])
    const fetchApi = async () => {
        let result = await fetch('https://dummyjson.com/users')
        let res = await result.json()
        setList(res.users)
        setOrginalList(res.users)
        console.log(res.users)
    }
    const handleChange = (e) => {
        const key = e.target.value;
        const filterList = orginalList.filter((item)=> item.firstName.toLowerCase().includes(key.toLowerCase().trim()) || item.age.toString().includes(key.toString().trim()))
        setList(filterList)
        setCurrentPage(1)
    }
    const debouncedFun = useCallback(debounce(handleChange, 500), [handleChange]);

    const indexOfLastItem = currentPage*itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const totalPages = Math.ceil(list.length/itemPerPage)

    const paginatedList = list?.slice(indexOfFirstItem, indexOfLastItem)
    // console.log('**', list)
    return <>
                <h1>Debounced List with pagination</h1>
                <input placeholder="Search name....." onChange={debouncedFun}/>
                <ul style={{display: 'flex', flexWrap: 'wrap', listStyle:'none', padding: 0}}>
                    {paginatedList?.map((item)=> (
                        <li key={item.id} style={{display: 'flex', flexDirection:'column', boxShadow:'0 0 8px red', padding: '20px', margin: '20px', background: '#f9f9f9', width: '300px' }}>
                            <p>FirstName:  {item.firstName}</p>
                            <p>Age: {item.age}</p>
                            <p>Gender: {item.gender}</p>
                        </li>
                    ))}
                </ul>
                <div style={{textAlign: 'center'}}>
                    <button disabled={currentPage === 1} onClick={()=> setCurrentPage((prev)=> prev-1)}>back</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={()=> setCurrentPage((prev)=> prev+1)}>Next</button>
                </div>
        </>
}

export default ImplementDebounce