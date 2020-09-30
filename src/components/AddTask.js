import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'

function AddTask(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setEndDate] = useState(new Date())
  function HandleFormData(e) {
    e.preventDefault()
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
      <input type='text' value={name} onChange={event => setName(event.target.value)} />
      <textarea type='text' value={description} onChange={event => setDescription(event.target.value)} />
      <DatePicker selected={deadline} onChange={date => setEndDate(date)} />
      <button type='submit'>Add</button>
    </form>
  )
}

AddTask.propTypes = {
  addData: PropTypes.func.isRequired,
}

export default AddTask