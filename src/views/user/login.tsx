import React, {useState} from "react";
import Layout, {Content, Header} from "antd/lib/layout/layout";
import "./styles/login.scss"
import {Button, Card, Checkbox, Form, Input, Select} from "antd";
import {useTranslation} from "react-i18next";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng:string) => {
    console.log(lng)
    i18n.changeLanguage(lng).then(() => {});
    setLanguage(t("language"))
  };
  let [language, setLanguage] = useState("language");
  const changeLoginForm=()=>{}
  return <div>
    <Layout style={{width:'100%', height:'100vh', backgroundImage: 'url(/assets/image/login/background.jpg)'}}>
      <Header className={"header"}>
        <Form.Item<FieldType>
            label={language}
            name="username"
            style={{marginRight:'10px',width:'15vw',minWidth:'300px'}}
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
        <Card bordered={true} style={{ minWidth: 500,borderRadius:20 }}>
          <Card.Meta title={"Marketplace Office"} style={{textAlign:'center', fontSize:30, fontWeight:'bold',marginBottom:50}}/>
          <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{minWidth:500 }}
              initialValues={{ remember: true }}
              onFinishFailed={changeLoginForm}
              autoComplete="off"
          >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  </div>;
};

export default Login;
