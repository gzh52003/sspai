import { takeLatest, put, call } from 'redux-saga/effects'
import request from '@/utils/request'

//  单元测试
function* getUser(action) {
    console.log('Saga.getUser=', action)
    const { data } = yield call(request.get, '/user/' + action.userid)
    console.log('Saga.user=', data)
}