const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'https://localhost:8080/categorias'
  : 'https://hylarioflix.herokuapp.com/categorias';

export default {
  URL
};
