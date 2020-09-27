import React, { useState, useCallback } from "react"
import { withRouter } from "react-router-dom"
import { NavBar, Icon, Button, Popover } from 'antd-mobile'

import { withUser } from '@/utils/hoc.js'

function Header(props) {
    const Item = Popover.Item
    const [visibled, changeVisible] = useState(false)
    const changeVisibled = useCallback((opt) => {
        console.log(opt.props.value);
        changeVisible(false)
        switch (opt.props.value) {
            case 'mine':
                props.history.push('/mine');
                break
            case 'order':
                props.history.push('/order');
                break
            case 'logout':
                localStorage.removeItem('currentUser')
                props.history.push('/');

                break
        }
    })

    console.log(props)
    return (
        <NavBar
            mode="dark"
            leftContent={<img src="img/common/icon.png" onClick={() => { props.history.push("/") }} />}
            rightContent={[
                <Icon key="0" type="search" />,
                <span className="iconfont icon-gengduo" key="1"></span>,
                <React.Fragment key='null'>
                    {
                        console.log(visibled)
                    }
                    {
                        props.currentUser ?
                            // <img src={props.currentUser.toppic} /> 
                            <Popover
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'currentColor' }}
                                visible={visibled}
                                overlay={[
                                    (<Item key="4" value="mine" >个人主页</Item>),
                                    (<Item key="5" value="special" >我的私信</Item>),
                                    (<Item key="6" value="button ct">账号设置</Item>),
                                    (<Item key="7" value="order">购买/订单</Item>),
                                    (<Item key="8" value="button ct">优惠券</Item>),
                                    (<Item key="9" value="button ct">暗色模式</Item>),
                                    (<Item key="2" value="button ct">反馈</Item>),
                                    (<Item key="3" value="logout">退出登录</Item>),
                                ]}
                                align={{
                                    overflow: { adjustY: 0, adjustX: 0 },
                                    offset: [-10, 0],
                                }}
                                // onVisibleChange={changeVisibled}
                                onSelect={changeVisibled}
                            >
                                <div style={{
                                    height: '100%',
                                    padding: '0 15px',
                                    marginRight: '-10px',
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                                >
                                    <img key='2422' src={props.currentUser.toppic} />
                                </div>
                            </Popover>
                            :
                            <Button onClick={() => { props.history.push("/mine") }}>登录</Button>
                    }

                </React.Fragment>

            ]}>
        </NavBar>
    )
}

Header = withRouter(Header)
Header = withUser(Header)
export default Header