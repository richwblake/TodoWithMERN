import React from 'react';

export default function CreateTodoForm(props) {
  return(
    <form onSubmit={props.handleSubmit}>
      <div className='form-group'>
        <label>Description:</label>
        <input
        type='text'
        name='todoDescription'
        className='form-control'
        value={props.description}
        onChange={props.handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Responsible:</label>
        <input
        type='text'
        name='todoResponsible'
        className='form-control'
        value={props.responsible}
        onChange={props.handleChange}
        />
      </div>
      <div className='form-group'>
        <div className='form-check form-check-inline'>
          <input
          type='radio'
          name='todoPriority'
          className='form-check-input'
          value='low'
          checked={props.priority === 'low'}
          onChange={props.handleChange}
          />
          <label className='form-check-label'>Low</label>
        </div>
        <div className='form-check form-check-inline'>
          <input
          type='radio'
          name='todoPriority'
          className='form-check-input'
          value='medium'
          checked={props.priority === 'medium'}
          onChange={props.handleChange}
          />
          <label className='form-check-label'>Medium</label>
        </div>
        <div className='form-check form-check-inline'>
          <input
          type='radio'
          name='todoPriority'
          className='form-check-input'
          value='high'
          checked={props.priority === 'high'}
          onChange={props.handleChange}
          />
          <label className='form-check-label'>High</label>
        </div>
      </div>
      <div className='form-group'>
        <input type='submit' value='Create Todo' className='btn btn-primary' />
      </div>
    </form>
  )
}