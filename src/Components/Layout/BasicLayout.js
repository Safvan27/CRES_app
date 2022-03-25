import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";

import "./Layout.css";

const { Header } = Layout;

const BasicLayout = () => {
  const history = useHistory();
  const selectMenu = history.location.pathname.split("/dashboard")[1];
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={"home"}
            selectedKeys={[selectMenu || "home"]}
            onSelect={({ key }) =>
              key === "home"
                ? history.push("/dashboard")
                : history.push(`/${key}`)
            }
          >
            <Menu.Item key={"home"}>Dashboard</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};
export default BasicLayout;
