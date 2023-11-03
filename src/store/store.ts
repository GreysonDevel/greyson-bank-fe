import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));

sagaMiddleWare.run(rootSaga);

export type TRootState = ReturnType<typeof rootReducer>;
export default store;
