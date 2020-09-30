import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'

function AddTask(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setEndDate] = useState(new Date())
  function HandleFormData(e) {
    e.preventDefault()
    console.log(deadline)
    props.addData({
      id: Date.now(),
      name,
      description,
      deadline,
    })
    
    setName('')
    setDescription('')
  }

  return (
    <form className="form" onSubmit={HandleFormData}>
      <div className='form__input-wrapper'>
        <label className='form__label'>Title</label>
        <input
          type='text'
          value={name}
          className='form__input'
          onChange={event => setName(event.target.value)} />
      </div>
      
      <div className='form__input-wrapper'>
        <label className='form__label'>Description</label>
        <textarea
          type='text'
          value={description}
          className='form__input form__input_description'
          onChange={event => setDescription(event.target.value)} />
      </div>

      <div className='form__input-wrapper'>
        <label className='form__label'>Deadline</label>
        <DatePicker
          selected={deadline}
          className='form__input'
          onChange={date => setEndDate(date)} />
      </div>
      <button type='submit' className='button'>
        <span className='button__text'>Add Task</span>
      </button>
    </form>
  )
}

AddTask.propTypes = {
  addData: PropTypes.func.isRequired,
}

export default AddTask