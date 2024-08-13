import React from "react";
import AppRoutes from "./AppRoutes";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  { label: "Overview", key: "/", icon: <AppstoreOutlined /> },
  { label: "Users", key: "users", icon: <MailOutlined /> },
  { label: "Vehicles", key: "vehicles", icon: <SettingOutlined /> },
  { label: "Spare Parts", key: "spareparts", icon: <AppstoreOutlined /> },
];

const Dashboard = () => {
  const naviagate = useNavigate();
  const onClick = ({ key }) => {
    naviagate(key);
  };
  return (
    <div className="flex flex-row min-h-[100vh]">
      <Menu className="basis-1/6 bg-gray-200" items={items} onClick={onClick} mode="vertical"></Menu>
      <div className="basis-5/6 p-2 block bg-gray-100">
      <AppRoutes />
      </div>
    </div>
  );
};
export default Dashboard;
