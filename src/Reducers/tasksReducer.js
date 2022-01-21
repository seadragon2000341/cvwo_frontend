function tasksReducer(state = [], action) {
  const sortAsc = (key) => (a, b) => a[key] > b[key] ? -1 : 1;
  const sortDsc = (key) => (a, b) => a[key] > b[key] ? 1 : -1;

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
    case "ALPHABET_ASC":
      return state.slice().sort(sortDsc("name"));

    case "ALPHABET_DESC":
      return state.slice().sort(sortAsc("name"));
    case "DATE_ASC":
      return state.slice().sort(sortDsc("date"));
    case "DATE_DESC":
      return state.slice().sort(sortAsc("date"));

    default:
      return state;
  }
}

export default tasksReducer;
