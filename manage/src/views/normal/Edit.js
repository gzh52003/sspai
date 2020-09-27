import React, {useState,useEffect,useContext} from 'react';
import { Table, Tag, Space ,Image,Button} from 'antd';
import request from '../../utils/request'
import {MyContext} from '../../myContext';
const columns = [
   {
    title: '头像',
    dataIndex: 'toppic',
    key: 'toppic',
    render: text =><Image
    width={100}
    src={text}
  />,
   },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: text => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: text => <a>{text}</a>,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
      render: text => <a>{text}</a>,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      render: text => <a>{text}</a>,      
    },
    {
      title: '操作',
      dataIndex: 'method',
      key: 'method',
      render: text =>  <Button type="primary" rowKey={(val)=>console.log(val)}>编辑</Button>,      
    }
  ];
  



function Eidt(props){

    const { state, dispatch } = useContext(MyContext)
    useEffect(()=>{
        console.log(props)
        const getData = async ()=>{
            let {data} = await request.get('/user'); 
            console.log(data,'adad')
            let dataArr = [];
            data.map(item=>{
              dataArr.push(    {
                key: item._id,
                username: item.username,
                age: item.age ? item.age : '',
                address: item.address ? item.address : '',
                toppic: item.toppic ? item.toppic : '',
                method: item._id,
                gender: item.gender ? item.gender : '保密',
                birthday:item.birthday ? item.birthday : '保密'
              })
            })
            dispatch({ type: 'initTable',edit:data});

        }
        getData();
    },[]);

    return (<div>
        <Table 
        columns={columns}
        dataSource={state.edit}
        onRow={record => {
          return {
            onClick: event => {if(event.target.tagName === 'SPAN' ||event.target.tagName === 'BUTTON'){
             props.history.push('/face/user/edit/'+record._id)
            }}, // 点击行
          };
        }}
        />
       
    </div>)
}
export default Eidt;