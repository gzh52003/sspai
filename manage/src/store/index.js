import {createStore,applyMiddleware,compose} from 'redux';
import mysaga from './saga'
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
let enhancer = applyMiddleware(sagaMiddleware);
enhancer = composeWithDevTools(enhancer);
const store = createStore(reducer,enhancer);

sagaMiddleware.run(mysaga);
export default store;