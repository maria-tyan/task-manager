import React, { useState }  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"
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

  function Child() {
    let { name } = useParams();
  
    return (
      <div>
        <h3>Task name: {name}</h3>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <h1>
            Task Manager
          </h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new-task">Add new task</Link>
            </li>
          </ul>
        </nav>
        <section className="app__section">
          <Switch>
            <Route path="/new-task">
              <AddTask addData={pushNewItem} />
            </Route>
            <Route path="/:name" children={<Child />} />
            <Route path="/">
              <SelectComponent optionsList={optionsList} selectOnChange={filterData} />
              <TasksList tasks={tasks} filter={filterOption} />
            </Route>
          </Switch>
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
    </Router>
  )
}

export default App
