import { Tooltip } from "@mui/material";
import React, { useState } from "react";

export const SummaryForm = ({ navigate }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = () => {
    navigate("/confirmation");
  };
  return (
    <div>
      <input
        id="tcCheck"
        type="checkbox"
        checked={toggle}
        onChange={handleToggle}
      />
      <label htmlFor="tcCheck">
        <Tooltip title="Some conditions would be there!">
          <span>Terms and Conditions.</span>
        </Tooltip>
      </label>
      <div style={{ marginTop: "20px" }}>
        <button disabled={!toggle} onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};
