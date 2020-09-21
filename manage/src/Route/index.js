import User from '../views/User'
import Info from '../views/Info'
import Article from '../views/Article'
import Home from '../views/Home'
import Eidt from '../views/normal/Edit'
import Add from '../views/auth/Add';
import Del from '../views/auth/Del';
import Cols from '../views/normal/Col';
import Sub from '../views/normal/Sub';
import Com from '../views/normal/Com';
import Check from '../views/auth/Check';
import Post from '../views/normal/Post';
import Hot from '../views/auth/Hot';
import Tsear from '../views/normal/Tsear';
import Feedback from '../views/normal/Feedback';
import React from 'react';

import {
    HomeOutlined,
    UserOutlined,
    InfoCircleOutlined,
    ReadOutlined,
    EditOutlined,
    DeleteOutlined,
    SketchOutlined,
    AlertOutlined,
    CheckCircleOutlined,
    UserAddOutlined,
    CommentOutlined,
    VerticalAlignTopOutlined,
    RocketOutlined,
    SecurityScanOutlined,
    QuestionCircleOutlined
  } from '@ant-design/icons';
const Routes = [
    {
        name:'首页',
        path:'/home',
        component: Home,
        icon:<HomeOutlined />
      },{
         name:'用户管理',
         path:'/user',
         component:User,
         icon:<UserOutlined />,
         children:[
           {name:'用户编辑',path:'/user/edit',component:Eidt,icon:<EditOutlined />},
           {name:'用户添加',path:'/user/add',component:Add,icon:<UserAddOutlined />},
           {name:'用户删除',path:'/user/del',component:Del,icon:<DeleteOutlined />}
         ]
       },{
         name: '用户资讯',
         path:'/info',
         component: Info,
         icon:<InfoCircleOutlined />,
         children:[
          {name:'用户收藏',path:'/info/collect',component:Cols,icon:<SketchOutlined />},
          {name:'用户订阅',path:'/info/subscribe',component:Sub,icon:<AlertOutlined />},
          {name:'用户社区',path:'/info/community',component:Com,icon:<CommentOutlined />},
  
        ]       
       },{
         name:'文章管理',
         path:'/article',
         component: Article,
         icon:<ReadOutlined />,
         children:[
           {name:'文章审核',path:'/article/check',component:Check,icon:<CheckCircleOutlined />},
           {name:'文章发布',path:'/article/post',component:Post,icon:<VerticalAlignTopOutlined />},
           {name:'文章热度',path:'/article/hot',component:Hot,icon:<RocketOutlined />}
         ]
       },{
         name:'最近热搜',
         path:'/tsear',
         component:Tsear,
         icon:<SecurityScanOutlined />
       },{
           name:'问题反馈',
           path:'/feedback',
           component:Feedback,
           icon:<QuestionCircleOutlined />
       }   
    ]

    export default Routes;

