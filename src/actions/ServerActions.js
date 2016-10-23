
import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearch(results) {
    AppDispatcher.dispatch({
      type: 'GET_SEARCH_RESULTS',
      payload: results
    })
  }

}
export default ServerActions
