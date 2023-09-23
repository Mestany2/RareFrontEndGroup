/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createCategory } from '../api/categoriesData.js';
import { useRouter } from 'next/router.js';

function CategoryForm({ }) {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    console.warn('my payload', payload);
    createCategory(payload).then(() => {
      router.push('/allCategories');
    });
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control as="textarea" name="label" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// CategoryForm.propTypes = {
//   categories: PropTypes.shape({
//     Label: PropTypes.string.isRequired,
//  }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

export default CategoryForm;