import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTask } from "../../Actions/tasksAction";
import { useSelector, useDispatch } from "react-redux";
import { AddTags } from "../NewTask/AddTags.jsx";

function EditTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  //initialize component state
  const [task, setTask] = useState("");

  //Find task with id=id params from redux store
  const selectedTask = useSelector((state) =>
    state.tasks.find((task) => task.id == id)
  );

  //Set component state with task from redux store
  useEffect(() => {
    if (selectedTask !== undefined) setTask(selectedTask);
  }, [selectedTask]);

  //Update task properties with edited values
  const onChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };

  //Call updateTask action
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTask(task));
    navigate("/tasks");
  };

  return (
    <div className="vertical-center">
      <h1>Edit your task</h1>
      <form
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <label>Task name</label>
        <input
          value={task.name}
          name="name"
          className="form-control"
          required
          onChange={onChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          className="form-control"
          required
          rows="5"
          onChange={onChange}
          value={task.description}
        />

        <label>Due Date</label>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={onChange}
          required
          className="form-control"
        />

        <label>
          Completed:
          <input
            name="completed"
            type="checkbox"
            checked={task.completed}
            onChange={onChange}
          />
        </label>

        <div>
          <label>Tags:</label>
          <AddTags setTask={setTask} task={task} />
        </div>
        <div>
          <button onClick={onSubmit} className="btn btn-primary">
            Submit
          </button>
          <Link to="/tasks" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
