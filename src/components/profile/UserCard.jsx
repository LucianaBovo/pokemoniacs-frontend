import React, { useEffect, useState } from 'react';
import { coinFormatter } from '../../utils/helpers';
import * as  UsersApi from '../../api/UsersApi';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import './UserCard.css';

const UserCard = ({ card, onRemoveCard }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = window.localStorage.getItem('userId');
  const [editable, setEditable] = useState(false);

  const [price, setPrice] = useState(card.price);
  const [condition, setCondition] = useState(card.condition);
  const [status, setStatus] = useState(card.status);

  useEffect(() => {
    UsersApi.getUserCards(userId);
    // eslint-disable-next-line
  }, []);
  const handleMakeEditable = () => {
    setEditable(true);
    return
  }
  const handleMakeReadonly = () => {
    setEditable(false);
    return
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem("userId");
    const updatedCard = await UsersApi.updateCardForUser(userId, card.id, status, condition, price);
    window.location.reload();
    console.log('updated Card', updatedCard);
  }

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  }
  const handleCondition = (e) => {
    setCondition(e.target.value);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm card deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this card?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={() => onRemoveCard(card.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {editable ? (
          <form onSubmit={handleUpdate} className='edit-user-card-detail'>
            <input
              type="text"
              placeholder="Enter price"
              onChange={handlePrice}
              value={price}
            ></input>
            <select onChange={handleStatus} value={status}>
              <option value="">Select the card status</option>
              <option value="AVAILABLE">Available</option>
              <option value="RESERVED">Reserved</option>
              <option value="SOLD">Sold</option>
            </select>
            <select onChange={handleCondition} value={condition}>
              <option value="">Select the card condition</option>
              <option value="NEW">New</option>
              <option value="AS_GOOD_AS_NEW">As good as new</option>
              <option value="USED">Used</option>
            </select>
            <Button variant="outline-secondary" onClick={handleMakeReadonly}>Cancel</Button>
            <Button variant="outline-danger" type="submit">Confirm</Button>
          </form>)
          : (
            <div className="user-card">
              <img src={card.picture} alt={card.name} />
              <h3>{card.name}</h3>
              <div className='price-container'>
                <h4>{coinFormatter((card.price))}</h4>
              </div>
              <Button variant="outline-secondary" onClick={handleMakeEditable}>Edit</Button>
              <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </div>

          )}
      </div>
    </div>
  )
}

export default UserCard;