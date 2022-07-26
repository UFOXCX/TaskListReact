import React, { useState } from 'react';
import TaskForm from './TaskForm';
import '../stylesheet/TaskList.css'
import Task from './Task';

const TaskList = () => {

    const [tasks ,setTask] = useState([]);

    const addTask = (task) => {
        console.log(task)
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTask = [task, ...tasks];
            setTask(updatedTask);
        }
    };

    const deleteTask = id => {
        const updatedTask = tasks.filter(task => task.id !== id);
        setTask(updatedTask);
    }   

    const taskComplete  = (id) => {
        const updatedTask =  tasks.map(task => {
            if(task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        })
        setTask(updatedTask);
    };

    return (
        <>
            <TaskForm onSubmit={addTask}/>
            <div className='task-list-container'>
                
                {
                    tasks.map(task => 
                       <Task
                        key={task.id}
                        id={task.id} 
                        text={task.text}
                        complete= {task.complete}
                        taskComplete={taskComplete}
                        deleteTask = {deleteTask}
                                                                    
                       />
                    )
                }
            </div>
        </>
    
    );
}

export default TaskList;

