import React,{useRef,useCallback, useState , useEffect,useReducer,useContext} from 'react';
import  '../css/beforEnter.scss';
import { Button,Divider } from 'antd';
import { CloseOutlined} from '@ant-design/icons';
import userAction,{login} from '../store/action/user';
import {connect} from 'react-redux'
import request from '../utils/request'
import {bindActionCreators} from 'redux'
import   {fetchData} from '../utils/tool'
import {MyContext} from '../views/hook'
import init from '../store/saga';


function Login( props){
  const login= useRef();
  const username= useRef();
  const password= useRef();
  const mdl = useRef();
  const vcode = useRef();
  const code = useRef();
  useEffect( function(){
    fetchData(code.current)
  },[])
    return (<div className="bg">
          <div className="beforEnter">
          <h1><img src="/logo.png" /> </h1>
        <p><input type="text" className="user"   placeholder="请输入用户名" ref={username} onBlur={async ()=>{
          let user = username.current.value;
          if(user == ""){
            username.current.value = '';
            username.current.placeholder="用户名不能为空";
            login.current.disabled = true;
          }else{
             login.current.disabled = false;
          }    
        }}/></p>
        <p><input type="text" className="psw" placeholder="请输入密码" ref={password} type="password"/><span className="remb"><input type="checkbox"  ref={mdl}/> <span> 下次免登录 </span></span></p>
        <p><input type="text" placeholder="验证码" className="vcode" ref={vcode}/><span className="code" ref={code} onClick={()=>{
          fetchData(code.current)
        }}>asdf</span></p>
        <Divider dashed />
        <p>    
    <Button type="link" danger onClick={()=>{
      props.history.push('/forget')
    }}>
      忘记密码？
    </Button>
    <Button type="primary" danger className="login" ref={login} onClick={ async ()=>{
     
      let user = {
        username: username.current.value,
        password: password.current.value,
        mdl:mdl.current.checked,
        vcode:vcode.current.value,
      }
      console.log(user)
      async function trigLogin(){
       
       let result =await request.get('/login',{
       ...user
       })
       if(result.code == 1 ){
         try {
          localStorage.setItem("currentUser",JSON.stringify(result.data)) || {}
          localStorage.setItem("login",JSON.stringify({code:"zqm"}))  || {}
          location.reload();
         }catch(err){
          console.error('用户信息有误')
         } 
         
       }
      }
      trigLogin()
    }}>
      立即登录
    </Button>
    </p>
    </div>
    </div>)
}
/* const mapStateToProps = ({currentUser})=>({currentUser})
const mapDispatchToProps = function(dispatch){
  return bindActionCreators(userAction,dispatch)
} */
// Login = useRef(Login)
let result = connect(Login);
export default Login;