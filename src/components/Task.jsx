import React from "react";
import { deleteTask } from "../Actions/tasksAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header.jsx";

function Task({ filteredTasks, tagFilter }) {
  const dispatch = useDispatch();
  const onDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;
    dispatch(deleteTask(id));
  };
  const noTask = (
    <h4 className=" d-flex align-items-center justify-content-center">
      No tasks here!
    </h4>
  );

  const tasks = filteredTasks.filter((task) =>
    tagFilter.every((v) => task.tags.includes(v))
  );

  const taskList = tasks.map((task, index) => (
    <div key={index} className="card">
      <h4>{task.name}</h4>
      <div>
        <img
          src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
          alt="calendar"
        />
        {task.date}
      </div>
      <p>{task.description}</p>
      <div>
        <button
          className="btn btn-danger"
          value={task.id}
          onClick={(e) => {
            const confirmBox = window.confirm(
              "Do you really want to delete this task?"
            );
            if (confirmBox === true) onDelete(e);
          }}
        >
          Delet
        </button>
        <Link to={`/edittask/${task.id}`} className="btn btn-primary">
          Edit
        </Link>
        <ul id="tags">
          Tags:{" "}
          {task.tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <div>
      {taskList.length === 0 ? (
        noTask
      ) : (
        <>
          <Header />
          {taskList}
        </>
      )}
    </div>
  );
}
export default Task;
