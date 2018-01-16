import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/app/App';
import configureStore from './configureStore';
import './scss/index.scss';
import root from './utils/google';

const store = configureStore();
store.runSaga(root);

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const Render = process.env.NODE_ENV === 'production' ?
    Main : hot(module)(Main);

render(<Render />, document.getElementById('mount'));
