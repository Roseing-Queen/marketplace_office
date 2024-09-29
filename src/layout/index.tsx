import React from "react";
import Layout, {Content} from "antd/lib/layout/layout";
import "./style/index.scss"
import {Outlet} from "react-router";
import LayoutSider from "./modules/LayoutSider";
import LayoutHeader from "./modules/LayoutHeader";
import LayoutFooter from "./modules/LayoutFooter";

const Layouts = () => {
    return (
        <Layout className={"layout"}>
            <LayoutSider/>
            <Layout>
                <LayoutHeader/>
                <Content className={'contentStyle'}>
                    <Outlet/>
                </Content>
                <LayoutFooter/>
            </Layout>
        </Layout>
    );
};
export default Layouts;
