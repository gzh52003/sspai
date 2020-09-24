import React, { useEffect, useState } from 'react'
import { Button, NavBar, Icon, Tabs } from 'antd-mobile'

import "../css/Home.scss"

import Swiper from '#/home/Swiper'           //  轮播图
import Carousels from '#/home/Carousels'     //  右划卡片
import Content from "#/home/Content"         //  模块内容
import { tabsData } from '@/store/common'    //  标签页表头

function Home() {

    const [Tabs_tab, changetab] = useState(tabsData)
    useEffect(() => {
        //  内容导航栏固定定位
        const tabs = document.querySelector('.am-tabs-tab-bar-wrap')
        setInterval(() => {
            if (document.documentElement.scrollTop >= 280) {
                tabs.className = 'am-tabs-tab-bar-wrap tabs-fixed'
            }
            else {
                tabs.className = 'am-tabs-tab-bar-wrap'
            }
            console.log(document.documentElement.scrollTop)

        }, 1000)
    })


    return (
        <div className="Home">
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
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4.3} />}
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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: "wrap", backgroundColor: '#f5f5f9' }} key={item.sub}>
                                    <Content></Content>
                                </div>
                            )
                        })
                    }

                </Tabs>
            </div>
            <footer>
                <div className="footer-logo">
                    <img src='img/common/icon.png' />
                </div>
                <p>
                    <span className="iconfont icon-weibo"></span>
                    <span className="iconfont icon-weixin"></span>
                    <span className="iconfont icon-tuite"></span>
                    <span className="iconfont icon-WiFi"></span>
                </p>
                <h2>
                    <span>下载App</span>
                    <span>联系我们</span>
                    <span>商务合作</span>
                    <span>成为作者</span>
                    <span>关于我们</span>
                    <span>用户协议</span>
                    <span>常见问题</span>
                </h2>
                <h3>
                    <p>© 2013-2020 少数派</p>
                    <p>粤ICP备09128966号-4 | CC BY-NC 4.0</p>
                </h3>
            </footer>
        </div >
    )
}

export default Home