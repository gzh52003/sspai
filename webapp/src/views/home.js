import React, { useState } from 'react'
import { Button, NavBar, Icon, Tabs } from 'antd-mobile'

import "../css/Home.scss"

import Swiper from '#/home/Swiper'           //  轮播图
import Carousels from '#/home/Carousels'     //  右划卡片
import Content from "#/home/Content"
import { tabsData } from '@/store/common'   //  标签页表头

function Home() {
    const tabs = tabsData
    const [Tabs_tab, changetab] = useState(tabs)
    return (
        <div>
            <NavBar
                mode="dark"
                leftContent={<img src="img/common/icon.png" />}
                rightContent={[
                    <Icon key="0" type="search" />,
                    <span className="iconfont icon-gengduo" key="1"></span>,
                    <Button key="2">登录</Button>
                ]}>
            </NavBar>
            <Swiper />
            <Carousels />
            <div className="content">
                <Tabs tabs={Tabs_tab}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4.5} />}
                    initialPage={0}
                    tabBarBackgroundColor={"#f5f5f9"}
                    tabBarActiveTextColor={"#d71a1b"}
                    tabBarInactiveTextColor={"#8e8787"}
                    // animated={false}
                    // tabBarUnderlineStyle={{
                    //     border: " 1px #d71a1b solid", width: "18%", marginLeft: '2.1%'
                    // }}
                    tabBarUnderlineStyle={{ display: "none" }}
                    onChange={(tab, index, e) => { console.log('onChange', index, tab, "this=", e) }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab,) }}
                >
                    {
                        Tabs_tab.map(item => {
                            return (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '246px', backgroundColor: '#fff' }} key={item.sub}>
                                    {item.title}
                                    <Content></Content>
                                </div>
                            )
                        })
                    }
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '246px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div> */}
                </Tabs>
            </div>
        </div >
    )
}

export default Home