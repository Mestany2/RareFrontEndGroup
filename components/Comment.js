import React from 'react';
import PropTypes from 'prop-types';
import { deleteComment } from '../ApiCalls/PostCalls';

export default function Comment({
  commentObj, userIdCheck, onUpdate, onEdit,
}) {
  const handleEdit = () => {
    onEdit(commentObj);
  };

  const handleDelete = () => {
    deleteComment(commentObj.id).then(() => onUpdate());
  };

  let deleteEditJSX = null;
  if (userIdCheck === commentObj.rareUsersId) {
    deleteEditJSX = (
      <div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="comment-cont">
      <p>{commentObj.content}</p>
      {deleteEditJSX}
    </div>
  );
}

Comment.propTypes = {
  commentObj: PropTypes.shape({
    id: PropTypes.number,
    rareUsersId: PropTypes.number,
    postId: PropTypes.number,
    content: PropTypes.string,
    CreatedOn: PropTypes.string,
  }).isRequired,
  userIdCheck: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
