import React, { useEffect, useState } from 'react';
import { coinFormatter } from '../../utils/helpers';
import * as  UsersApi from '../../api/UsersApi';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './UserCard.css';

const UserCard = ({ card, onRemoveCard }) => {

  const [price, setPrice] = useState(card.price);
  const [condition, setCondition] = useState(card.condition);
  const [status, setStatus] = useState(card.status);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);


  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleEditShow = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const userId = window.localStorage.getItem('userId');

  useEffect(() => {
    UsersApi.getUserCards(userId);
    // eslint-disable-next-line
  }, []);

  const handleUpdate = async (e) => {
    const userId = window.localStorage.getItem("userId");
    await UsersApi.updateCardForUser(userId, card.id, status, condition, price);
    setEditShow(false);
    window.location.reload();

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
      {/* modal for confirming deleting card */}
      <Modal show={deleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm card deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>Are you sure you want to delete {card.name}?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={() => onRemoveCard(card.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal for confirming deleting card  */}
      {/* modal for editing information */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {card.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-edit-container'>
            <div className='modal-edit-img-container'>
              <img src={card.picture} alt={card.name} className="modal-edit-img" />
            </div>
            <Form className='edit-user-card-detail-form'>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="edit-select-status">Edit price</Form.Label>
                <Form.Control type="number" placeholder="price" id="edit-input-price"
                  onChange={handlePrice}
                  value={price} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="edit-select-status">Edit status</Form.Label>
                <Form.Select id="edit-select-status" onChange={handleStatus} value={status}>
                  <option value="">Select the card status</option>
                  <option value="AVAILABLE">Available</option>
                  <option value="RESERVED">Reserved</option>
                  <option value="SOLD">Sold</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="edit-select-condition">Edit condition</Form.Label>
                <Form.Select id="edit-select-condition" onChange={handleCondition} value={condition}>
                  <option value="">Select the card condition</option>
                  <option value="NEW">Mint</option>
                  <option value="AS_GOOD_AS_NEW">As good as new</option>
                  <option value="USED">Used</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleEditClose}>Cancel</Button>
          <Button variant="outline-danger" disabled={!price} onClick={(e) => handleUpdate(e)} type="submit">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      {/* modal for editing information */}

      <div className="user-card-container">
        <div className="user-card-information">
          <img className="user-card-image" src={card.picture} alt={card.name} />
          <h3>{card.name}</h3>
          <div className="user-card-price-container">
              <h4>{coinFormatter((card.price))}</h4>
          </div>
          <div className='user-card-buttons-container'>
            <Button variant="outline-secondary" onClick={handleEditShow} className="user-card-edit-button">Edit</Button>
            <Button variant="outline-danger" onClick={handleDeleteShow} className="user-card-delete-button">Delete</Button>
          </div>
        </div>
      </div>


      {/* <div>
        <img src={card.picture} alt={card.name} />
        <h3>{card.name}</h3>
        <div className='price-container'>
          <h4>{coinFormatter((card.price))}</h4>
        </div>
        <div className='user-card-buttons-container'>
          <Button variant="outline-secondary" onClick={handleEditShow} className="user-card-edit-button">Edit</Button>
          <Button variant="outline-danger" onClick={handleDeleteShow} className="user-card-delete-button">Delete</Button>
        </div>
      </div> */}
    </div>
  )
}

export default UserCard;