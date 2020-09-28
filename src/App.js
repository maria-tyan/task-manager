import React from 'react';
import './styles/app.scss';
import TasksList from './components/TasksList';

function App() {
  const tasks = [
    {
      name: 'Tasks List',
      description: 'Make a List Of Tasks',
      deadline: 1102020,
      state: 'In Progress',
    },
    {
      name: 'Task Init Page',
      description: 'Make a Task Init Page',
      deadline: 5102020,
      state: 'In Progress',
    },
  ]
  return (
    <div className="app">
      <header className="app__header">
        <h1>
          Task Manager
        </h1>
      </header>
      <section className="app__section">
        <TasksList tasks={tasks} />
      </section>
      <footer className="app__footer">
        <div>
          <p>
            &copy;
            { new Date().getFullYear() }
            &nbsp;
            Maria Efremova
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
