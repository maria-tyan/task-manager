import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function TasksList(props) {
  return(
    <div className="list">
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
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TasksList;