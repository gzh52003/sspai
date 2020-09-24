import React from "react"
import { withRouter } from "react-router-dom"
import { NavBar, Icon, Button } from 'antd-mobile'

function Header(props) {
    return (
        <NavBar
            mode="dark"
            leftContent={<img src="img/common/icon.png" onClick={() => { props.history.push("/") }} />}
            rightContent={[
                <Icon key="0" type="search" />,
                <span className="iconfont icon-gengduo" key="1"></span>,
                <Button key="2">登录</Button>
            ]}>
        </NavBar>
    )
}

export default withRouter(Header)