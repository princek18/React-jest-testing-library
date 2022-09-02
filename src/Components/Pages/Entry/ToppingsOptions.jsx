import React, { useContext } from "react";
import { DataContext } from "../../../Context/DataContextProvider";

export const ToppingsOptions = ({ data }) => {
  const { addFlavour } = useContext(DataContext);

  const handleChange = (e) => {
    if (e.target.checked === true) {
      addFlavour("toppings", data.name, 1);
    } else {
      addFlavour("toppings", data.name);
    }
  };
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
        <label
          style={{ marginRight: "5px", fontSize: "18px", fontWeight: "500" }}
          htmlFor="toppingName"
        >
          {data.name}
        </label>
        <input type="checkbox" id="toppingName" onChange={handleChange} />
      </div>
    </div>
  );
};
