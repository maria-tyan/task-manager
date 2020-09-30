import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

function TasksList(props) {
  function filterList(tasks, filter = 0) {
    switch (filter) {
      case 1:
        return tasks.filter((item) => item.state === 'In Progress')
      case 2:
        return tasks.filter((item) => item.deadline < 1)
      case 3:
        return tasks.filter((item) => item.state === 'Finished')
      case 0:
      default:
        return tasks
    }
  }

  return (
    <div className="list">
      <div className="list-item list-item_header">
        <div className="list-item__element" />
        <div className="list-item__element">
          Title
        </div>
        <div className="list-item__element">
          State
        </div>
        <div className="list-item__element">
          Deadline
        </div>
      </div>
      {
        props.tasks.length ? 
        filterList(props.tasks, props.filter).map((item, index) => {
            return (
              <ListItem
                item={item}
                key={index}
                index={index} />
            )
          })
        : <p>No Items.</p>
      }
    </div>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.number
}

export default TasksList