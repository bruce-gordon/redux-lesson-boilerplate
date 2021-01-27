import React from 'react';
import { connect } from 'react-redux';
import { toggleStatus } from '../actions';


const ToDo = ({ number, id, todo, completed, toggleStatus }) => {

  const toggle = (e) => {
    e.preventDefault();
    toggleStatus(id);
    console.log(id)
  }

  const showStatus = () => {
    return completed ? 'completed' : 'not-completed';
  }

  const changeBtnText = () => {
    return completed ? 'Undo' : 'Mark complete'
  }

  return (
    <div className={ showStatus() }>
      <h3>{ number }. { todo }</h3>
      <button onClick={ toggle }>{ changeBtnText() }</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleStatus: num => dispatch( toggleStatus(num) )
})

export default connect (null, mapDispatchToProps) (ToDo);
