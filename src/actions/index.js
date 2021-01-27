export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo: todo
});

export const toggleStatus = id => ({
  type: 'TOGGLE_STATUS',
  id: id
})
