import React, { createContext, useEffect, useState } from "react";
import { productsPrice } from "../Constants/Constants";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sundae, setSunade] = useState({
    scoops: {},
    toppings: [],
  });
  const [price, setPrice] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    let scoopsPrice = 0;
    let toppingsPrice = 0;
    let grandTotal = 0;
    for (const key in sundae.scoops) {
      scoopsPrice += sundae.scoops[key] * productsPrice.scoops;
    }
    toppingsPrice += sundae.toppings.length * productsPrice.toppings;
    grandTotal = scoopsPrice + toppingsPrice;
    setPrice({
      scoops: scoopsPrice,
      toppings: toppingsPrice,
      grandTotal,
    });
  }, [sundae]);

  const addFlavour = (optionType, name, value = 0) => {
    if (optionType === "scoops") {
      let scoops = { ...sundae.scoops };
      scoops[name] = value;
      setSunade((prev) => ({ ...prev, scoops }));
    } else {
      let toppings = [...sundae.toppings];
      if (value === 1) {
        toppings.push(name);
      } else {
        toppings = toppings.filter((data) => data !== name);
      }
      setSunade((prev) => ({ ...prev, toppings }));
    }
  };

  return (
    <DataContext.Provider value={{ price, sundae, addFlavour }}>
      {children}
    </DataContext.Provider>
  );
};
