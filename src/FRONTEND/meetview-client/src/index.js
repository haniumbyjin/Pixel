import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores/RootStore';

const root = new RootStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider {...root}>
            <App />
        </Provider>,
    </BrowserRouter>,
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
