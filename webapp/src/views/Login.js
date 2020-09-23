import React from 'react'

import {List, InputItem, Button} from 'antd-mobile'

import '../css/Login.scss'
function Login() {
    return (
        <div>
            <img  src="img/common/icon-black.png" />
            <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <InputItem
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <InputItem
                    type="password"
                    placeholder="****"
                >密码</InputItem>
                <List.Item
                    extra={
                        <>
                            <Button type="ghost" size="small" inline>注册</Button>
                            <Button type="ghost" size="small" inline>登录</Button>
                        </>
                    }
                    multipleLine
                    >
                    忘记密码？
                </List.Item>
            </List>
            <div></div>
            <p>其它登录方式</p>
            <img src="img/common/auth.png" />
        </div>
    )
}

export default Login

