import React, { useRef } from 'react';

const Timer = () => {
    const countRef = useRef(0);

    const increment = () => {
        countRef.current += 1;
        console.log(countRef.current);
    };

    return <button onClick={increment}>Increment</button>;
};
