import './App.css';
import Logo from './components/Logo.js';

import TaskList from './components/TaskList.js';

function App() {


  return (
    <div className="task-app">
      <Logo />
      <div className='principal-task-list'>
        <h1>Mis Tareas</h1>
        <TaskList />
      </div> 
    </div>
  );
}

export default App;
