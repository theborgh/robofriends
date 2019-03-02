import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// inside robots.js, I'm using export, not export default (for 1 item)
// so I need to destructure { robots } when importing it
import { robots } from './robots'; 

ReactDOM.render(<CardList robotList={ robots }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
