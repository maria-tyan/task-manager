import React, { useState }  from 'react'
import './styles/app.scss'
import TasksList from './components/TasksList'
import SelectComponent from './components/SelectComponent'
import AddTask from './components/AddTask'

function App() {
  const tasksData = [
    {
      name: 'Tasks List',
      description: 'Make a List Of Tasks',
      deadline: '10/3/2020',
      state: 'In Progress',
    },
    {
      name: 'Task Init Page',
      description: 'Make a Task Init Page',
      deadline: '7/7/2020',
      state: 'In Progress',
    },
    {
      name: 'Filter',
      description: 'Make a Filter Fror Task List',
      deadline: '10/23/2020',
      state: 'Finished',
    },
    {
      name: 'Create Form',
      description: 'Make a Form',
      deadline: '11/1/2021',
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
  const [tasks, setTasks] = useState(tasksData)
  let [filterOption, setFilter] = useState(0)

  function filterData(option) {
    setFilter(option)
  }

  function pushNewItem(item) {
    setTasks(tasks.concat({
      id: item.id,
      name: item.name,
      // state must be In Progress by default
      state: 'In Progress',
      description: item.description,
      deadline: new Date(item.deadline).toLocaleDateString("en-US")
    }))
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>
          Task Manager
        </h1>
      </header>
      <section className="app__section">
        <SelectComponent optionsList={optionsList} selectOnChange={filterData} />
        <TasksList tasks={tasks} filter={filterOption} />
        <AddTask addData={pushNewItem} />
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
