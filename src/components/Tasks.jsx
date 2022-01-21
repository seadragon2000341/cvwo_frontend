import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task/Task.jsx";
import { useState } from "react";
import FilterButtons from "./FilterButtons";
import { SearchTags } from "./SearchTags.jsx";
import { useSelector } from "react-redux";
import Sort from "./Sort.jsx";

//This function adds a layer of abstraction: To return an array of filtered tasks based on
//filtering criteria for status and tags
function FilteredTasks(statusFilter, tagFilter) {
  const filter_map = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  let tasks = useSelector((state) => state.tasks); //get all tasks from redux store
  tasks = tasks.filter((task) => tagFilter.every((v) => task.tags.includes(v))); //filter tasks by tags
  tasks = tasks.filter(filter_map[statusFilter]); //filter tasks by status
  return tasks;
}

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState([]);
  const filteredTasks = FilteredTasks(statusFilter, tagFilter);

  return (
    <div className="vertical-center">
      <div>
        <section className="text-center">
          <h1 className="display-4">Here are your tasks!</h1>
          <p className="text-muted lead">So Procrastinate, Much Wow</p>
        </section>

        <div>
          Filter status by:
          <FilterButtons setStatusFilter={setStatusFilter} />
        </div>
        <div>
          Filter tags:{" "}
          <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
        </div>
        <div>
          Sort by: <Sort />
        </div>

        <div className="text-right">
          <Link to="/newtask" className="btn custom-button">
            Create New Task
          </Link>
        </div>
        <div>
          <Task tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
}
