import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';

// const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
