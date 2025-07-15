import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Modal, Form } from 'react-bootstrap';
import { Notyf } from 'notyf';
import AddWorkoutModal from '../components/AddWorkout';

const notyf = new Notyf();

const WorkoutManager = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const token = localStorage.getItem('token');

  const getWorkouts = () => {
    fetch('https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.workout) {
          setWorkouts(data.workout);
        } else {
          setWorkouts([]);
          notyf.error("No workouts found.");
        }
      })
      .catch(() => notyf.error('Failed to fetch workouts.'));
  };

  const deleteWorkout = (id) => {
    fetch(`https://fitnessapp-api-ln8u.onrender.com/workouts/deleteWorkout/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          notyf.success('Workout deleted.');
          getWorkouts();
        } else {
          notyf.error('Workout not found.');
        }
      })
      .catch(() => notyf.error('Failed to delete workout.'));
  };

  const completeWorkout = (id) => {
    fetch(`https://fitnessapp-api-ln8u.onrender.com/workouts/completeWorkoutStatus/${id}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.updatedWorkout) {
          notyf.success('Workout marked as completed.');
          getWorkouts();
        } else {
          notyf.error('Workout not found.');
        }
      })
      .catch(() => notyf.error('Complete request failed.'));
  };

  const saveUpdatedWorkout = () => {
    fetch(`https://fitnessapp-api-ln8u.onrender.com/workouts/updateWorkout/${editWorkout._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: editWorkout.name,
        duration: editWorkout.duration
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.updatedWorkout) {
          notyf.success('Workout updated.');
          setShowEditModal(false);
          setEditWorkout(null);
          getWorkouts();
        } else {
          notyf.error('Workout not found.');
        }
      })
      .catch(() => notyf.error('Update request failed.'));
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
  <div id="workout">
    <div className="container py-4">
      <h2 className="text-center mb-4 pt-5 mt-5 text-white">Workout Manager</h2>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" id="addWorkout" onClick={() => setShowAddModal(true)}>
          Add Workout
        </Button>
      </div>

      <Card>
        <Card.Header>My Workouts</Card.Header>
        <Card.Body>
          {workouts.length === 0 ? (
            <p>No workouts found.</p>
          ) : (
            workouts.map((workout) => (
              <Card className="mb-3" key={workout._id}>
                <Card.Body>
                  <Row>
                    <Col md={3}><strong>{workout.name}</strong></Col>
                    <Col md={3}>Duration: {workout.duration} mins</Col>
                    <Col md={3}>Status: {workout.status || 'pending'}</Col>
                    <Col md={3} className="text-end">
                      <Button
                        variant="primary"
                        size="sm"
                        className="me-2"
                        onClick={() => {
                          setEditWorkout(workout);
                          setShowEditModal(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => completeWorkout(workout._id)}
                      >
                        Complete
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteWorkout(workout._id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editWorkout && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Workout Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editWorkout.name}
                  onChange={(e) => setEditWorkout({ ...editWorkout, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="number"
                  value={editWorkout.duration}
                  onChange={(e) => setEditWorkout({ ...editWorkout, duration: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveUpdatedWorkout}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* Add Workout Modal */}
      <AddWorkoutModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onWorkoutAdded={getWorkouts}
      />
    </div>
   </div>
  );
};

export default WorkoutManager;
