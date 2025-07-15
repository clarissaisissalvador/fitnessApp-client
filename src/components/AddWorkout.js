import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Notyf } from 'notyf';

const notyf = new Notyf();

const AddWorkoutModal = ({ show, handleClose, onWorkoutAdded }) => {
  const [form, setForm] = useState({ name: '', duration: '' });
  const token = localStorage.getItem('token');

  const addWorkout = (e) => {
    e.preventDefault();

    fetch('https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data._id) {
          notyf.success('Workout added!');
          onWorkoutAdded(); 
          handleClose();
          setForm({ name: '', duration: '' });
        } else {
          notyf.error('Failed to add workout.');
        }
      })
      .catch(() => notyf.error('Add workout request failed.'));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={addWorkout}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter workout name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration (minutes)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter duration"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="success" type="submit">Add Workout</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddWorkoutModal;