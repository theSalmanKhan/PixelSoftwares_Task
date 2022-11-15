import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';
const headers = {
  'Content-Type': 'application/json',
};

const productlist = (onResponse, onError) => {
  axios({
    headers: headers,
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
  })
    .then(function (response) {
        onResponse(response.data);
    })
    .catch(error => {
      console.warn(error);
        onError(error);
    });
};

export {productlist};
