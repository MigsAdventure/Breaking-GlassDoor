import API from '../API'
import AppDispatcher from '../AppDispatcher'

const Actions = {
   getSearch(name){
     API.getSearch(name);
   },

   setScores(company) {
     API.setScores(company);
   },

}

export default Actions
