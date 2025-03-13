import { useEffect, useRef } from "react";

function debounce(func, delay){
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        setTimeout(()=> {
            func(...args)
        },delay)
    }
}

export function useDebounce(callback, delay = 500) {
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (...args) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
