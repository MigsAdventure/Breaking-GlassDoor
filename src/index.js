import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/Layout';
import ResultsTable from './components/ResultsTable';
import DetailedPage from './components/DetailedPage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ResultsTable} />
      <Route path="/detail" component={DetailedPage} />
    </Route>
  </Router>,
  document.getElementById('root')
)
