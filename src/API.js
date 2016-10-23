import axios from 'axios';
import ServerAction from './actions/ServerActions';

const API = {
  getCompany(name) {
    axios.get(`/company/${name}`)
      .then(res => {
        console.log('res.data', res.data);
      })
      // .then(data => {
      //   ServerAction.getCompany(name);
      // })
      .catch(err => {
        console.log('err:', err)
      })
  },
} //end object

export default API;
