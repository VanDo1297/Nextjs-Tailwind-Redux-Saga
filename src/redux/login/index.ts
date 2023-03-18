import { createAction, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type LoginState ={
    isLoggedIn: boolean,
    token: string
}

const initialState: LoginState = {
    isLoggedIn:false,
    token:""
}
export enum LoginActionType {
    LOGIN_ASYNC = 'login/loginAsyncAction',
    LOGIN = 'login/loginAction'
}
// should move to action.ts file =)))
export const loginAsync = createAction(LoginActionType.LOGIN_ASYNC)
export const login = createAction<string>(LoginActionType.LOGIN)

export const loginReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(
        loginAsync,(state)=>{
            // TODO: DO SOMETHING - update loading ?
        }
    ).addCase(
        login, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
        }
    )
})
