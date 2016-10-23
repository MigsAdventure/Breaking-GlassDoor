import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/Layout';
import FeaturedList from './components/FeaturedList';
import DetailedPage from './components/DetailedPage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={FeaturedList} />
      <Route path="/detail/:id" component={DetailedPage} />
    </Route>
  </Router>,
  document.getElementById('root')
)
