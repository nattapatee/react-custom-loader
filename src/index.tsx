import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import {Spin,Alert,Layout, Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css'; 
const { Header, Content, Footer } = Layout;
declare let require: any;

class App extends Component {
  render() {
    return (
        <Layout style={{height: "100%"}}>

      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Spin style={{height: "1000px"}} size="large" indicator={<img alt="example" src={require("./loader4.gif")} />}	 tip="กำลังโหลด...">

    <Content style={{ padding: '0 50px' ,height: "1000px"}}>

      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: "800px" }}>Content</div>

    </Content>
    </Spin>

    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  
    )
  }
}

render(<App />, document.getElementById('root'))