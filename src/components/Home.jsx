import React from "react"
import { Link } from "react-router-dom";

export default () => (
 
  <div className="text-center vertical-center">
    <div>
      <h1 className="cover-heading">Task Manager</h1>
      <p className>A simple task manager</p>
      <Link to="/tasks" className="btn btn-lg btn-secondary">
        View tasks
      </Link>
    </div>
  </div>
);
