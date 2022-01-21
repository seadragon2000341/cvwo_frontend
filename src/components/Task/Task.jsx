import React from "react";
import Buttons from "./Buttons.jsx";

function Task({ tasks }) {
  const noTask = (
    <h4 className=" d-flex align-items-center justify-content-center">
      No tasks here!
    </h4>
  );

  const taskList = tasks.map((task, index) => (
    <div key={index} className="card">
      <h4>{task.name}</h4>
      <div>
        <img src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5" />
        {task.date}
      </div>
      {task.description}
      <Buttons taskID={task.id} />
      <ul id="tags">
        Tags:{" "}
        {task.tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  ));

  return <>{taskList.length === 0 ? <>No task here</> : <>{taskList}</>}</>;
}
export default Task;
