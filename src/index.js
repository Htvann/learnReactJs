import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from "./Store/reducers/rootReducer";


const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </React.StrictMode>
);

