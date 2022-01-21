import React from "react";

export default function FilterButtons({ setStatusFilter }) {
  const filterNames = ["All", "Active", "Completed"];
  const filterButtons = filterNames.map((name) => (
    <button type="button" className="btn" onClick={() => setStatusFilter(name)}>
      {name}
    </button>
  ));

  return filterButtons;
}
