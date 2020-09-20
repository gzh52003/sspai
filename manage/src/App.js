import React from 'react';
import './css/App.scss';
import { Layout,Menu,Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  TwitterOutlined ,
  WechatOutlined ,
  QqOutlined ,
  EditOutlined,
  WeiboCircleOutlined,
  DeleteOutlined,
  SketchOutlined,
  AlertOutlined 
} from '@ant-design/icons';

import User from './views/User'
import Info from './views/Info'
import Article from './views/Article'
import Home from './views/Home'
import Eidt from './views/normal/Edit'
import Add from './views/auth/Add';
import Del from './views/auth/Del';
import Col from './views/normal/Col';
import Sub from './views/normal/Sub';
import Com from './views/normal/Com';
class App extends React.PureComponent {
  state = {
     menu:[{
      name:'首页',
      path:'home',
      component: Home,
      icon:<HomeOutlined />
    },{
       name:'用户管理',
       path:'/user',
       component:User,
       icon:<UserOutlined />,
       children:[
         {name:'用户编辑',path:'/edit',component:Eidt,icon:<EditOutlined />},
         {name:'用户添加',path:'/add',component:Add,icon:<UserAddOutlined />},
         {name:'用户删除',path:'/del',component:Del,icon:<DeleteOutlined />}
       ]
     },{
       name: '用户资讯',
       path:'/info',
       component: Info,
       icon:<InfoCircleOutlined />,
       children:[
        {name:'用户收藏',path:'/collect',component:Col,icon:<SketchOutlined />},
        {name:'用户订阅',path:'/subscribe',component:Sub,icon:<AlertOutlined />},
        {name:'用户社区',path:'/community',component:Com,icon:<CommentOutlined />},
        
      ]       
     },{
       name:'文章管理',
       path:'/article',
       component: Article,
       icon:<ReadOutlined />
     }],
     current: '/home'
  }
  render(){
    const { menu, current } = this.state;
    console.log(menu)
   return(<div>
        <Header >
          <img src='/logo.png' className='logo'/>
        </Header>
        <div className='main'>
        <Sider>
          <Menu
           
           theme={"dark"}
          >
            {
              menu.map(item=><Menu.Item 
              key={item.path}
              selectedKeys={[current]}
              > {item.icon}
                {item.name}
              </Menu.Item>)
            }
          </Menu>
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
