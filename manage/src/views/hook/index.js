import React,{ useReducer} from 'react';

const initState = {
    public:{
        showBool:true
    },
    user:{
      username:'zqm'
    }
}
function reducer(state,action){
    switch(action.type){
        case 'init':
          return  console.log('init');
        case 'change':
           state.public.showBool=!state.public.showBool;
           return console.log(state.public.showBool)
        default:
            throw new Error('type error');
    }
}

export const MyContext = React.createContext(null);
export function Provider(props){
    const [state,dispatch] = useReducer(reducer,initState);
    return (
        <MyContext.Provider value={{state,dispatch}}>
            {props.children}
        </MyContext.Provider>
    )
}

