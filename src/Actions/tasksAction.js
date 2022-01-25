export function viewTasks() {
  return (dispatch) => {
    return fetch("http://54.169.72.226/api/tasks/index")
      .then((resp) => resp.json())
      .then((tasks) => {
        dispatch({ type: "VIEW_TASKS", tasks: tasks }); 
      });
  };
}

export function addTask(task) {
  return (dispatch) => {
    return fetch("http://54.169.72.226/api/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((task) => {
        dispatch({ type: "ADD_TASK", task: task });
      });
  };
}

export function updateTask(task) {
  return (dispatch) => {
    return fetch(`http://54.169.72.226/api/update/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((task) => {
        dispatch({ type: "UPDATE_TASK", task: task });
      });
  };
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
        dispatch({ type: "DELETE_TASK", id: task.id });
      });
  };
}
