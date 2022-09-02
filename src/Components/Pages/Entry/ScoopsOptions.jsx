import React, { useContext } from "react";
import { DataContext } from "../../../Context/DataContextProvider";

export const ScoopsOptions = ({ data }) => {
  const { addFlavour } = useContext(DataContext);

  const handleChange = (e) => {
    addFlavour("scoops", data.name, e.target.value);
  };
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
        <label
          style={{ marginRight: "5px", fontSize: "18px", fontWeight: "500" }}
          htmlFor="scoopName"
        >
          {data.name}
        </label>
        <input
          defaultValue={0}
          style={{ width: "15%" }}
          type="number"
          id="scoopName"
          onChange={handleChange}
          min={0}
        />
      </div>
    </div>
  );
};
