import React, {useState} from 'react';
import {
    InboxOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme} from 'antd';
import LightConesPage from "./pages/LightConesPage";
import logo_image from "./images/logo_DB.png"
import {Link, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage";


const {Header, Sider, Content} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout>
            <Sider>
                <div className="demo-logo-vertical"/>
                <img src={logo_image} width={190} height={150}></img>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="light_cones" icon={<InboxOutlined/>}>
                        <Link to="/light_cones">Световые конусы</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}} />
                <Content>
                    <Routes>
                        <Route path="/light_cones" element={<LightConesPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
