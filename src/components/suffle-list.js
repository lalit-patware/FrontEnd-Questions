import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
    const initialArray = ['React', 'JavaScript', 'HTML', 'CSS', 'Webpack'];
    const [list, setList] = useState(initialArray);

    // Function to shuffle the array
    const shuffleArray = () => {
        const shuffledList = [...list];
        // Fisher-Yates (or Knuth) shuffle algorithm,
        // Iterate from the last element to the first.
        // For each element, randomly pick another element from the unshuffled portion.
        // Swap the two elements.
        for (let i = shuffledList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]; // Swap
        }
        setList(shuffledList);
    };
    return (
        <div>
            <h3>Technology List:</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={shuffleArray}>Shuffle</button>
        </div>
    );
}
