import React from "react";
import {Menu} from "antd";
import './index.scss'
import Sider from "antd/lib/layout/Sider";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {MenuProps} from "antd/es/menu/menu";
import Scrollbars from "react-custom-scrollbars";
import {HomeOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

const LayoutSider = () => {
    let navigate = useNavigate();
    let MenuData: MenuItem[];
    MenuData = [
        {
            icon: <HomeOutlined/>,
            "label": "模块1",
            "key": "1",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-1",
                    "key": "1-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-2",
                    "key": "1-2"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-1",
                    "key": "1-3"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-2",
                    "key": "1-4"
                },  {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-1",
                    "key": "1-5"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块1-2",
                    "key": "1-6"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块2",
            "key": "2",
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块3",
            "key": "3",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块3-1",
                    "key": "3-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块3-2",
                    "key": "3-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块4",
            "key": "4",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块4-1",
                    "key": "4-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块4-2",
                    "key": "4-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块5",
            "key": "5",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块5-1",
                    "key": "5-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块5-2",
                    "key": "5-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块6",
            "key": "6",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块6-1",
                    "key": "6-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块6-2",
                    "key": "6-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块7",
            "key": "7",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块7-1",
                    "key": "7-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块7-2",
                    "key": "7-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块8",
            "key": "8",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块8-1",
                    "key": "8-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块8-2",
                    "key": "8-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块9",
            "key": "9",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块9-1",
                    "key": "9-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块9-2",
                    "key": "9-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块10",
            "key": "10",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块10-1",
                    "key": "10-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块10-2",
                    "key": "10-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块11",
            "key": "11",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块11-1",
                    "key": "11-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块11-2",
                    "key": "11-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块12",
            "key": "12",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块12-1",
                    "key": "12-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块12-2",
                    "key": "12-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块13",
            "key": "13",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块13-1",
                    "key": "13-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块13-2",
                    "key": "13-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块14",
            "key": "14",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块14-1",
                    "key": "14-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块14-2",
                    "key": "14-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块15",
            "key": "15",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块15-1",
                    "key": "15-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块15-2",
                    "key": "15-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块16",
            "key": "16",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块16-1",
                    "key": "16-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块16-2",
                    "key": "16-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块17",
            "key": "17",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块17-1",
                    "key": "17-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块17-2",
                    "key": "17-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块18",
            "key": "18",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块18-1",
                    "key": "18-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块18-2",
                    "key": "18-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块19",
            "key": "19",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块19-1",
                    "key": "19-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块19-2",
                    "key": "19-2"
                }
            ]
        },
        {
            icon: <HomeOutlined/>,
            "label": "模块20",
            "key": "20",
            "children": [
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块20-1",
                    "key": "20-1"
                },
                {
                    icon: <HomeOutlined/>,
                    "label": "子模块20-2",
                    "key": "20-2"
                }
            ]
        }
    ];
    const Link = (data: any) => {
        console.log(data)
        navigate("/dashboard");
    }
    const isOpen = useSelector((state: any) => {
        try {
            return state.layout?.sidebar?.isOpen ?? false; // 使用可选链和空值合并运算符, 提供默认值
        } catch (error) {
            console.error("获取 sidebar.isOpen 状态时发生错误:", error);
            return false; // 发生错误时返回默认值
        }
    });
    return (<Sider width={!isOpen ? '50px' : '250px'} className={'sliderStyle'}>
        <div className={'slider_head'}>
            <div className={'slider_icon'}>
                <img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} alt={'logo'}
                     style={{width: '40px', height: '40px'}}/>
            </div>
            <div className={'slider_title_content'} style={{display: !isOpen ? 'none' : ''}}>
                {'Ant Design Pro'}</div>
        </div>
        <Scrollbars style={{height: 'calc(100% - 170px)'}} autoHide={true} className={'slider_menu_content'}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                theme="light"
                inlineCollapsed={!isOpen}
                items={MenuData}
                mode="inline"
                onClick={(item) => {
                    Link(item)
                }}
                style={{background: 'rgba(255,255,255,0)', width: '100%', overflowY: 'auto'}}
                className={'slider_menu'}
            />
        </Scrollbars>
    </Sider>);
};

export default LayoutSider;
