export function viewTasks() {
  return (dispatch) => {
    return fetch("http://54.169.72.226/api/tasks/index")
      .then((response) => response.json())
      .then((tasks) => {
        dispatch({ type: "VIEW_TASKS", tasks: tasks }); // dispatch data to reducer
      });
  };
}

export function addTask(task) {
  return (dispatch) => {
    return fetch("http://54.169.72.226/api/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'X-CSRF-Token': token,
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((task) => {
        dispatch({ type: "ADD_TASK", task: task }); // dispatch data to reducer
      })
     
  };
}

export function updateTask(task) {
  return (dispatch) => {
    return fetch(`http://54.169.72.226/api/update/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((task) => {
        dispatch({ type: "UPDATE_TASK", task: task });
      })
        // .then((response) =>window.location.assign("/tasks")); // dispatch data to reducer
      };
  }


export function toggleTodo(index) {
  return { type: "TOGGLE_TODO", index: index };
}
export function deleteTask(id) {
  return (dispatch) => {
    return fetch(`http://54.169.72.226/api/destroy/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((task) => {
      dispatch({ type: "DELETE_TASK", id: task.id}); // dispatch data to reducer
    })
   
};
  }

