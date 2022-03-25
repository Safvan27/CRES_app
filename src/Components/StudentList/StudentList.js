import React, { useState, useEffect } from "react";

import { Table, Button, Form, Input, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, removeStudent } from "../../Redux/Counter/studentStore";
import { SearchOutlined } from "@ant-design/icons";

import Modal from "antd/lib/modal/Modal";

const StudentList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState(0);
  const [studentAddress, setStudentAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState([
    {
      key: Math.floor(Math.random() * 100),
      name: "Joe Black",
      age: 21,
      address: "Sidney No. 1 Lake Park",
    },
  ]);

  const handleOk = () => {
    setIncrementAmount([
      {
        key: Math.floor(Math.random() * 100),
        name: studentName,
        age: studentAge,
        address: studentAddress,
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
          onClick={() => dispatch(removeStudent(record.key))}
        >
          Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    dispatch(addStudent(incrementAmount));
  }, [incrementAmount]);

  return (
    <>
      <div className="dashboardMain">
        <Button
          type="primary"
          onClick={showModal}
          style={{ float: "right", marginBottom: "10px" }}
        >
          Add Student
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
            <Input onChange={(e) => setStudentName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please Enter Student Age!" }]}
          >
            <InputNumber onChange={(e) => setStudentAge(e)} />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Please Enter Student Address!" },
            ]}
          >
            <Input onChange={(e) => setStudentAddress(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default StudentList;
