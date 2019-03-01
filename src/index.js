import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';

import Layout from './components/Layout';
import reducers from './reducers';

const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.querySelector('#root')
);