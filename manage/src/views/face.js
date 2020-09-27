import React from 'react';
import '../css/App.scss';
import { Layout, Menu, Button, Input, Image, message } from 'antd';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
import { Row, Col } from 'antd';
const { Search } = Input;
const { SubMenu } = Menu;
import Home from './normal/home'
import Eidt from './normal/Edit'
import EidtId from './normal/EditId'
import Add from './auth/Add';
import Del from './auth/Del';
import Cols from './normal/Col';
import Sub from './normal/Sub';
import Com from './normal/Com';
import Check from './auth/Check';
import Post from './normal/Post';
import Hot from './auth/Hot';
import Tsear from './normal/Tsear';
import Feedback from './normal/Feedback';
import {connect} from 'react-redux';
import {logout} from '../store/action/user';
import {
  TwitterOutlined,
  WechatOutlined,
  QqOutlined,
  WeiboCircleOutlined,
  AudioOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import Routes from '../Route';
import Password from 'antd/lib/input/Password';

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const mapStateToProps = function(state){
  return {
     currentUser:state.user
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      logout(){
          dispatch(logout())
      }
  }
}
@connect (mapStateToProps,mapDispatchToProps)
class Face extends React.PureComponent {
  
  state = {

    menu: [
      ...Routes
    ],
    collapsed: false,
    current: '/home',
    username: '未登录',
    topPic:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  gotoPage = ({ key }) => {
    console.log(1, this.state.menu)
    this.setState({
      current: key
    });
    this.goto(key);
  }
  goto = (path) => {
    console.log(this.props, 'p')
    this.props.history.push(path);
  }
  logout = ()=>{
    let bool =  confirm('你确定退出登录嘛？');
    if(bool){
      localStorage.setItem('currentUser','');
      localStorage.setItem('login','lyy');
      location.reload();
    }
  }
  componentWillMount() {
    try{
      let data = localStorage.getItem('currentUser')
      data = JSON.parse(data);
      let {username,toppic} = data
      this.setState({
        ...this.state,
        username,
        topPic:toppic
      })
      }catch(err){
  
      }
    const { pathname } = this.props.location;
    this.setState({
      current: pathname
    })
  }

  render() {
    console.log(this.state.topPic)

    const { menu, current } = this.state;
    const {currentUser,logout} = this.props;
    return (<div>
      <Header >
        <Row>
          <Col span={6}><img src='/logo.png' className='logo' /></Col>
          <Col span={16}>
            <>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 400 }}
              />
              <br />
              <br />
              <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
              <br />
              <br />
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
              />
              <br />
              <br />
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={value => console.log(value)}
              />
            </>,
          mountNode,
);
</Col>
          <Col span={2}>
            <span className='pic'>
              <Image
                width={40}
                src={this.state.topPic}
              />
            </span>
        <Button type="text" danger className='login' onDoubleClick={this.logout}>{this.state.username}</Button>
          </Col>
        </Row>
      </Header>
      <div className='main'>
        <Sider>
          <div>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
              theme={"dark"}
              mode="inline"
              onClick={this.gotoPage}
              inlineCollapsed={this.state.collapsed}
              defaultSelectedKeys={['/home']}
              defaultOpenKeys={['1']}
              selectedKeys={[current]}
            >
              {
                menu.map(item => {
                  if (item.children) {
                    return (

                      <>
                        <SubMenu key={item.path} title={[item.icon, item.name]}>
                          {
                            item.children.map(item => <Menu.Item key={item.path}>{item.icon}{item.name}</Menu.Item>)
                          }

                        </SubMenu>
                      </>
                    )
                  } else {
                    return (<Menu.Item
                      key={item.path}
                    > {item.icon}
                      {item.name}
                    </Menu.Item>)
                  }
                })
              }
            </Menu>
          </div>
        </Sider>
        <Content>
          <Switch>
            <Route path="/face/home" component={Home}></Route>
            <Route path="/face/info/collect" component={Cols}></Route>
            <Route path="/face/info/subscribe" component={Sub}></Route>
            <Route path="/face/info/community" component={Com}></Route>
            <Route path="/face/user/edit/:id" component={EidtId}></Route>
            <Route path="/face/user/edit" component={Eidt}></Route>

            <Route path="/face/user/add" component={Add}></Route>
            <Route path="/face/user/del" component={Del}></Route>
            <Route path="/face/article/check" component={Check}></Route>
            <Route path="/face/article/post" component={Post}></Route>
            <Route path="/face/article/hot" component={Hot}></Route>
            <Route path="/face/tsear" component={Tsear}></Route>
            <Route path="/face/feedback" component={Feedback}></Route>
            <Redirect from="/" to="/home" exact />
            <Redirect to="/face" />
          </Switch>
        </Content>
      </div>
      <div className='foot'>
        <Footer>
          <div className="footContext">
            <p><img src='/logo.png' /></p>
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

 
Face = withRouter(Face);
export default Face;
