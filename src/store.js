import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

let tasks = [{
  id: 1,
  title: 'do this',
  descript: 'With Care and Love'
}, {
  id: 2,
  title: 'then this',
  descript: 'With even more Attention'
}, {
  id: 3,
  title: 'yes',
  descript: 'Love is True when Truth is Love'
  }
]

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App tasks={tasks}/>
  </Provider>
  , document.querySelector('.container'));
