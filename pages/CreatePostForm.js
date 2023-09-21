import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAuth } from '../utils/context/authContext';
import { createPost, updatePost, getAllCategories } from '../ApiCalls/PostCalls';
import { checkUser } from '../utils/auth';

const initialState = {
  Title: '',
  ImageURL: '',
  Content: '',
  Approved: false,
};

export default function PostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [category, setCategory] = useState([]);
  const [rareUser, setRareUser] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  console.warn(user);
  useEffect(() => {
    getAllCategories().then(setCategory);
    checkUser(user.uid).then(setRareUser);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updatePost(formInput)
        .then(() => router.push('/Feed'));
    } else {
      const payload = { ...formInput, PublicationDate: new Date(Date.now()), RareUsersId: rareUser[0].id };
      createPost(payload).then(() => {
        router.push('/Feed');
      });
    }
    console.warn(category);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Post</h2>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCharName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="Title"
            value={formInput.Title}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridContent">
          <Form.Label>Write the Post</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Post Content"
            name="Content"
            value={formInput.Content}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImageUrl">
          <Form.Label>ImageURL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter Url link for image"
            name="ImageURL"
            value={formInput.ImageURL}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridLevel">
        <Form.Select
          aria-label="Category"
          name="CategoriesId"
          onChange={handleChange}
          className="mb-3"
          value={obj.CategoriesId}
        >
          <option value="">Select a Category</option>
          {
            category.map((Categories) => (
              <option
                key={Categories.id}
                value={Categories.id}
              >
                {Categories.label}
              </option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    Title: PropTypes.string,
    CategoriesId: PropTypes.number,
    ImageURL: PropTypes.string,
    Content: PropTypes.string,
    Approved: PropTypes.bool,
  }),
};
PostForm.defaultProps = {
  obj: initialState,
};
