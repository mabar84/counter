import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './state/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
reportWebVitals();
