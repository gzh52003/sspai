import React, { useEffect, useRef } from 'react'

import { List, InputItem, Button } from 'antd-mobile'
import request from '../utils/request'
import { connect } from 'react-redux'
import { fetchData } from '../utils/tool'
import '../css/Login.scss'
function Login(props) {
    const login = useRef()
    const phonenumber = useRef()
    const password = useRef()
    const mdl = useRef()
    const vcode = useRef()
    const code = useRef()
    // useEffect(function () {
    //     fetchData(code.current)
    // }, [])
    return (
        <div className="pailog-form center-middle Login">
            <img className="title-img" src="img/common/icon-black.png" />
            <List className="form-box" style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <InputItem className="form-item phone-input"
                    type="phone" ref={phonenumber} onBlur={async () => {
                        let phone = phonenumber.current.value
                        if (phone == '') {
                            phonenumber.current.value = ''
                            phonenumber.current.placeholder = '手机号码不能为空'
                            login.current.disabled = true
                        } else {
                            login.current.disabled = false
                        }
                    }}
                >手机号码</InputItem>
                <InputItem className="form-item password-input"
                    type="password" ref={password}
                >密码</InputItem><span className="remb"><input type="checkbox" ref={mdl} /> <span> 下次免登录 </span></span>
                <List.Item className="form-forget"
                    extra={
                        <>
                            <Button size="small"
                                style={{ background: "#f5f5f5", color: "#655e5e", margin: "0 10px", float: 'right' }}
                            >注册</Button>
                            <Button size="small"
                                style={{ background: "#f5f5f5", color: "#fd281a", margin: "0 10px", float: 'right' }}
                                ref={login} onClick={async () => {
                                    let user = {
                                        phone: phonenumber.current.value,
                                        password: password.current.value,
                                        mdl: mdl.current.checked,
                                    }
                                    console.log(user)
                                    async function tirgLogin() {
                                        let result = await request.get('/login', {
                                            ...user
                                        })
                                        // if (result.code == 1){
                                        //     try {
                                        //         localStorage.setItem('currentPhone',JSON.stringify(result.data)) || {}
                                        //         localStorage.setItem('login',JSON.stringify({code:'ly'})) || {}
                                        //         location.reload();
                                        //     } catch(err){
                                        //         console.error('用户信息有误')
                                        //     }
                                        // }
                                    }
                                    tirgLogin()
                                }}
                            >登录</Button>
                        </>
                    }
                    multipleLine
                >
                    <span className="sp">
                        <Button type="link" danger onClick={() => {
                            props.history.push('/forget')
                        }}>
                            忘记密码？
                        </Button>
                    </span>
                </List.Item>
            </List>
            <div className="divider"></div>
            <p style={{ margin: "0 0 10px 0", color: "#8e8787" }}>其它登录方式</p>
            <img style={{ padding: "10px 20px 30px" }} src="img/common/auth.png" />
        </div>
    )
}
let result = connect(Login)
export default Login

