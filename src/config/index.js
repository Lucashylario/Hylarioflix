const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'https://localhost:8080/categorias'
  : 'https://viniflix-alura.herokuapp.com/categorias';

export default {
  URL,
};
