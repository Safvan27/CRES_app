import React from "react";
import { Card, Tabs } from "antd";
import "./Home.css";

import BasicLayout from "../../Components/Layout/BasicLayout";
import StudentList from "../../Components/StudentList/StudentList";
import TeachersList from "../../Components/TeachersList/TeachersList";

const { TabPane } = Tabs;
const callback = () => {
  console.log("table");
};
const Home = () => {
  return (
    <>
      <BasicLayout />
      <div className="dashboardMain">
        <Card>
          <Tabs defaultActiveKey="1" onChange={callback} type="card">
            <TabPane tab="Student List" key="1">
              <StudentList />
            </TabPane>
            <TabPane tab="Teachers List" key="2">
              <TeachersList />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </>
  );
};
export default Home;
