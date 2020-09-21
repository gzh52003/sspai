import React from 'react'
import { Flex, NavBar, Icon } from 'antd-mobile'

// import "../css/iconfont.css"
import "../css/Home.scss"

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={<img src="img/common/icon.png" />}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                ><span class="iconfont icon-xxx"></span></NavBar>
            </div>
        )
    }
}

export default Home