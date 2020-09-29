import React, { useState }  from 'react'
import PropTypes from 'prop-types'

function SelectComponent(props) {
  const [selectedOption, setOption] = useState(0)

  function selectOption(index) {
    setOption(index)
    props.selectOnChange(index)
  }

  const classes = ['select-component', 'select-component_selected-' + selectedOption]

  return (
    <div
      id="select-component"
      className={classes.join(' ')}
    >
      {
        props.optionsList.map(item => {
          return (
            <div
              key={item.option}
              className="select-component__option"
            >
              <input
                id={item.name}
                type="radio"
                name="option"
                className="select-component__input"
                value={item.option}
                onChange={() => selectOption(item.option)}
              />
              <label
                htmlFor={item.name}
                className="select-component__label"
              >
                { item.label }
              </label>
            </div>
          )
        })
      }
    </div>
  )
}

SelectComponent.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectOnChange: PropTypes.func.isRequired,
}

export default SelectComponent