// axiosConfig.js
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'; // if your backend is running on port 8080
axios.defaults.headers.common['Authorization'] = `Basic ${window.btoa('admin:pass')}`;


export default axios;
