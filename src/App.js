import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoList from './Components/todoList';
import CreateTodoContainer from './Components/createTodoContainer';
import EditTodo from './Components/editTodo';

export default class App extends Component {
  render() {
    return(
      <Router>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='wills.fyi' target="_blank">
              <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/htc/37/whale_1f40b.png' width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to='/' className='navbar-brand'>MERN Todo App</Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>Todos</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/createtodo' className='nav-link'>Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={TodoList} />
          <Route exact path='/createtodo' component={CreateTodoContainer} />
          <Route exact path='edittodo/:id' component={EditTodo} /> 
        </div>
      </Router>
    )
  }
}
