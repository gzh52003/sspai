import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import mysaga from './saga'
import reducer from './reducer'

const store = createStore(reducer)

export default store