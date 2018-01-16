import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import indexReducer from './reducers/index';

type SagaStore<S> = Store<S> & {
    // tslint:disable-next-line:ban-types
    runSaga: Function,
    // tslint:disable-next-line:ban-types
    close: Function,
};

const configureStore = (initialState?: any) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        indexReducer,
        initialState,
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    ) as SagaStore<any>;

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducers/index', () => {
                store.replaceReducer(indexReducer);
            });
        }
    }

    return store;
};

export default configureStore;
