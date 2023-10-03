import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deletePost } from '../ApiCalls/PostCalls';

export default function PostCard({ postObj, onUpdate, userIdCheck }) {
  const router = useRouter();
  const deleteThisPost = () => {
    if (window.confirm('Delete This Post?')) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  const handleCommentClick = () => {
    router.push(`/comments/${postObj.id}`);
  };

  let deleteJSX = null;
  if (userIdCheck === postObj.rareUsersId) {
    deleteJSX = <button className="delete-post-btn" onClick={deleteThisPost} type="button">Delete</button>;
  }
  return (
    <>
      <div className="post-card-cont align-self-center">
        <div className="post-title-cont">
          <h5 className="post-title">{postObj.title}</h5>
        </div>
        <div className="post-body-cont d-flex flex-row">
          <div className="post-content-container">
            <p className="post-content">{postObj.content}</p>
            <div className="d-flex">
              {deleteJSX}
              <button type="button" onClick={handleCommentClick} className="comment-btn">Comments</button>
            </div>
          </div>
          <div className="post-image-container">
            <Card.Img id="post-image" src={postObj.imageURL} alt="postImage" />
          </div>
        </div>
      </div>
    </>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    rareUsersId: PropTypes.number,
    categoriesId: PropTypes.number,
    title: PropTypes.string,
    publicationDate: PropTypes.instanceOf(Date),
    imageURL: PropTypes.string,
    content: PropTypes.string,
    approved: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  userIdCheck: PropTypes.number.isRequired,
};
