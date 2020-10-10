import React from 'react';
import { Form, Input, Button, Checkbox,Select } from 'antd';
const layout = {
    labelCol: {
      span: 4,
      
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
function Add(){
    return (<Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="初始用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="初始密码"
          name="password"
          rules={[
            {
              required: true,
              message: '必填',
            },
          ]}
          
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
      label="角色"
      name="role"
      rules={[
        {
          required: true,
          message: '必填',
        },
      ]}
    >
        <Select allowClear id="role" hasFeedback>
        <Option value="管理员" className="genders">管理员</Option>
        <Option value="普通用户" className="genders">普通用户</Option>
        <Option value="vip" className="genders">VIP用户</Option>
      </Select>
    </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            添加用户
          </Button>
        </Form.Item>
      </Form>)
}
export default Add;