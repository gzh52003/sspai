import React, { useReducer } from 'react'

const initState = {
    path: 'recommend',
    edit:''
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'change':
  
            return { ...state,path: action.path };
        case 'initTable':
            console.log(action,'ed')
            return {...state,edit: action.edit}
        default:
            throw new Error('type error');
    }
}

export const MyContext = React.createContext(initState)

export function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}