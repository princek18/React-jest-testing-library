import React from "react";

export const ToppingsOptions = ({ data }) => {
  return (
    <div>
      <div>
        <img
          src={`http://localhost:3030/${data.imagePath}`}
          width="200px"
          alt={`${data.name} topping`}
        />
      </div>
      <div>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
};
