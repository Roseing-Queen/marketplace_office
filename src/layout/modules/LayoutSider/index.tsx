import React from "react";
import {Menu} from "antd";
import './index.scss'
import {MenuItemType} from "antd/es/menu/interface";
import Sider from "antd/lib/layout/Sider";
import { useSelector} from "react-redux";
const LayoutSider = () => {
    let MenuData: MenuItemType[];
    MenuData = [];
    const isOpen = useSelector((state: any) => {
        try {
            return state.layout?.sidebar?.isOpen ?? false; // 使用可选链和空值合并运算符, 提供默认值
        } catch (error) {
            console.error("获取 sidebar.isOpen 状态时发生错误:", error);
            return false; // 发生错误时返回默认值
        }
    });
    return (<Sider width={!isOpen?'50px':'200px'} className={'siderStyle'}>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={isOpen}
            items={MenuData}
        />
    </Sider>);
};

export default LayoutSider;
