const initState = {

}
function reducer(state=initState,action){
   switch(action.type){
       case "init":
           console.log(666)
           break;
        default:
            return state;
   }
}
export default reducer;