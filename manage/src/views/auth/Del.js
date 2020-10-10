import React,{useCallback,useEffect,useState} from 'react';


function Del(){
 const [state,changestate] = useState({n:10})
    return <div onClick={()=>{
        console.log(state)
    }}>Del{state.n}</div>
}
export default Del;