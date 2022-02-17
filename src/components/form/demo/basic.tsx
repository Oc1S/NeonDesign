import React from 'react';
import { Form, Input, Button } from 'neon-design';
import FormItem from '../FormItem';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../input/style';
import '../../button/style';

export default () => {
  const handleFinish = (valueObj) => {
    console.log('Success:', valueObj);
  };
  const handleFinishFailed = (errorValueObj) => {
    console.log('Failed:', errorValueObj);
  };

  return (
    <>
      <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed} layout="vertical">
        <FormItem
          name="account"
          rules={[
            { required: true, message: '账号不可为空' },
            { minLen: 4, message: '账号长度至少为4' },
            { maxLen: 12, message: '账号长度至多为12' },
          ]}
          label="账号"
        >
          <Input placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem
          name="password"
          rules={[
            { required: true, message: '密码不可为空' },
            { minLen: 6, message: '密码长度至少为6' },
            { maxLen: 12, message: '密码长度至多为12' },
          ]}
          label="密码"
        >
          <Input placeholder="请输入密码"></Input>
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
