import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../Context/DataContextProvider";
import { Options } from "./Options";
import { Link } from "react-router-dom";

export const IndexUI = () => {
  const { price, resetSundae } = useContext(DataContext);

  useEffect(() => {
    resetSundae();
  }, []);

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: ${price.grandTotal}</h2>
      <Link to="/summary">
        <button disabled={price.grandTotal === 0 ? true : false}>
          Confirm
        </button>
      </Link>
    </div>
  );
};
