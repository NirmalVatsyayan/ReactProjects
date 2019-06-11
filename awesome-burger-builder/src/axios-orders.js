import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-burger-283ed.firebaseio.com/"
});

export default instance;
