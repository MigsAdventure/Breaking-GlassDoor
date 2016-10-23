import axios from 'axios';
import ServerActions from './actions/ServerActions';

function toHaven(text) {
  axios.get(`https://api.havenondemand.com/1/api/sync/analyzesentiment/v2?text=${text}&apikey=9f7f528c-a8ac-4cf1-aa23-9481b5171d60`)
    .then(res => {
      console.log(res.data);
    })
}

const API = {
  getSearch(name) {
    axios.get(`/api/reviews/${name}`)
      .then(res => {
        ServerActions.receiveSearch(res.data.response);
      })
      .catch(err => {
        console.log('err:', err)
      })
  },
  setScores(company) {
    console.log(company.featuredReview.pros)
    let text = `${company.featuredReview.pros} ${company.featuredReview.cons}`;
    axios.get(`https://api.havenondemand.com/1/api/sync/analyzesentiment/v2?text=${text}&apikey=9f7f528c-a8ac-4cf1-aa23-9481b5171d60`)
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log('err: ', err);
      })
    },

} //end object

export default API;
