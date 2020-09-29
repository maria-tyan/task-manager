import React, { useState }  from 'react'
import DatePicker from 'react-datepicker'
import './styles/app.scss'
import TasksList from './components/TasksList'
import SelectComponent from './components/SelectComponent'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [tasks, setTasks] = useState([
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
  ])
  const newTasks = [
    {
      name: 'Tasks List123',
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

  const optionsList = [
    {
      name: 'all',
      option: 0,
      label: 'All'
    },
    {
      name: 'in-progress',
      option: 1,
      label: 'In Progress'
    },
    {
      name: 'expired',
      option: 2,
      label: 'Expired'
    },
    {
      name: 'finished',
      option: 3,
      label: 'Finished'
    },
  ]

  function OnClick() {
    setTasks(newTasks)
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>
          Task Manager
        </h1>
      </header>
      <section className="app__section">
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <SelectComponent optionsList={optionsList} />
        <TasksList tasks={tasks} onClick={() => OnClick() } />
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
  )
}

export default App
