import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getSearch(name) {
    axios.get(`/api/reviews/{name}`)
      .then(res => {
        ServerActions.receiveSearch(res.data.response);
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
