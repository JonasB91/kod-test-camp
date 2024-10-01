import { useState } from 'react';
import styles from '../styles/todo.module.css';

interface TodoItem {
    text: string;
    createdAt: Date; //adding createdAt prop, to store it for creation date
}

const Todo = () => {
    const [task, setTask] = useState<TodoItem[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    //Function to add anew task/Todo
    const addNewTask = () => {
        if (newTask.trim() !== "") {
            const newTaskItem: TodoItem = {
                text: newTask,
                createdAt: new Date() // Store the current time and date
            };
            setTask([...task, newTaskItem]); // add new task
            setNewTask("");
        }
    };

    //Function to remove a new task/Todo
    const removeTask = (index: number) => {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks); // Update the list
    }
    //Sort new tasks/todos when created in a descending order
    const sortedTasks = task.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return (
        <div className={styles.todoContainer}>
            <h1 className='text-3xl font-bold mb-4'>TODO-List</h1>
            <div className='flex mb-4'>
                <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Add new task'
                className={`${styles.todoInput} flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 />
                 <button onClick={addNewTask}
                  className={`${styles.todoButton} bg-blue-600 text-white rounded-r-md p-2 hover:bg-blue-700 transition duration-200`}>Add Task</button>
            </div>
            <ul className='list-todo space-y-2'>
                {sortedTasks.map((todo, index) => (
                <li key={index} className={`${styles.todoItem} flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md hover:bg-gray-200 transition duration-150`}>
                    <div className='flex flex-col'>
                    <span className='text-lg'>{todo.text}</span>
                    <span className='text-gray-500 text-sm'>
                        Created: {todo.createdAt.toLocaleString()}
                    </span>
                    </div>
                    <button
                    onClick={() => removeTask(index)}
                    className="text-black hover:text bg-red-600 transition duration-200 border border-red-500 rounded-md p-2"
                    >Delete Task</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;