import React, { useState }  from 'react'
import DatePicker from 'react-datepicker'
import './styles/app.scss'
import TasksList from './components/TasksList'
import SelectComponent from './components/SelectComponent'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const tasksData = [
    {
      name: 'Tasks List',
      description: 'Make a List Of Tasks',
      deadline: 5,
      state: 'In Progress',
    },
    {
      name: 'Task Init Page',
      description: 'Make a Task Init Page',
      deadline: 10,
      state: 'In Progress',
    },
    {
      name: 'Filter',
      description: 'Make a Filter Fror Task List',
      deadline: 20,
      state: 'Finished',
    },
    {
      name: 'Create Form',
      description: 'Make a Form',
      deadline: 27,
      state: 'In Progress',
    },
  ]
  const [tasks, setTasks] = useState(tasksData)

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

  let filterOption = 0

  function filterData(option) {
    filterOption = option
    setTasks(filterList(tasksData))
    console.log(filterOption, 'app', tasks)
  }

  function filterList(tasks) {
    switch (filterOption) {
      case 1:
        return tasks.filter((item) => item.state === 'In Progress')
      case 2:
        return tasks.filter((item) => item.deadline < 10)
      case 3:
        return tasks.filter((item) => item.state === 'Finished')
      case 0:
      default:
        return tasks
    }
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
        <SelectComponent optionsList={optionsList} selectOnChange={filterData} />
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
  )
}

export default App
