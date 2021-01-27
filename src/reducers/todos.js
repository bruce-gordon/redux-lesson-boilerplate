export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];

    case 'TOGGLE_STATUS':
      const newState = [...state];
      console.log(newState)
      newState.forEach(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
      })
      return newState;

    default:
      return state;
  }
}
