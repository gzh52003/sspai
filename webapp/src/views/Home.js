import React, { useEffect, useState, useContext } from 'react'
import { Tabs } from 'antd-mobile'

import { myContext } from '@/store'
import "../css/Home.scss"

import Header from '#/home/Header'           //  导航栏
import Swiper from '#/home/Swiper'           //  轮播图
import Carousels from '#/home/Carousels'     //  右划卡片
import Content from "#/home/Content"         //  模块内容
import { tabsData } from '@/store/common'    //  标签页表头
import { MyContext } from '@/store'

function Home(props) {

    const [Tabs_tab, changetab] = useState(tabsData)
    const { state, dispatch } = useContext(MyContext)

    useEffect(() => {
        //  内容导航栏固定定位
        let t = null
        const tabsBar = document.querySelector('.am-tabs-tab-bar-wrap')
        const tabsContent = document.querySelector('.am-tabs-content-wrap')
        document.onscroll = () => {
            if (t !== null) {
                return false
            }
            t = setInterval(() => {
                if (document.documentElement.scrollTop >= 290) {
                    tabsBar.className = 'am-tabs-tab-bar-wrap tabs-fixed'
                    tabsContent.style.marginTop = '45px'
                }
                else {
                    tabsBar.className = 'am-tabs-tab-bar-wrap'
                    tabsContent.style.marginTop = '0'
                }
                t = null
            }, 100)
        }
    })

    return (
        <div className="Home">

            <Header />
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
                    onChange={(tab) => { dispatch({ type: 'change', path: tab.sub }) }}
                    onTabClick={(tab) => { dispatch({ type: 'change', path: tab.sub }) }}
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