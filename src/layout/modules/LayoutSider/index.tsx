import React from "react";
import { Menu } from "antd";
import "./index.scss";
import Sider from "antd/lib/layout/Sider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MenuProps } from "antd/es/menu/menu";
import Scrollbars from "react-custom-scrollbars";
import { HomeOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutSider = () => {
  let navigate = useNavigate();
  let MenuData: MenuItem[];
  MenuData = [
    {
      icon: <HomeOutlined />,
      label: "模块1",
      key: "1",
      children: [
        {
          icon: <HomeOutlined />,
          label: "子模块1-1",
          key: "1-1",
        },
        {
          icon: <HomeOutlined />,
          label: "子模块1-2",
          key: "1-2",
        },
        {
          icon: <HomeOutlined />,
          label: "子模块1-1",
          key: "1-3",
        },
        {
          icon: <HomeOutlined />,
          label: "子模块1-2",
          key: "1-4",
        },
        {
          icon: <HomeOutlined />,
          label: "子模块1-1",
          key: "1-5",
        },
        {
          icon: <HomeOutlined />,
          label: "子模块1-2",
          key: "1-6",
        },
      ],
    },
    {
      icon: <HomeOutlined />,
      label: "模块2",
      key: "2",
    },
    {
      icon: <HomeOutlined />,
      label: "模块3",
      key: "3",
      children: [
        {
          label: "子模块3-1",
          key: "3-1",
        },
        {
          label: "子模块3-2",
          key: "3-2",
        },
      ],
    }
  ];
  const Link = (data: any) => {
    console.log(data);
    navigate("/dashboard");
  };
  const getTitle = () => {
    let title = localStorage.getItem("public_configuration");
    if (title) {
      return JSON.parse(atob(title)).title;
    } else {
      return "Marketplace Office";
    }
  };
  const isOpen = useSelector((state: any) => {
    try {
      return state.layout?.sidebar?.isOpen ?? false; // 使用可选链和空值合并运算符, 提供默认值
    } catch (error) {
      console.error("获取 sidebar.isOpen 状态时发生错误:", error);
      return false; // 发生错误时返回默认值
    }
  });
  return (
    <Sider width={!isOpen ? "50px" : "250px"} className={"sliderStyle"}>
      <div className={"slider_head"}>
        <div className={"slider_icon"}>
          <img
            src={
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            }
            alt={"logo"}
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div
          className={"slider_title_content"}
          style={{ display: !isOpen ? "none" : "" }}
        >
          {getTitle()}
        </div>
      </div>
      <Scrollbars
        style={{ height: "calc(100% - 170px)" }}
        autoHide={true}
        className={"slider_menu_content"}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          theme="light"
          inlineCollapsed={!isOpen}
          items={MenuData}
          mode="inline"
          onClick={(item) => {
            Link(item);
          }}
          style={{
            background: "rgba(255,255,255,0)",
            width: "100%",
            overflowY: "auto",
          }}
          className={"slider_menu"}
        />
      </Scrollbars>
    </Sider>
  );
};

export default LayoutSider;
