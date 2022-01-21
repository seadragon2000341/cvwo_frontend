import React from "react";

export default function FilterButton({name,setFilter}) {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => setFilter(name)}
    >
          {name}
    </button>
  );
}
