import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';


const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

