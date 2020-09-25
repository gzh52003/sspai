import React, { useEffect, useRef } from 'react';
import '../css/beforEnter.scss';
import { Button, Divider,message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import request from '../utils/request';
import {checkSame,fetchData} from '../utils/tool';
function Forget(props) {
  const checkUser = useRef();
  const checkW1 = useRef();
  const checkW2 = useRef();
  const checkCode = useRef();
  const checkVcode = useRef();
  const reset = useRef();
  const oldPsw = useRef();
  let data;
  useEffect(()=>{
    fetchData(checkCode.current)
  })
  return (<div className="bg">
    <div className="beforEnter">
      <h1><img src="/logo.png" /></h1>
      <p>  <input type="text" className="user" placeholder="请输入用户名" ref={checkUser} onBlur={async() => {
        let user = checkUser.current.value;
        if (user) {
         data = await request.get('/forget/check', {
            username: user
          })
        } else {
          checkUser.current.value = '';
          checkUser.current.placeholder = "用户名错误";
          reset.current.disabled = true;
          return false;
        }
        if (data.code == 1) {
          reset.current.disabled = false;
        } else {
          checkUser.current.value = '';
          checkUser.current.placeholder = "用户名错误";
          reset.current.disabled = true;
        }
      }} /></p>
      <p><input type="text" className="repeatpsw" placeholder="请输入旧密码" ref={oldPsw} /></p>
      <p> <input type="text" className="psw" placeholder="请输入新密码" ref={checkW1} /></p>
      <p><input type="text" className="repeatpsw" placeholder="重复验证新密码" ref={checkW2} /></p>
      <p><input type="text" placeholder="验证码" className="vcode" ref={checkVcode} /><span className="code" ref={checkCode} onClick={()=>{
        fetchData(checkCode.current)
      }}>asdf</span></p>
      <Divider dashed />
      <p>
        <Button type="link" onClick={()=>{
          props.history.push('/login')
        }}danger>
          返回登陆
    </Button>
        <Button type="primary" danger ref={reset} onClick={ ()=>{
          const psw = {
            o: checkW1.current.value,
            t: checkW2.current.value,
          }
           checkSame(psw)
           .then(async (value)=>{
             if(value = value.every(item=>item)){
               const check = await request.get('/login',{
                 username : checkUser.current.value,
                 password : oldPsw.current.value,
                 vcode: checkVcode.current.value
               })
              if(check.code == 1){
                const result =await request.put('/forget/'+checkUser.current.value,{
                  body:{
                    password:psw.t
                  }
                })
              }else{
                message.error('信息有误请重新输入');
                fetchData(checkCode.current)
              }
             }else{
              checkW2.current.value = "";
              checkW2.current.placeholder = "核对好重新输入";
              return false;
             }
           })
        }}>
          立即重置
    </Button>
      </p>
    </div>
  </div>) 
}

export default Forget;