import React, { useContext } from "react";
import { SummaryForm } from "./SummaryForm";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../Context/DataContextProvider";

export const OrderSummary = () => {
  const { price, sundae } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h2>Scoops Total: ${price.scoops}</h2>
        <h2>Toppings Total: ${price.toppings}</h2>
        <h2>Grand Total: ${price.grandTotal}</h2>
      </div>
      <div>
        <h2>Scoops:</h2>
        {Object.keys(sundae.scoops).map((one) => {
          return (
            <h3 key={one}>
              {one}: {sundae.scoops[one]}
            </h3>
          );
        })}
        <h2>Toppings:</h2>
        {sundae.toppings.map((one) => {
          return <h3 key={one}>{one}</h3>;
        })}
      </div>
      <SummaryForm navigate={navigate} />
    </>
  );
};
