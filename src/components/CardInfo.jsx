import React, { useEffect, useState } from "react";
import * as UsersApi from "../api/UsersApi";
import Alert from 'react-bootstrap/Alert';


const CardInfo = ({ card, visible, setVisible }) => {
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [success, setSuccess] = useState(false);

  const submitDisabled = !price || !condition;

  const postCard = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem("userId");
    await UsersApi.createCardForUser(userId, card, condition, price);
    setSuccess(true);
    setCondition("");
    setPrice("");
  };

  useEffect(() => {
    if (success) {
      const interval = setInterval(() => {
        setVisible(!visible);
        setSuccess(false);
      }, 1500);

      return () => clearInterval(interval);
    }
     // eslint-disable-next-line
  }, [success]);

  const handleChange = (e) => {
    console.log(e);
    setPrice(e.target.value);
  };
  const handleCondition = (e) => {
    console.log(e);
    setCondition(e.target.value);
  };
  return (
    <div>
      <h2>{card.name}</h2>
      {success ? <Alert variant="success">Success! Card added to your selling list!</Alert>
         : (
          <form onSubmit={postCard}>
            <input
              type="number"
              placeholder="Enter price"
              onChange={handleChange}
              value={price}
            ></input>
            <select onChange={handleCondition} value={condition}>
              <option value="">Select the card condition</option>
              <option value="NEW">New</option>
              <option value="AS_GOOD_AS_NEW">As good as new</option>
              <option value="USED">Used</option>
            </select>
            <button disabled={submitDisabled}>Confirm</button></form>)}
    </div>
  );
};

export default CardInfo;
