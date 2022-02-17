import React from 'react';
import { Layout } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

const { Header, Main, Footer } = Layout;
const { Content, Sider } = Main;

export default () => (
  <Layout>
    <Header>Header</Header>
    <Main>
      <Content>Content in Main</Content>
      <Sider>Right Sider in Main</Sider>
    </Main>
    <Footer>Footer</Footer>
  </Layout>
);
