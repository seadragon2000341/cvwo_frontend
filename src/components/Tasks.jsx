import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { SearchTags } from "./SearchTags.jsx";

export default function Tasks() {
  const [filter, setFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState([]);

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterButtons = FILTER_NAMES.map((name) => (
    <FilterButton name={name} setFilter={setFilter} />
  ));

  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="container">
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Here are your tasks!</h1>
          <p className="lead text-muted">
            Procrastination taught me how to live life dangerously
          </p>
        </div>
      </section>
      Filter by:{filterButtons}
      <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
      <div>
        <div>
          <div className="text-right">
            <Link to="/newtask" className="btn custom-button">
              Create New Recipe
            </Link>
          </div>
          <div>
            <Task
              filteredTasks={tasks.filter(FILTER_MAP[filter])}
              tagFilter={tagFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
