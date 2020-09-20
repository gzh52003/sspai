import React from 'react';
import './css/App.scss';
import { Layout,Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { TwitterOutlined , WechatOutlined , QqOutlined , WeiboCircleOutlined} from '@ant-design/icons'

import User from './views/User'

class App extends React.PureComponent {
  state = {
     menu:[{
       name:'用户管理',
       path:'/user',
       component:User
     },{
       name: '用户资讯',
       path:'/info',
       component: Info
     }]
  }
  render(){
   return(<div>

        <Header >
          <img src='/logo.png' className='logo'/>
        </Header>
        <div className='main'>
        <Sider>
          
        </Sider>
        <Content>

        </Content>
        </div>
        <div className='foot'>
        <Footer>
          <div className="footContext">
              <p><img src='/logo.png'/></p>
              <p>
                <span>{<TwitterOutlined />}</span>
                <span>{<WechatOutlined />}</span>
                <span>{<QqOutlined />}</span>
                <span>{<WeiboCircleOutlined />}</span>
                </p>
              <p>© 2013-2020 少数派</p>
              <p>粤ICP备09128966号-4 | CC BY-NC 4.0</p>
          </div>
        </Footer>
        </div>
    </div>)
  }
}

export default App;
