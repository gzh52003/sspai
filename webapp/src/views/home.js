import React, { useEffect, useState, useContext } from 'react'
import { Tabs } from 'antd-mobile'

import "../css/Home.scss"

import Header from '#/home/Header'           //  导航栏
import Swiper from '#/home/Swiper'           //  轮播图
import Carousels from '#/home/Carousels'     //  右划卡片
import Content from "#/home/Content"         //  模块内容
import { tabsData } from '@/store/common'    //  标签页表头
import Footer from '#/home/Footer'           //  页尾
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
                    tabBarBackgroundColor={"#f5f5f9"}
                    tabBarActiveTextColor={"#d71a1b"}
                    tabBarInactiveTextColor={"#8e8787"}
                    swipeable={false}
                    initialPage={state.path}
                    // animated={false}
                    // tabBarUnderlineStyle={{
                    //     border: " 1px #d71a1b solid", width: "18%", marginLeft: '2.1%'
                    // }}
                    tabBarUnderlineStyle={{ display: "none" }}
                    onTabClick={(tab) => { dispatch({ type: 'change', path: tab.key }) }}
                >
                    {/* {
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: "wrap", backgroundColor: '#f5f5f9' }} >
                            <Content></Content>
                            {console.log("one or two")}
                        </div>
                    } */}
                </Tabs>
                {
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: "wrap", backgroundColor: '#f5f5f9' }} >
                        <Content></Content>
                    </div>
                }
            </div>
            <Footer>

            </Footer>
        </div >
    )
}

export default Home