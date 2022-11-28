import React, { useState } from "react";
import * as UsersApi from "../api/UsersApi";
import Alert from 'react-bootstrap/Alert';


const CardInfo = ({ card }) => {
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [success, setSuccess] = useState(false);

  const postCard = async () => {
    const userId = window.localStorage.getItem("userId");
    await UsersApi.createCardForUser(userId, card, condition, price);
    setSuccess(true);
  };

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
      {success ?
        <Alert variant="success">Success! Card added to your selling list!</Alert> : (
          <div>
            <input
              type="text"
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
            <button onClick={postCard}>Confirm</button></div>)}
    </div>
  );
};

export default CardInfo;
