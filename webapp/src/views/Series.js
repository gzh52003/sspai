import React from 'react'
import {Card, Tabs, WhiteSpace} from 'antd-mobile'

import '../css/Series.scss'

import Header from '#/home/Header'                // 导航栏
import Swiper from '#/series/Swiper'               // 轮播图
import Carousels from '#/series/Carousels'         // 滑块


function Series(props){
    const tabs = [
        { title: 'First Tab', sub: '1' },
        { title: 'Second Tab', sub: '2' },
      ];
    return(
        <div className="Series">
            <Header />
            <Swiper />
            <Card full>
                <Card.Body>
                <p>今日推荐</p>
                <p>和我一起动起来吧！</p>
                <p>或许在办公室里的小运动没法让你快速拥有马甲线，却可以让你一点点远离小肚腩，可以让你减少神经压迫所带来的头晕眼花，甚至可以让你不用去健身房，依旧能保持一点小翘臀。</p>
                <p>出自栏目：
                    <span>办公室轻健身指南</span>
                </p>
                </Card.Body>
            </Card>

            <div className="content">
                <WhiteSpace />
                <Tabs tabs={tabs} 
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={2} />}
                    initialPage={0} 
                    tabBarBackgroundColor={"#f4f4f4"}
                    tabBarActiveTextColor={'#fd281a'}
                    tabBarInactiveTextColor={'#8e8787'}
                    animated={false}
                    swipeable={false}
                    tabBarUnderlineStyle={{border: '1px #fd281a solid', width: '20%',margin: '0 auto'}}
                    
                >
                    <div className="whole" style={{  height: '100%', backgroundColor: '#fff' }} >
                        <div className="newest">最新上架
                            <Carousels />

                        </div>
                         <div className="mine">精选试读

                        </div>
                    </div>
                    <div className="whole" style={{width: '100%', height: '100px', backgroundColor: '#fff' }} ></div>
                </Tabs>
                 <WhiteSpace />

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
        </div>
    )
}

export default Series