import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, onUpdate }) {
  const [formData, setFormData] = useState({
    bio: '',
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData, UID: user.uid, ProfileImageURL: user.fbUser.photoURL, CreatedOn: new Date(Date.now()), Active: true,
    };
    console.warn('my payload', payload);
    registerUser(payload);
    onUpdate();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control as="textarea" name="FirstName" required placeholder="First Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Last Name</Form.Label>
        <Form.Control as="textarea" name="LastName" required placeholder="Last Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Email</Form.Label>
        <Form.Control as="textarea" name="Email" required placeholder="Email" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea" name="Bio" required placeholder="Bio" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label> Staff member?  </Form.Label>
        <FloatingLabel controlId="floatingInput1" label="Are you a Staff?" className="mb-3" style={{ color: 'red' }}>
          <Form.Select
            type="text"
            placeholder=""
            name="isStaff"
            onChange={({ target }) => {
              const selectedValue = target.value === 'true'; // Convert to boolean
              setFormData((prev) => ({ ...prev, [target.name]: selectedValue }));
            }}
            required
          >
            <option>Are you a staff?</option>
            <option value="true" style={{ color: 'black' }}>Yes</option>
            <option value="false" style={{ color: 'black' }}>No</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    fbUser: PropTypes.shape({
      photoURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RegisterForm;
