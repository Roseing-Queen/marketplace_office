import React from "react";
import {Menu} from "antd";
import './index.scss'
import {MenuItemType} from "antd/es/menu/interface";
import Sider from "antd/lib/layout/Sider";
const LayoutSider = () => {
    let collapsed = false;
    let MenuData: MenuItemType[];
    MenuData = [];
    return (<Sider width="25%" className={'siderStyle'}>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={MenuData}
        />
    </Sider>);
};

export default LayoutSider;
