import React, { Component } from 'react';
import CreateTodoForm from './createTodoForm';

const initialState = {
  todoDescription: '',
  todoResponsible: '',
  todoPriority: '',
  todoCompleted: false
}

export default class CreateTodo extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Form Submitted!');
    console.log(`Description: ${this.state.todoDescription}`);
    console.log(`Person(s) Responsible: ${this.state.todoResponsible}`);
    console.log(`Priority: ${this.state.todoPriority}`);

    this.setState(initialState);
  }


  render() {
    return(
      <div style={{ marginTop: 10 }}>
        <h3>Create new Todo</h3>
        <CreateTodoForm handleChange={this.handleOnChange} handleSubmit={this.handleSubmit} description={this.state.todoDescription} responsible={this.state.todoResponsible} priority={this.state.todoPriority}/>
      </div>
    )
  }
}