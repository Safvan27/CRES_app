import React, { useState, useEffect } from "react";

import { Table, Button, Form, Input, Modal, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTeacher, removeTeacher } from "../../Redux/Counter/teachersReducer";
import { SearchOutlined } from "@ant-design/icons";

const TeachersList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherAge, setTeacherAge] = useState(0);
  const [teacherAddress, setTeacherAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const count = useSelector((state) => state.teacherslist.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState([
    {
      key: Math.floor(Math.random() * 100),
      name: "Mr. Paul",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ]);

  const handleOk = () => {
    setIncrementAmount([
      {
        key: Math.floor(Math.random() * 100),
        name: teacherName,
        age: teacherAge,
        address: teacherAddress,
      },
    ]);
    setIsModalVisible(false);
  };
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      width: 150,
      filterIcon: (filtered) => <SearchOutlined />,
      onFilter: (value, record) =>
        record["name"]
          ? record["name"]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : "",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          size="middle"
          onClick={() => dispatch(removeTeacher(record.key))}
        >
          Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    dispatch(addTeacher(incrementAmount));
  }, [incrementAmount]);

  return (
    <>
      <div className="dashboardMain">
        <Button
          type="primary"
          onClick={showModal}
          style={{ float: "right", marginBottom: "10px" }}
        >
          Add Teacher
        </Button>

        <Table columns={columns} dataSource={count} />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please Enter Student Name!" }]}
          >
            <Input onChange={(e) => setTeacherName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please Enter Student Age!" }]}
          >
            <InputNumber onChange={(e) => setTeacherAge(e)} />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Please Enter Student Address!" },
            ]}
          >
            <Input onChange={(e) => setTeacherAddress(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TeachersList;
