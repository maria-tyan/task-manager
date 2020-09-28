import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <div className="list-item">
      <div className="list-item__element">
        { props.index + 1 }
      </div>
      <div className="list-item__element">
        { props.item.name }
      </div>
      <div className="list-item__element">
        { props.item.state }
      </div>
      <div className="list-item__element">
        { props.item.deadline }
      </div>
    </div>
  )
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;