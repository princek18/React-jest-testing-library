import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ScoopsOptions } from "./ScoopsOptions";
import { ToppingsOptions } from "./ToppingsOptions";
import "./style.css";
import { productsPrice } from "../../../Constants/Constants";
import { DataContext } from "../../../Context/DataContextProvider";

export const Options = ({ optionType }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { price } = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [optionType]);

  const RenderComponent =
    optionType === "scoops" ? ScoopsOptions : ToppingsOptions;

  const dataRender = data.map((one) => (
    <RenderComponent key={one.name} data={one} />
  ));

  if (error) {
    return <div data-testid="error">Error Occured!</div>;
  }

  return (
    <div className="out-wrapper">
      <div className="head-wrapper">
        <h2>{optionType[0].toUpperCase() + optionType.slice(1)}</h2>
        <h2>
          Each {optionType.slice(0, -1)} price: ${productsPrice[optionType]}
        </h2>
        <h2>
          {optionType[0].toUpperCase() + optionType.slice(1)} Total: $
          {price[optionType]}
        </h2>
      </div>

      <div className="wrapper">{dataRender}</div>
    </div>
  );
};
