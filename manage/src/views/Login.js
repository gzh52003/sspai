import React from 'react';
import  '../css/beforEnter.scss';
import { Form, Input, Button, Checkbox,Divider } from 'antd';
import { CloseOutlined} from '@ant-design/icons';
function Login(){
    return (<div className="beforEnter">
          <h1><img src="/logo.png" /> <span>{<CloseOutlined />}</span></h1>
        <p>  <label for="user"><input type="text" id="user" placeholder="请输入用户名"/></label></p>
        <p> <label for="psw"><input type="text" id="psw" placeholder="请输入密码"/><span id="remb"><input type="checkbox"  /> <span> 记住密码 </span></span></label></p>
        <p><input type="text" placeholder="验证码" id="vcode"/><pan id="code">asdf</pan></p>
        <Divider dashed />
        <p>    
    <Button type="link" danger>
      忘记密码？
    </Button>
    <Button type="primary" danger>
      立即登录
    </Button>
    </p>
    </div>)
}

export default Login;