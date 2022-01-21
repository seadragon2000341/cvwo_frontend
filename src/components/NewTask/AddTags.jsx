import React from "react";

export function AddTags({ setTask, task }) {
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTask({ ...task, tags: [...task.tags, event.target.value] });
      event.target.value = "";
    }
  };
  const deleteTag = (taskIndex) => {
    setTask({ ...task, tags: [...task.tags.filter((_, index) => index !== taskIndex)] });
  };

  return (
    <div className="tags-form">
      <ul id="tags">
        {task.tags &&
          task.tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => deleteTag(index)}>
                x
              </span>
            </li>
          ))}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add tags! Tags are case sensitive"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
      />
    </div>
  );
}
