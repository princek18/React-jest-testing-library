import React from "react";

export const ScoopsOptions = ({ data }) => {
  return (
    <div>
      <div>
        <img
          src={`http://localhost:3030/${data.imagePath}`}
          width="200px"
          alt={`${data.name} scoop`}
        />
      </div>
      <div>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
};
