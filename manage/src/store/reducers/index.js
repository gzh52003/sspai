import { combineReducers } from 'redux';

import cartReducer from './cart'
import userReucer from './user'
import commonReducer from './comon'
import eidt from './eidt'
const reducer = combineReducers({
    crat: cartReducer,
    user: userReucer,
    common: commonReducer,
    eidt : eidt
})

export default reducer;