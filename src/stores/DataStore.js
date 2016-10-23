import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _companies = [];
let _scores = [];

class DataStore extends EventEmitter {
  constructor () {
    super()
    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {
        case 'GET_SEARCH_RESULTS':
          _companies = payload;
          this.emit('CHANGE');
          break;

        case 'GET_SCORES':
          _scores = payload.scores;
          this.emit('CHANGE');
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

  getCompanies(){
    return _companies;
  }

  getScores() {
    return _scores;
  }

}

export default new DataStore()
