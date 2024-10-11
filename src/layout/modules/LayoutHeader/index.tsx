import {Header} from "antd/lib/layout/layout";
import React from "react";
import './index.scss'
import {Breadcrumb, Button} from "antd";
import {HomeOutlined, MenuFoldOutlined} from "@ant-design/icons";
import {toggleSidebar} from "../../../redux/modules/layout.tsx";
import {useDispatch} from "react-redux";
const LayoutHeader = () => {
    const dispatch = useDispatch();
    const updateStatus = () => {
        dispatch(toggleSidebar())
    }
    return (
        <Header className={'headerStyle'}>
            <div className={"HeaderAll"}>
                <div className={"HeaderLogo"}>
                    <Button type="primary" shape="circle" icon={<MenuFoldOutlined/>} onClick={() => {
                        updateStatus()
                    }}/>
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
                    <HomeOutlined size={24} color={"#0e0e0e"}/>
                </div>
            </div>
        </Header>
    )
}
export default LayoutHeader
