import React, { useState } from 'react';

import { Breadcrumb, Layout,theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import MainMenu from '@/components/MainMenu'

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  //const navigateTo = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* 左边列表 */}
        <MainMenu/>
      </Sider>
        {/* 右边 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ paddingLeft: "16px", background: colorBgContainer }} >
        {/* 右边头部面包屑 */}
        <Breadcrumb style={{ lineHeight:'64px' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
        </Header>
        {/* 右边内容部分-白色底盒子 */}
        <Content style={{ margin: '16px 16px 0' , padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG,}}>
            {/* 窗口 */}
            <Outlet/>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:'48px' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;