import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ea23de8ec804b733fb23d82d0df85c0c',
    language: 'pt-BR',
  },
});

export default api;
