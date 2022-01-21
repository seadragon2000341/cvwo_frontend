import React from "react";
import { addTask } from "../../Actions/tasksAction";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTags } from "./AddTags.jsx";

function NewTask() {
  const [task, setTask] = useState({
    name: "",
    date: "",
    description: "",
    completed: false,
    tags: ["Test Tag"],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    navigate("/tasks");
  };

  return (
    <div className="container">
      <h1 className="font-weight-normal mb-5">Add a new task!</h1>
      <form
        onSubmit={onSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <div>
          <label>Task name</label>
          <input
            required
            type="text"
            name="name"
            className="form-control"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            required
            rows="5"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="date"
            onChange={onChange}
            required
            className="form-control"
          />
        </div>
        <label>Tags:</label>
        <AddTags setTask={setTask} task={task} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/tasks" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default NewTask;
