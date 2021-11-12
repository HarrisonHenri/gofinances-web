import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'x-auth': 'firebase',
  },
});

export { api };
