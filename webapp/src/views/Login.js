import React, {useRef} from 'react'

import {List, InputItem, Button} from 'antd-mobile'

import '../css/Login.scss'
function Login() {
    return (
        <div className="pailog-form center-middle Login">
            <img className="title-img" src="img/common/icon-black.png" />
            <List className="form-box" style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <InputItem className="form-item phone-input"
                    type="phone"
                >手机号码</InputItem>
                <InputItem className="form-item password-input"
                    type="password"
                >密码</InputItem>
                <List.Item className="form-forget"
                    extra={
                        <>
                            <Button size="small" 
                                style={{background: "#f5f5f5", color: "#655e5e", margin: "0 10px" ,float: 'right'}}
                            >注册</Button>
                            <Button size="small" 
                                style={{background: "#f5f5f5", color: "#fd281a",margin: "0 10px" ,float: 'right' }}
                            >登录</Button>
                        </>
                    }
                    multipleLine
                    >
                    <span className="sp">忘记密码？</span>
                </List.Item>
            </List>
            <div className="divider"></div>
            <p style={{margin: "0 0 10px 0", color:"#8e8787"}}>其它登录方式</p>
            <img style={{padding: "10px 20px 30px"}} src="img/common/auth.png" />
        </div>
    )
}

export default Login

