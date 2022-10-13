import React from "react";
import { Input, Space, Table, Tag , Button ,Col, Divider, Row } from 'antd';
import axios from "axios";
import { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';

import './styles/homePage.css'


const { Header, Content, Footer } = Layout;
function HomePage() {
    return ( 
        <div className="hmePge-header">
            <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
        <Row>
 <Col xs={12} sm={8} md={6} lg={8} xl={8} >
    <div style={{color:"white"}}>
       #####  ###### ######
    </div>
 </Col>

 <Col xs={0} sm={0} md={6} lg={8} xl={8} >
    <div style={{color:"white"}}>
       #####  ###### ######
    </div>
 </Col>

 <Col xs={12} sm={8} md={6} lg={8} xl={8}>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      /></Col>
        
      
      </Row>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);


        </div>
     );
}

export default HomePage;