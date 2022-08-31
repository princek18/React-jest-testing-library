import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScoopsOptions } from "./ScoopsOptions";
import { ToppingsOptions } from "./ToppingsOptions";
import "./style.css";

export const Options = ({ optionType }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [optionType]);

  const RenderComponent =
    optionType === "scoops" ? ScoopsOptions : ToppingsOptions;

  const dataRender = data.map((one) => <RenderComponent data={one} />);

  if (error) {
    return <div data-testid="error">Error Occured!</div>;
  }

  return <div className="wrapper">{dataRender}</div>;
};
