import React from "react";
import { deleteTask } from "../../Actions/tasksAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ({ taskID }) {
  const dispatch = useDispatch();
  const onDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;
    dispatch(deleteTask(id));
  };

  return (
    <div className="taskbuttons">
      <button
        className="btn btn-danger"
        value={taskID}
        onClick={(e) => {
          const confirmBox = window.confirm(
            "Do you really want to delete this task?"
          );
          if (confirmBox === true) onDelete(e);
        }}
      >
        Delete
      </button>
      <Link to={`/edittask/${taskID}`} className="btn btn-primary">
        Edit
      </Link>
    </div>
  );
}
