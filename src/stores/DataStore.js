import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = [];

class DataStore extends EventEmitter {
  constructor () {
    super()
    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {
        case 'GET_SEARCH_RESULTS':
        _results = payload.searchResults;
        this.emit('CHANGE')
        break;
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getResults(){
    return _results;
  }
}

export default new DataStore()
