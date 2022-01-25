import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task/Task.jsx";
import { useState } from "react";
import FilterButtons from "./FilterButtons";
import { SearchTags } from "./SearchTags.jsx";
import { GetFilteredTasks } from "../Functions/GetFilteredTasks";
import { Sort } from "./Sort.jsx";

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(["name_asc"]);
  const filteredTasks = GetFilteredTasks(statusFilter, tagFilter, sortCriteria);

  return (
    <div className="center">
      <section>
        <h1 className="display-4">Here are your tasks!</h1>
      </section>

      <div>
        Filter status by:
        <FilterButtons setStatusFilter={setStatusFilter} />
        <Link to="/newtask" className="btn custom-button">
          <button className="newtask">Create New Task</button>
        </Link>
      </div>

      <div>
        Filter tags:{" "}
        <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
      </div>
      <div className="sort">
        Sort by: <Sort setSortCriteria={setSortCriteria} />
      </div>

      <div>
        <Task tasks={filteredTasks} />
      </div>
    </div>
  );
}
