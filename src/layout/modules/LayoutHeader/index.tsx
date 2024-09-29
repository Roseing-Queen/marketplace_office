import {Header} from "antd/lib/layout/layout";
import React from "react";
import './index.scss'
import {Breadcrumb, Button} from "antd";
import {HomeOutlined, MenuFoldOutlined} from "@ant-design/icons";
const LayoutHeader = () => {
    return (
        <Header className={'headerStyle'}>
           <div className={"HeaderAll"}>
               <div className={"HeaderLogo"}>
                   <Button type="primary" shape="circle" icon={<MenuFoldOutlined />} />
               </div>
               <div className={"Breadcrumb"}>
                   <Breadcrumb
                       items={[
                           {
                               href: '',
                               title: 'Home',
                           },
                           {
                               href: '',
                               title: 'Dashboard',
                           },
                           {
                               title: 'Application',
                           },
                       ]}
                   />
               </div>
               <div className={"HeaderOption"}>
                   <HomeOutlined size={24} color={"#0e0e0e"} />
               </div>
           </div>
        </Header>
    )
}
export default LayoutHeader
