import React, { useState } from 'react'
import { Tabs } from 'antd-mobile'
import Header from '#/home/Header'           //  导航栏
import { withUser } from '@/utils/hoc'
import "@/css/Mine.scss"
import { mineTabs } from '@/store/common'



function Mine(props) {
    const [Tabs_tab, changetab] = useState(mineTabs)
    const userData = props.currentUser
    return (
        <div className='mine'>
            <Header></Header>
            <header>
                <h2>
                    <img src={userData.toppic} />
                    <span>编辑</span>
                </h2>
                <h3>
                    <span>{userData.username}</span>
                    <p>还没有介绍自己</p>
                    <b>关注</b>{userData.Focus}
                    <i>粉丝</i>{userData.fans}
                </h3>
            </header>
            <div className="content">
                <Tabs tabs={Tabs_tab}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
                    tabBarBackgroundColor={"#fff"}
                    tabBarActiveTextColor={"#d71a1b"}
                    tabBarInactiveTextColor={"#8e8787"}
                    swipeable={false}
                    tabBarUnderlineStyle={{ border: " 1px #d71a1b solid", width: '16%', margin: '0 2%' }}
                >

                    <div style={{ backgroundColor: '#f5f5f9' }} className='overview' >
                        <h2>头衔</h2>
                        <h3>
                            <p>成就与徽章</p>
                            <i className='iconfont icon-xiugaitouxiang'></i>
                            <div>
                                <p>7天</p>
                                <b>成为少数派</b>
                            </div>
                        </h3>
                    </div>


                    <div style={{ backgroundColor: '#f5f5f9' }} className='dynamic' >
                        321
                        </div>


                    <div style={{ backgroundColor: '#f5f5f9' }} className='article' >
                        123123
                        </div>


                    <div style={{ backgroundColor: '#f5f5f9' }} className='collection' >
                        321321
                        </div>


                    <div style={{ backgroundColor: '#f5f5f9' }} className='focus' >
                        111111
                        </div>

                </Tabs>
            </div>
        </div>
    )
}



export default withUser(Mine)