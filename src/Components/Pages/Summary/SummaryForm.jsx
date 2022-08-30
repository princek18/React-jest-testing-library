import { Tooltip } from "@mui/material";
import React, { useState } from "react";

export const SummaryForm = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
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
      <div>
        <button disabled={!toggle}>Confirm Order</button>
      </div>
    </div>
  );
};
