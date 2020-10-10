import React,{useEffect,useState,useContext} from 'react';
import { SmileOutlined,UploadOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber,Upload ,Button} from 'antd';
import request from '../../utils/request';
import {MyContext} from '../../myContext'
const { Option } = Select;
const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
function EditId(props){
    console.log(111,props)
    const onFinish = values => {
        if(values.birthday){
            let d=new Date(values.birthday._d);
            let str = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            values.birthday = str;
        }

        // if(values.birthday){
        //     values.birthday =values.birthday.substr( 0,values.birthday.indexOf('T'))
        // }
        const putData = async ()=>{
          await  request.put('/user/'+props.match.params.id,{
               ...values,
            })
        }
        putData();
      };
    const [state, changeState] = useState()
    useEffect(()=>{
        let id =  props.match.params.id;
        const userData = async () => {
            const { data } = await request.get(`/user/${id}`)
            console.log(2222, data[0])
            console.log(789, state)
            if (state) {
              console.log(1234)
              state.setFieldsValue(
                { username: data[0].username,address:data[0].address,gender:data[0].gender,age:data[0].age,phone:data[0].phone}
              )
              console.log(1234, data[0].username)
            }
          }
          userData()

    },[state])
   return(
         <Form {...formItemLayout}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         ref={(el) => {
            changeState(el)
          }}
         >
         <Form.Item
      label="用户名"
      help="输入2-8个字符"
      hasFeedback
      name="username"
      rules={[
        {
          required: true,
         
        },
      ]}
    >
      <Input placeholder="你的用户名" id="username" />
    </Form.Item>
    <Form.Item
      label="性别"
      name="gender"
      help="输入2-8个字符"
    >
        <Select allowClear id="gender" hasFeedback>
        <Option value="男" className="genders">男</Option>
        <Option value="女" className="genders">女</Option>
        <Option value="保密" className="genders">保密</Option>
      </Select>
    </Form.Item>
    <Form.Item
      label="年龄"
      help="输入你的年龄"
      name="age"
    >
      <Input placeholder="你的年龄" id="age" />
    </Form.Item>
    <Form.Item
      label="手机号"
      help="输入你的手机号"
      name="phone"
    >
      <Input placeholder="你的手机号" id="age" />
    </Form.Item>
      <Form.Item
        label="生日"
        help="请选择你的出生日期"
        id="birthday"
        name="birthday"
      >
        <DatePicker ></DatePicker>
      </Form.Item>
      <Form.Item
        name="上传你的头像"
        label="头像"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="大小不超过2M"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>点击上传</Button>
        </Upload>
      </Form.Item>
      <Form.Item
      label="地址"
      help="输入你的地址"
      name="address"
    >
      <Input placeholder="你的地址" id="address" />
    </Form.Item>
    <Form.Item wrapperCol={{ span: 24, offset: 8 }}>
        <Button type="primary" htmlType="submit">
         提交
        </Button>
      </Form.Item>
         </Form>
  ) 
}
export default EditId