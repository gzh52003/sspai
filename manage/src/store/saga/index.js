import {takeEvery,takeLatest,put,apply,call} from 'redux-saga/effects';
import request from '../../utils/request';

function* getUser(action){
    const {data} = yield call(request.get,'/user/'+action.userid)
    console.log('user=',data);
    yield put({type:action.type.replace('_async',''),userid:data})
}

function* init(){
    yield takeLatest('update_user_async',getUser)
    
}
export default init;