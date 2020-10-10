import React, { useCallback, useContext, useState } from 'react'

import { MyContext } from '@/store'
import { List, InputItem, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form';

import request from '@/utils/request'
import '../css/Login.scss'
function Login(props) {
    const { getFieldProps, getFieldError } = props.form;
    const validateAccount = (rule, value, callback) => {
        if ((/^[1]([3-9])[0-9]{9}$/.test(value))) {
            callback();
        } else {
            callback(new Error('请输入正确格式的手机号码'));
        }
    }
    //  初始值
    // const state = {
    //     hasError: false,
    //     value: 321
    // }
    // const [data, changeData] = useState(state)

    //  账号输入为空情况提示
    // const onErrorClickUser = useCallback(() => {
    //     if (state.hasError) {
    //         Toast.info('请输入您的账号');
    //     }
    // }, [])

    //  密码输入为空情况提示
    // const onErrorClickPass = useCallback(() => {
    //     if (state.hasError) {
    //         Toast.info('请输入您的密码');
    //     }
    // }, [])

    // const onChange = useCallback((value) => {
    // if (value.length = 0) {
    //     changeData({
    //         hasError: true,
    //         value
    //     });
    // } else {
    //     this.setState({
    //         hasError: false,
    //         value
    //     });
    // }
    // changeData({
    //     hasError: false,
    //     value: value
    // });
    // console.log(value)
    // })
    const { state, dispatch } = useContext(MyContext)
    const login = useCallback(() => {
        // const userData = async () => {
        //     const { data } = await request.get('/login', {
        //         username: 'hxx',
        //         password: 123456
        //     })
        //     console.log(props)
        //     localStorage.setItem('currentUser', JSON.stringify(data))

        //     // dispatch({ type: 'showLog', show: true, })
        //     props.history.push('/')
        // }
        // userData()
        props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(props.form.getFieldsValue());
                const { account, password } = props.form.getFieldsValue()
                console.log(account, password)
                const userData = async () => {
                    const data = await request.get('/loginApp', {
                        phone: account,
                        password
                    })
                    console.log(66666666, data.data)
                    if (data.code) {
                        console.log(321)
                        dispatch({ type: "login", currentUser: data.data })
                        // dispatch({ type: 'showLog', show: true, })
                        props.history.push('/')
                    } else {
                        alert('手机号码或密码错误');
                    }

                }
                userData()
            } else {
                alert('手机号码或密码错误');
            }
        });
    })
    return (
        <div className="pailog-form center-middle Login">
            <img className="title-img" src="img/common/icon-black.png" />
            <List className="form-box" style={{ margin: '5px 0', backgroundColor: 'white' }}>
                {/* <InputItem className="form-item phone-input"
                    type="phone"
                    placeholder="请输入您的手机号码"
                    error={state.hasError}
                    onErrorClick={onErrorClickUser}
                    onChange={onChange}
                    value={state.value}
                >手机号码</InputItem>
                <InputItem className="form-item password-input"
                    type="password"
                    placeholder="请输入您的密码"
                >密码</InputItem> */}
                <InputItem className="form-item phone-input"
                    {...getFieldProps('account', {
                        // initialValue: 'little ant',
                        rules: [
                            { required: true, message: '请输入您的手机号码' },
                            { validator: validateAccount },
                        ],
                    })}
                    clear
                    error={!!getFieldError('account')}
                    onErrorClick={() => {
                        alert(getFieldError('account').join('、'));
                    }}
                    placeholder="请输入您的手机号码"
                >手机号码</InputItem>
                <InputItem className="form-item password-input"
                    {...getFieldProps('password')} placeholder="请输入您的密码" type="password">
                    密码
        </InputItem>
                <List.Item className="form-forget"
                    extra={
                        <>
                            <Button size="small"
                                style={{ background: "#f5f5f5", color: "#655e5e", margin: "0 10px", float: 'right' }}
                            >注册</Button>
                            <Button size="small"
                                style={{ background: "#f5f5f5", color: "#fd281a", margin: "0 10px", float: 'right' }}
                                onClick={login}
                            >登录</Button>
                        </>
                    }
                    multipleLine
                >
                    <span className="sp">忘记密码？</span>
                </List.Item>
            </List>
            <div className="divider"></div>
            <p style={{ margin: "0 0 10px 0", color: "#8e8787" }}>其它登录方式</p>
            <img style={{ padding: "10px 20px 30px" }} src="img/common/auth.png" />
        </div>
    )
}
Login = createForm()(Login);
export default Login

