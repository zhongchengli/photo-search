import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import Root from './components/Root';


const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

render(<Root store={store} />, document.getElementById('root'))

