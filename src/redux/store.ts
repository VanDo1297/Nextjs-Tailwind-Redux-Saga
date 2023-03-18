import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { loginReducer } from '@/redux/login';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/sagas';

const rootReducer = combineReducers({
    login: loginReducer
})


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
