import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

function TasksList(props) {
  return(
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
        props.tasks.map((item, index) => {
          return (
            <ListItem
              item={item}
              key={index}
              index={index} />
          )
        })
      }
    </div>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TasksList