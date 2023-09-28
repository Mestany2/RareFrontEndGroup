import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  getPostComments, createComment, checkUser, updateComment,
} from '../../ApiCalls/PostCalls';
import Comment from '../../components/Comment';

const initialState = {
  content: '',
};

export default function PostsComments() {
  const [postComments, setPostComments] = useState(null);
  const [formInput, setFormInput] = useState(initialState);
  const [userId, setUserId] = useState(0);
  const [editedComment, setEditedComment] = useState(null);
  const router = useRouter();
  const { user } = useAuth();
  const { postId } = router.query;
  const getPostAndComments = () => {
    getPostComments(postId)?.then(setPostComments);
  };

  const getThisRareUsersId = () => {
    checkUser(user.uid).then(setUserId);
  };

  useEffect(() => {
    getPostAndComments();
    getThisRareUsersId();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editedComment) {
      // Edit
      setEditedComment((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      // Create
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleEdit = (comment) => {
    setEditedComment(comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editedComment) {
      const payload = { content: editedComment.content, rareUsersId: userId[0]?.id };
      updateComment(payload, editedComment.id).then(() => {
        getPostAndComments();
        setFormInput(initialState);
        setEditedComment(null); // Exit edit mode
      });
    } else {
      const payload = { ...formInput, rareUsersId: userId[0]?.id };
      createComment(payload, postId).then(() => {
        getPostAndComments();
        setFormInput(initialState);
      });
    }
  };

  return (
    <>
      {postComments && (
        <div>
          <div className="d-flex flex-column post-comment-page">
            <h2>{postComments.title}</h2>
            <p>{postComments.content}</p>
          </div>
          <div className="comment-input-cont">
            <Form onSubmit={handleSubmit}>
              <Form.Label className="text-center d-flex justify-content-center">
                Write a Comment
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Comment..."
                name="content"
                value={editedComment ? editedComment.content : formInput.content}
                onChange={handleChange}
                required
              />
              <button type="submit" className="d-flex">
                {editedComment ? 'Update' : 'Submit'}
              </button>
            </Form>
          </div>
          {postComments.comments.map((comment) => (<Comment commentObj={comment} userIdCheck={userId[0]?.id} onUpdate={getPostAndComments} onEdit={handleEdit} />))}
        </div>
      )}
    </>
  );
}
