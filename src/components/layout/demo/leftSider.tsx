import React from 'react';
import { Layout } from 'neon-ui';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

const { Header, Main, Footer } = Layout;
const { Content, Sider } = Main;

export default () => (
  <Layout>
    <Header>Header</Header>
    <Main>
      <Sider>
        Right Sider
        <br />
        in Main
      </Sider>
      <Content>Content in Main</Content>
    </Main>
    <Footer>Footer</Footer>
  </Layout>
);
