import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Root from './components/Root';
import { searchPhotoApp } from './reducers';

const middleware = [thunk]

const store = createStore(searchPhotoApp, applyMiddleware(...middleware))

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

// Without router
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

render(<Root store={store} />, document.getElementById('root'))

