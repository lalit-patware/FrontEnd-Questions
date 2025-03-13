import React, { useState, useEffect } from "react";

const DisplayData = () => {
    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const result = await res.json();
                setList(result?.products);
            } catch {
                console.log('Error fetching data');
            }
        };
        fetchApi();
    }, []);

    const filteredData =  list?.filter((item) => (
        item.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.category.toLowerCase().includes(query.toLowerCase().trim())
    ));
    return (
        <>
            <h2>Cards</h2>
            <input
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: "8px", marginBottom: "10px", width: "250px" }}
            />
            <ul style={{ display: 'flex', flexWrap: 'wrap', padding: 0, listStyle: "none" }}>
                {filteredData?.map((item) => (
                    <li key={item.id} style={userCardStyle}>
                        <p><strong>Title:</strong> {item.title}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Desc:</strong> {item.description.substring(0, 50)}...</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

const userCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
};

export default DisplayData;
