import { Form, Input, Button, Checkbox, Card } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const log = useSelector((state) => state.login.value);
  const history = useHistory();
  const onFinish = (values) => {
    if (
      values.username === log[0].name &&
      values.password === log[0].password
    ) {
      history.push("/dashboard");
    } else {
      alert("User Does not Exist");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginMain">
      <Card title="Login Page">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
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
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
