import { Header } from "antd/lib/layout/layout";
import React from "react";
import "./index.scss";
import { Breadcrumb, Button, Dropdown, Space } from "antd";
import {
  HomeOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { toggleSidebar } from "../../../redux/modules/layout.tsx";
import { useDispatch } from "react-redux";
import { MenuProps } from "antd/es/menu/menu";
import { useNavigate } from "react-router";

let DropdownData: MenuProps;

const LayoutHeader = () => {
  let router = useNavigate();
  DropdownData = {
    theme: "light",
    mode: "horizontal",
    items: [
      {
        key: "1",
        label: "个人中心",
        icon: <UserOutlined />,
        onClick: () => {
          router("/personal");
        },
      },
      {
        key: "2",
        label: "退出登录",
        icon: <LoginOutlined />,
        onClick: () => {
          router("/personal");
        },
      },
    ],
  };
  const Jump = (path: string) => {
    router(path);
  };
  const dispatch = useDispatch();
  const updateStatus = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Header className={"headerStyle"}>
      <div className={"HeaderAll"}>
        <div className={"HeaderLogo"}>
          <Button
            type="primary"
            shape="circle"
            icon={<MenuFoldOutlined />}
            onClick={() => {
              updateStatus();
            }}
          />
        </div>
        <div className={"Breadcrumb"}>
          <Breadcrumb
            items={[
              {
                href: "",
                title: "Home",
              },
              {
                title: "Dashboard",
              },
              {
                title: "Application",
              },
            ]}
          />
        </div>
        <div className={"HeaderOption"}>
          <HomeOutlined
            style={{ fontSize: "20px", color: "#484848", marginRight: "10px" }}
            onClick={() => Jump("/dashboard")}
          />
          <Dropdown menu={DropdownData}>
            <a onClick={(e) => e.preventDefault()} style={{ height: "50px" }}>
              <Space style={{ color: "#484848" }}>
                <div className={"avatar"}>
                  <img
                    src={
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    }
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#484848",
                    }}
                  >
                    {"管理员"}
                  </span>
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
export default LayoutHeader;
