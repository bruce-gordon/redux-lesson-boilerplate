import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/ToDo';

const ToDoList = ({ todos }) => {
  console.log( todos );

  const allToDos = todos.map((todo, index) => {
    return (
      <Todo
        key={ todo.id }
        number={ index + 1 }
        {...todo}
      />
    )
  })

  return (
    <ul>
      { allToDos }
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});



export default connect (mapStateToProps) (ToDoList);
