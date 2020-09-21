import { combineReducers } from 'redux'

import commonReducer from './common'

//  把多个reducer合并成一个reducer
const reducer = combineReducers({
    commom: commonReducer
})

export default reducer