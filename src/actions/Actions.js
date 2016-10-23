import API from '../API'
import AppDispatcher from '../AppDispatcher'

const Actions = {
   getSearch(name){
     API.getSearch(name);
   },

}

export default Actions
