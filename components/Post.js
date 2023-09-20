import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';

export default function PostCard({ postObj }) {
  const { user } = useAuth();
  const [userId, setUserId] = useState(null);
  const checkCurrentUser = () => {
    checkUser(user.uid).then(setUserId);
  };

  useEffect(() => {
    checkCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let deleteJSX = null;
  if (userId[0].id === postObj.rareUsersId) {
    deleteJSX = <button className="delete-post-btn" type="button">Delete</button>;
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
            {deleteJSX}
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
};
