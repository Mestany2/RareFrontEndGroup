/* eslint-disable */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createCategory } from '../api/categoriesData.js';

function CategoryForm({ }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    console.warn('my payload', payload);
    createCategory(payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ flex: 1 }}>
          <Form.Label>Enter Category Name</Form.Label>
          <Form.Control as="textarea" name="label" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ height: '12%'}}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default CategoryForm;
