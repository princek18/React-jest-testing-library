import React, { useContext } from "react";
import { DataContext } from "../../../Context/DataContextProvider";
import { Options } from "./Options";

export const IndexUI = () => {
  const { price } = useContext(DataContext);
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: ${price.grandTotal}</h2>
    </div>
  );
};
