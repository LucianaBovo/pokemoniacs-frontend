import React, { useEffect, useState } from "react";
import * as UsersApi from "../api/UsersApi";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './profile/UserCard.css'
import './profile/CardInfo.css'
const CardInfo = ({ card, visible, setVisible }) => {
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [success, setSuccess] = useState(false);

  const submitDisabled = !price || !condition;

  const postCard = async (e) => {
    console.log('is being submitted..')
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
    <div className="card-info-form-container">
      <h2>{card.name}</h2>
      {success ? <Alert variant="success">Success! Card added to your selling list!</Alert>
        : (
          <Form className="card-info-form" >
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder=" Enter price" id="enter-card-price"
                onChange={handleChange}
                value={price} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select className="mb-3" onChange={handleCondition} value={condition}>
                <option value="">Select the card condition</option>
                <option value="MINT">Mint</option>
                <option value="AS_GOOD_AS_NEW">As good as new</option>
                <option value="USED">Used</option>
              </Form.Select>
            </Form.Group>
            <Button variant="outline-secondary" disabled={submitDisabled} onClick={postCard}>Confirm</Button>
          </Form>
        )}
    </div>
  );
};

export default CardInfo;
