import React, { useState, useEffect } from 'react';
import '../styles/Taskboard.css';

export const TaskBoard = () => {
    const [draggableId, setDraggableId] = useState(null)
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Design wireframes', status: 'Todo' },
        { id: 2, title: 'Set up project repo', status: 'In Progress' },
        { id: 3, title: 'Create login page', status: 'Completed' },
        { id: 4, title: 'Build API endpoints', status: 'Todo' },
        { id: 5, title: 'Write unit tests', status: 'In Progress' },
        { id: 6, title: 'Testing', status: 'Completed' },
    ]);

    const statuses = ['Todo', 'In Progress', 'Completed'];

    const onDragStart = (taskId) => {
        setDraggableId(taskId)
    };

    const onDrop = (newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === draggableId ? { ...task, status: newStatus } : task
            )
        );
    };
   
    return (

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px'
        }}>
            {statuses.map((status) => (
                <div
                    key={status}
                    //   className="task-column"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => onDrop(status)}
                >
                    <h2>{status}</h2>
                    <ul style={{listStyle: 'none'}}>
                        {tasks
                            .filter((task) => task.status === status)
                            .map((task) => (
                                <li
                                    key={task.id}
                                    //   className="task-item"
                                    // style={{
                                    //     cursor: 'grab',
                                    //     listStyle: 'none',
                                    //     backgroundColor: '#4CAF50', /* Green background */
                                    //     color: 'white', /* White text */
                                    //     padding: '10px 20px', /* Padding */
                                    //     margin: '10px',
                                    //     fontSize: '16px', /* Font size */
                                    //     border: 'none', /* Remove border */
                                    //     borderRadius: '5px' /* Rounded corners */
                                    //     //   transition: background-color 0.3s, transform 0.2s; /* Smooth hover effect */
                                    // }}
                                    draggable
                                    onDragStart={()=> onDragStart(task.id)}
                                >
                                    {task.title}
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TaskBoard;
