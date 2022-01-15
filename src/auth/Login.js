import { Form, Input, Button, Checkbox, Card, Col } from "antd";
import authservice from "../service/auth.service";
import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router";

const Login = () => {
  const [signup, setSignUp] = useState(false);
  const [text, setText] = useState({ buttonText: "acceder un compte" });
  const history = useHistory();

  const onFinish = (values) => {
    console.log(values);
    signup ? register(values) : signin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const signin = async (user) => {
    console.log(user);
    const x = await await authservice.login(user);
    if (x.status === 200) {
      localStorage.setItem("user", JSON.stringify(x.data.user));
      history.push("/Listsujet");
    }
    console.log(x);
  };
  const register = async (user) => {
    console.log(user);
    const x = await await authservice.register(user);
    console.log(x);
  };
  const changeText = () => {
    setSignUp((prevSignup) => !prevSignup);
  };

  return (
    <Card className="my-5">
      <Button onClick={() => changeText()}>dzefgre</Button>
      <Col span={10} offset={14}>
        {" "}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {signup ? "crrer compte " : "entrer"}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Card>
  );
};
export default Login;
