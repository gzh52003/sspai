import {status} from './publicReducer';
export const initState =[
    {}
  ];
export function userReducer(state,action){
    switch (action.type){
      case 'login':
       console.log('logs');
       break;
      case 'logout':
        console.log('logout')
        break;
      case 'change':
            status.changeFace = false;
            console.log(status.changeFace)
            break;
      default:
        throw new Error ('type error');
    }
  }
