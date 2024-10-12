import React from "react";
import {Menu} from "antd";
import './index.scss'
import Sider from "antd/lib/layout/Sider";
import { useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {MenuProps} from "antd/es/menu/menu";

type MenuItem = Required<MenuProps>['items'][number];

const LayoutSider = () => {
    let navigate = useNavigate();
    let MenuData: MenuItem[];
    MenuData = [
        {
            "label": "模块1",
            "key": "1",
            "children": [
                {
                    "label": "子模块1-1",
                    "key": "1-1"
                },
                {
                    "label": "子模块1-2",
                    "key": "1-2"
                }
            ]
        },
        {
            "label": "模块2",
            "key": "2",
            "children": [
                {
                    "label": "子模块2-1",
                    "key": "2-1"
                },
                {
                    "label": "子模块2-2",
                    "key": "2-2"
                }
            ]
        },
        {
            "label": "模块3",
            "key": "3",
            "children": [
                {
                    "label": "子模块3-1",
                    "key": "3-1"
                },
                {
                    "label": "子模块3-2",
                    "key": "3-2"
                }
            ]
        },
        {
            "label": "模块4",
            "key": "4",
            "children": [
                {
                    "label": "子模块4-1",
                    "key": "4-1"
                },
                {
                    "label": "子模块4-2",
                    "key": "4-2"
                }
            ]
        },
        {
            "label": "模块5",
            "key": "5",
            "children": [
                {
                    "label": "子模块5-1",
                    "key": "5-1"
                },
                {
                    "label": "子模块5-2",
                    "key": "5-2"
                }
            ]
        },
        {
            "label": "模块6",
            "key": "6",
            "children": [
                {
                    "label": "子模块6-1",
                    "key": "6-1"
                },
                {
                    "label": "子模块6-2",
                    "key": "6-2"
                }
            ]
        },
        {
            "label": "模块7",
            "key": "7",
            "children": [
                {
                    "label": "子模块7-1",
                    "key": "7-1"
                },
                {
                    "label": "子模块7-2",
                    "key": "7-2"
                }
            ]
        },
        {
            "label": "模块8",
            "key": "8",
            "children": [
                {
                    "label": "子模块8-1",
                    "key": "8-1"
                },
                {
                    "label": "子模块8-2",
                    "key": "8-2"
                }
            ]
        },
        {
            "label": "模块9",
            "key": "9",
            "children": [
                {
                    "label": "子模块9-1",
                    "key": "9-1"
                },
                {
                    "label": "子模块9-2",
                    "key": "9-2"
                }
            ]
        },
        {
            "label": "模块10",
            "key": "10",
            "children": [
                {
                    "label": "子模块10-1",
                    "key": "10-1"
                },
                {
                    "label": "子模块10-2",
                    "key": "10-2"
                }
            ]
        },
        {
            "label": "模块11",
            "key": "11",
            "children": [
                {
                    "label": "子模块11-1",
                    "key": "11-1"
                },
                {
                    "label": "子模块11-2",
                    "key": "11-2"
                }
            ]
        },
        {
            "label": "模块12",
            "key": "12",
            "children": [
                {
                    "label": "子模块12-1",
                    "key": "12-1"
                },
                {
                    "label": "子模块12-2",
                    "key": "12-2"
                }
            ]
        },
        {
            "label": "模块13",
            "key": "13",
            "children": [
                {
                    "label": "子模块13-1",
                    "key": "13-1"
                },
                {
                    "label": "子模块13-2",
                    "key": "13-2"
                }
            ]
        },
        {
            "label": "模块14",
            "key": "14",
            "children": [
                {
                    "label": "子模块14-1",
                    "key": "14-1"
                },
                {
                    "label": "子模块14-2",
                    "key": "14-2"
                }
            ]
        },
        {
            "label": "模块15",
            "key": "15",
            "children": [
                {
                    "label": "子模块15-1",
                    "key": "15-1"
                },
                {
                    "label": "子模块15-2",
                    "key": "15-2"
                }
            ]
        },
        {
            "label": "模块16",
            "key": "16",
            "children": [
                {
                    "label": "子模块16-1",
                    "key": "16-1"
                },
                {
                    "label": "子模块16-2",
                    "key": "16-2"
                }
            ]
        },
        {
            "label": "模块17",
            "key": "17",
            "children": [
                {
                    "label": "子模块17-1",
                    "key": "17-1"
                },
                {
                    "label": "子模块17-2",
                    "key": "17-2"
                }
            ]
        },
        {
            "label": "模块18",
            "key": "18",
            "children": [
                {
                    "label": "子模块18-1",
                    "key": "18-1"
                },
                {
                    "label": "子模块18-2",
                    "key": "18-2"
                }
            ]
        },
        {
            "label": "模块19",
            "key": "19",
            "children": [
                {
                    "label": "子模块19-1",
                    "key": "19-1"
                },
                {
                    "label": "子模块19-2",
                    "key": "19-2"
                }
            ]
        },
        {
            "label": "模块20",
            "key": "20",
            "children": [
                {
                    "label": "子模块20-1",
                    "key": "20-1"
                },
                {
                    "label": "子模块20-2",
                    "key": "20-2"
                }
            ]
        }
    ];
    const Link=(data:any)=>{
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
    return (<Sider width={!isOpen?'50px':'200px'} className={'sliderStyle'}>
        <div className={'slider_head'}>
            <div className={'slider_icon'}>
                <img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} alt={'logo'} style={{width:'40px', height:'40px'}}/>
            </div>
            <div className={'slider_title_content'} style={{display: !isOpen?'none':''}}>{'Ant Design Pro'}</div>
        </div>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            theme="light"
            inlineCollapsed={!isOpen}
            items={MenuData}
            mode="inline"
            onClick={(item)=>{
                Link(item)
            }}
            style={{background:'rgba(255,255,255,0)',width:'100%',height:'calc(100% - 140px)',overflowY:'auto'}}
        />
    </Sider>);
};

export default LayoutSider;
