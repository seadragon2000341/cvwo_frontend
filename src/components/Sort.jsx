import React from "react";
import { filterAction } from "../Actions/filterAction";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(filterAction(event.target.value));
  };

  return (

      <select onChange={(e) => onChange(e)}>
        <option value="name_asc">Task Name A-Z</option>
        <option value="name_desc">Task Name Z-A</option>
        <option value="date_asc">Due Date Earliest-Latest</option>
        <option value="date_desc">Due Date Latest-Earliest</option>
      </select>
    
  
  );
};
