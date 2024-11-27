import React, { useState } from 'react';
// import '../styles/Taskboard.css';

export const TaskBoard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Design wireframes', status: 'Todo' },
        { id: 2, title: 'Set up project repo', status: 'In Progress' },
        { id: 3, title: 'Create login page', status: 'Completed' },
        { id: 4, title: 'Build API endpoints', status: 'Todo' },
        { id: 5, title: 'Write unit tests', status: 'In Progress' },
        { id: 6, title: 'Testing', status: 'Completed' },
    ]);

    const statuses = ['Todo', 'In Progress', 'Completed'];

    const onDragStart = (e, taskId) => {
        e.dataTransfer.setData('taskId', taskId);
    };

    const onDrop = (e, newStatus) => {
        const taskId = e.dataTransfer.getData('taskId');
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === parseInt(taskId) ? { ...task, status: newStatus } : task
            )
        );
    };

    const onDragOver = (e) => {
        e.preventDefault(); // Necessary to allow dropping
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
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, status)}
                >
                    <h2>{status}</h2>
                    <ul>
                        {tasks
                            .filter((task) => task.status === status)
                            .map((task) => (
                                <li
                                    key={task.id}
                                    //   className="task-item"
                                    style={{
                                        cursor: 'grab',
                                        listStyle: 'none'
                                    }}
                                    draggable
                                    onDragStart={(e) => onDragStart(e, task.id)}
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

// export default TaskBoard;
