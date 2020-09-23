import { combineReducers } from 'redux';

import cartReducer from './cart'
import userReucer from './user'
import commonReducer from './comon'

const reducer = combineReducers({
    crat: cartReducer,
    user: userReucer,
    common: commonReducer
})

export default reducer;