import React, { useReducer } from 'react'

const initState = {
    path: 'recommend',
    log: false,
    currentUser: {}
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'change':
            return {
                ...state,
                path: action.path
            }
            break;
        case 'showLog':
            return {
                ...state,
                log: action.show
            }
            break;
        case 'login':
            localStorage.setItem('currentUser', JSON.stringify(action.currentUser))
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            throw new Error('type error');
    }
}

export const MyContext = React.createContext(null)

export function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}