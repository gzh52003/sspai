import React from 'react';
import { Input } from 'antd';
import Form from 'antd/lib/form/Form';

const { TextArea } = Input;
const onChange = e => {
    console.log(e);
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
function Feedback(){
    return (  <>
        <Form {...formItemLayout}>
        <Input placeholder="input with clear icon" allowClear onChange={onChange} />
        <br />
        <br />
        <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
        </Form>
      </>)
}
export default Feedback;