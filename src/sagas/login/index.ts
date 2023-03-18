import { LoginActionType } from '@/redux/login'
import { getToken } from '@/services/loginService'
import { call, put, takeEvery } from 'redux-saga/effects'


export function* login() {
    console.log("Run to saga");
    try{
        const response:string = yield call(getToken)
        yield put({type: LoginActionType.LOGIN, payload: response})
    }catch(e){

    }
}

export default function* loginSaga() {
    yield takeEvery(LoginActionType.LOGIN_ASYNC, login)
}