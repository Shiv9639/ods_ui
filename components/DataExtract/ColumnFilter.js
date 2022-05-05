import React from "react";
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className="search">
      <span>
        Search:{" "}
        <input
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </span>
    </div>
  );
};

export default ColumnFilter;
