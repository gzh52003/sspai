import React,{useEffect,useState} from 'react';
import { SmileOutlined,UploadOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber,Upload ,Button} from 'antd';
const initState = {

}
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
const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
function EditId(props){
    console.log(111,props)
    useEffect(()=>{
        console.log(props.match.params.id)
    })
   return(
         <Form {...formItemLayout}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
        //  ref={(el)=>{
        //     props.form=el
        //  }}
         >
         <Form.Item
      label="用户名"
      help="输入2-8个字符"
      hasFeedback
      name="username"
    >
      <Input placeholder="你的用户名" id="username" />
    </Form.Item>
    <Form.Item
      label="性别"
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
    >
      <Input placeholder="你的年龄" id="age" />
    </Form.Item>
      <Form.Item
        label="生日"
        help="请选择你的出生日期"
        id="birthday"
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