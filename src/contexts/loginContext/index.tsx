import { createContext, useCallback, useMemo, useReducer } from "react";

interface LoginContextDataState {
    isLoggedIn: boolean;
    token:string
}

interface LoginContextActionsState {
    login:(token:string) =>void;
}

interface LoginContextState {
    data: LoginContextDataState,
    actions : LoginContextActionsState
}

interface LoginContextAction {
    type: string;
    token: string;
}

const initialState = {
    data: {
        isLoggedIn: false,
        token:""
    },
    actions : {
        login: (token:string) => { },
    }
}

export enum LoginContextActionType {
    LOGIN = "LOGIN"
}

const reducer = (state: LoginContextState, action: LoginContextAction) => {
    switch (action.type) {
        case LoginContextActionType.LOGIN:
            return {
                ...state,
                data : { ...state.data,  isLoggedIn: true, token:action.token }
            }
        default:
            return state;
    }
};

export const LoginContext = createContext<LoginContextState>(initialState);

export const LoginContextProvider = (props: any) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const login = useCallback((token:string) => {
       dispatch({type: LoginContextActionType.LOGIN, token:token})
    }, [state])

    const memoedValue = useMemo(
        () => {
            return {
                data:{
                   ...state.data
                },
                actions:{
                    login
                }
            }
        },
        [state.data, login]
    )

    return (
        <LoginContext.Provider value={memoedValue}>
            {props.children}
        </LoginContext.Provider>
    );
};
