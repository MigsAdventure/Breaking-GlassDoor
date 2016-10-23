
import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotData(data) {
    AppDispatcher.dispatch({
      type: 'GOT_DATA',
      payload: data
    })
  }

}
export default ServerActions
