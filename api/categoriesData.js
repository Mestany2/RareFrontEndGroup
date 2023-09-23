import { clientCredentials } from '../utils/client';
//  import {}

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL CATEGORY
const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// FIXME: CREATE CATEGORY
const createCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Categories`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    
  })
    .then((resp) => resolve(resp))
    .catch(reject);
});

// FIXME: UPDATE AUTHOR
const updateCategory = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/Categories`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export {
  getCategories,
  createCategory,
  updateCategory,
};
