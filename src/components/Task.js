import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../stylesheet/Task.css'

const Task = ({id, text, complete , taskComplete , deleteTask}) => {
    return (
      <div className={complete ? 'task-container complete' : 'task-container'}>
        <div className="task-text"
             onClick={() => taskComplete(id)}>
          {text}
        </div>
        <div className='task-icon-container' 
             onClick={() => deleteTask(id)}>
             <AiOutlineCloseCircle className='task-icon'/>
        </div>  
      </div>
    );
}

export default Task;  