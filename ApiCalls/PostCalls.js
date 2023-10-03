const createPost = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7100/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const updatePost = (payload) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/api/posts${payload.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const getAllPost = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7100/api/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const checkUser = (uid) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/checkuser/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7100/api/Categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const deletePost = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/api/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getPostComments = (postId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/post/comments/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getCommentById = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/comment/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createComment = (payload, postId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/post/comments/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const updateComment = (payload, id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/comment/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const deleteComment = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7100/comment/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  updatePost,
  createPost,
  getAllPost,
  checkUser,
  getAllCategories,
  deletePost,
  getPostComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
