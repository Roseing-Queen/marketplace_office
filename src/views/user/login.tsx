import React, {useState} from "react";
import Layout, {Content, Header} from "antd/lib/layout/layout";
import "./styles/login.scss"
import {Button, Card, Checkbox, Form, Input, Select, Space} from "antd";
import {useTranslation} from "react-i18next";

type FieldType = {
    username: string;
    password: string;
    remember?: string;
    VerificationCode: string;
};

const Login = () => {

    const {t, i18n} = useTranslation();
    const changeLanguage = (lng: string) => {
        console.log(lng)
        i18n.changeLanguage(lng).then(() => {
        });
        setLanguage(t("language"))
    };
    let [language, setLanguage] = useState("language");
    const changeLoginForm = () => {
    }
    const getVerificationCode = () => {
        console.log("getVerificationCode")
    }
    return <div>
        <Layout style={{
            width: '100%',
            height: '100vh',
            backgroundImage: `url('/src/assets/image/login/background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Header className={"header"}>
                <Form.Item<FieldType>
                    label={language}
                    name="username"
                    style={{marginRight: '10px', width: '15vw', minWidth: '300px'}}
                >
                    <Select onChange={changeLanguage} defaultValue="en">
                        <Select.Option value="zh_cn">简体中文</Select.Option>
                        <Select.Option value="zh_tw">繁體中文</Select.Option>
                        <Select.Option value="en">English</Select.Option>
                        <Select.Option value="jp">日本語</Select.Option>
                    </Select>
                </Form.Item>
            </Header>
            <Content className={"content"}>
                <Card bordered={true}
                      style={{minWidth: 500, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.85)'}}>
                    <Card.Meta title={"Marketplace Office"}
                               style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginBottom: 50}}/>
                    <Form
                        name="basic"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 16}}
                        style={{minWidth: 500}}
                        initialValues={{remember: true}}
                        onFinishFailed={changeLoginForm}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label={t('user.username')}
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            label={t('user.password')}
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            label={t('user.VerificationCode')}
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Space direction="vertical" size="middle" style={{width: '100%'}}>
                                <Space.Compact style={{width: '100%'}}>
                                    <Input defaultValue="Combine input and button"/>
                                    <img src="/src/assets/image/login/background.jpg" alt="verificationCode"
                                         style={{width: '102px', height: '32px'}} onClick={() => {
                                        getVerificationCode()
                                    }}/>
                                    {/*<Button type="primary">获取验证码</Button>*/}
                                </Space.Compact>
                            </Space>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{span: 24}}
                        >
                            <div className={"others"}><Checkbox>{t('user.rememberMe')}</Checkbox>
                                <a onClick={() => {
                                }}>?{t('user.forgetPassword')}</a></div>
                        </Form.Item>
                        <Form.Item wrapperCol={{span: 24}} style={{margin: "0 !important"}}>
                            <Button type="primary" htmlType="submit" style={{width: '100%', textAlign: 'center',}}>
                                {t('user.login')}
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </Layout>
    </div>;
};

export default Login;
