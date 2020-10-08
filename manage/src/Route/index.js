import User from '../views/User'
import Info from '../views/Info'
import Article from '../views/Article'
import Home from '../views/normal/home'
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
import EditId from '../views/normal/EditId';

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
        path:'/face/home',
        component: Home,
        icon:<HomeOutlined />
      },{
         name:'用户管理',
         path:'/face/user',
         component:User,
         icon:<UserOutlined />,
         children:[
           {name:'用户编辑',path:'/face/user/edit',component:Eidt,icon:<EditOutlined />},
          
           {name:'用户添加',path:'/face/user/add',component:Add,icon:<UserAddOutlined />},
           {name:'用户删除',path:'/face/user/del',component:Del,icon:<DeleteOutlined />}
         ]
       },{
         name: '用户资讯',
         path:'/face/info',
         component: Info,
         icon:<InfoCircleOutlined />,
         children:[
          {name:'用户收藏',path:'/face/info/collect',component:Cols,icon:<SketchOutlined />},
          {name:'用户订阅',path:'/face/info/subscribe',component:Sub,icon:<AlertOutlined />},
          {name:'用户社区',path:'/face/info/community',component:Com,icon:<CommentOutlined />},
  
        ]       
       },{
         name:'文章管理',
         path:'/face/article',
         component: Article,
         icon:<ReadOutlined />,
         children:[
           {name:'文章审核',path:'/face/article/check',component:Check,icon:<CheckCircleOutlined />},
           {name:'文章发布',path:'/face/article/post',component:Post,icon:<VerticalAlignTopOutlined />},
           {name:'文章热度',path:'/face/article/hot',component:Hot,icon:<RocketOutlined />}
         ]
       },{
         name:'最近热搜',
         path:'/face/tsear',
         component:Tsear,
         icon:<SecurityScanOutlined />
       },{
           name:'问题反馈',
           path:'/face/feedback',
           component:Feedback,
           icon:<QuestionCircleOutlined />
       }   
    ]

    export default Routes;

