import React from 'react'
import {
  Link,
} from "react-router-dom"
import PropTypes from 'prop-types'

function ListItem(props) {
  return (
    <div className="list-item">
      <div className="list-item__element">
        { props.index + 1 }
      </div>
      <div className="list-item__element">
        <Link to={`${props.item.name}`}>{ props.item.name }</Link>
      </div>
      <div className="list-item__element">
        { props.item.state }
      </div>
      <div className="list-item__element">
        { props.item.deadline }
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default ListItem