import API from '../API'
import AppDispatcher from '../AppDispatcher'

const Actions = {
   getCompany(name){
     API.getCompany(name);
   },

}

export default Actions
