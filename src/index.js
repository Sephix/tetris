import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Grid from './components/grid';

ReactDOM.render(<Grid />, document.getElementById('root'));

serviceWorker.unregister();
