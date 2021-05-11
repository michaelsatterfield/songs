import React from "react";
import ReactDOM from 'react-dom';
//from redux library use curly braces and capitalized first letter
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from './components/App';
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App/>
    </Provider>,
     document.querySelector('#root')
);
