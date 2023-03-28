import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Resources = () => {
  const [location, setLocation] = useState(null);
  const [tool, setTool] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleToolChange = (event) => {
    setTool(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the form
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  };

  return (
    <Form className="container border p-3" onSubmit={handleSubmit}>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Button className="m-3 btn-success" variant="primary" onClick={getLocation}>
          Get current location
        </Button>
        {location && (
          <Form.Text className="text-muted">
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="m-3 p-3" controlId="tool">
        <Form.Label>Tool</Form.Label>
        <Form.Control as="select" onChange={handleToolChange}>
          <option value="">Select a tool</option>
          <option value="plow">Plow</option>
          <option value="harvester">Harvester</option>
          <option value="sprayer">Sprayer</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="m-3 p-3" controlId="start-time">
        <Form.Label>Start Time</Form.Label>
        <Form.Control type="datetime-local" onChange={handleStartTimeChange} />
      </Form.Group>

      <Form.Group className="m-3 p-3" controlId="end-time">
        <Form.Label>End Time</Form.Label>
        <Form.Control type="datetime-local" onChange={handleEndTimeChange} />
      </Form.Group>

      <Button className="btn-success"variant="primary" type="submit">
        Book
      </Button>
    </Form>
  );
};

export default Resources;