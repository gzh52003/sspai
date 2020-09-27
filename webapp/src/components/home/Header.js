import React, { useState, useCallback, useContext, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { NavBar, Icon, Button, Popover } from 'antd-mobile'

import { MyContext } from '@/store'
import { withUser } from '@/utils/hoc'
import { useStorage } from '@/utils/hooks'

function Header(props) {
    const Item = Popover.Item
    // const [show, changeshow] = useState(false)
    const { state, dispatch } = useContext(MyContext)

    //  点击下拉菜单内容跳转到相对应的模块
    const changeVisible = useCallback((opt) => {
        switch (opt.props.value) {
            case 'mine':
                props.history.push('/mine');
                break
            case 'order':
                props.history.push('/order');
                break
            case 'logout':
                localStorage.removeItem('currentUser')
                dispatch({ type: 'showLog', show: false, })

                break
        }
    })

    const [currentUser, setCurrentUser] = useStorage('currentUser')

    console.log('State=1', state)

    useEffect(function () {
        if (props.currentUser) {
            dispatch({ type: 'showLog', show: true, })
            console.log(231, state)
        }
    }, [state.log])

    console.log("header", props)
    return (
        <NavBar
            mode="dark"
            leftContent={<img src="img/common/icon.png" onClick={() => { props.history.push("/") }} />}
            rightContent={[
                <Icon key="0" type="search" />,
                <span className="iconfont icon-gengduo" key="1"></span>,
                <React.Fragment key='null'>
                    {
                        console.log('state.log', state.log)
                    }
                    {

                        state.log ?
                            // <img src={props.currentUser.toppic} /> 
                            <Popover
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'currentColor' }}
                                visible={false}
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
                                // onVisibleChange={changeVisible}
                                onSelect={changeVisible}
                            >
                                <div style={{
                                    height: '100%',
                                    padding: '0 15px',
                                    marginRight: '-10px',
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                                >
                                    <img src={props.currentUser.toppic} />
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