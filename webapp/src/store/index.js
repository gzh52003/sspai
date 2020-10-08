import React, { useReducer } from 'react'

const initState = {
    path: 'recommend',
    log: false
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'change':
            return {
                ...initState,
                path: action.path
            }
            break;
        case 'showLog':
            return {
                ...initState,
                log: action.show
            }
            break
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