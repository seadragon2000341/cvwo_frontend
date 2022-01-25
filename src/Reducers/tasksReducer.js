function tasksReducer(state = [], action) {

  switch (action.type) {
    case "VIEW_TASKS":
      return [...action.tasks];
    case "ADD_TASK":
      return [...state, action.task];
    case "UPDATE_TASK":
      const tasks = state.filter((task) => task.id !== action.task.id);
      return [...tasks, action.task];
    case "DELETE_TASK":
      const remainingTasks = state.filter((task) => task.id !== action.id);
      return remainingTasks;
    
    default:
      return state;
  }
}

export default tasksReducer;
