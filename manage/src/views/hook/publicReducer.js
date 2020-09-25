export const status = {
    changeFace: true,
}
export function publicReducer(state,action){
    switch (action.type){
        case 'change':
            status.changeFace = false;
            console.log(status.changeFace)
            break;
        case 'init':
            return status.changeFace;
        default :
           throw Error('错了傻瓜')
    }
}