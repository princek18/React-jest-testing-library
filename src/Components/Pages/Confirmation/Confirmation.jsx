import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  const [orderNmbr, setOrderNmbr] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .post(`http://localhost:3030/orderConfirm`)
      .then((res) => setOrderNmbr(res.data.orderNumber))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div>Unknown Error Occured!</div>;
  }
  return (
    <div>
      <h2>You are not getting anything!</h2>
      <h2>Order Number: {orderNmbr}</h2>
      <div>
        <Link to="/">
          <button>Go to Entry Page</button>
        </Link>
      </div>
    </div>
  );
};
