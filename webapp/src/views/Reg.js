import React from 'react'

import { List, InputItem, Checkbox, Flex, Button } from 'antd-mobile'
import '../css/Reg.scss'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


function Reg() {
    return (
        <div className="pailog-form center-middle Reg">
            <img className="title-img" src="img/common/icon-black.png" />
            <List className="form-box" style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <InputItem className="form-item"
                    placeholder="手机号码"
                />
                <InputItem className="form-item"
                    placeholder="昵称（2-15个字符，中英文，数字下划线）"
                />
                <InputItem className="form-item"
                    placeholder="密码（不少于6位）"
                />
                <InputItem className="form-item"
                    placeholder="再次输入密码"
                />
                <InputItem className="form-item"
                    placeholder="输入验证码"
                />
                <Flex.Item >
                    <AgreeItem className="agreement" data-seed="logId" onChange={e => console.log('checkbox', e)}>我已阅读并同意 《
                        <a onClick={(e) => { e.preventDefault(); alert('少数派协议：律师函警告，请点击确定'); }} style={{color: "#fd281a"}}>少数派用户协议</a>》
                    </AgreeItem>
                </Flex.Item>
                <List.Item className="form-forget"
                    extra={
                        <Button size="small"
                            style={{ background: "#f5f5f5", color: "#655e5e", width: "60px", float: "right"}}
                        >注册</Button>
                    }
                    multipleLine
                >
                    <span className="sp">返回登录</span>
                </List.Item>
            </List>
            <div class="message">
                注意：同一个手机号一小时内只能获取 5 条验证码，如果连续尝试数次都收不到验证码，请联系 feedback@sspai.com 处理
            </div>
        </div>
    )
}

export default Reg