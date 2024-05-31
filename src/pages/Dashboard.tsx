import {
  FileMarkdownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/feature/hook";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  return (
    <Layout>
      <Sider
        className="h-screen py-4"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="text-center mx-auto flex flex-col justify-center items-center">
          <Link to="/">
            <h3 className="px-2 mx-auto flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-50">
              <span className="text-[#22C55E] font-bold">M</span>
              eal-
              <span className="text-[#3B82F6] font-bold">M</span>atrix
            </h3>
          </Link>
          <div className="flex justify-center items-center gap-x-2">
            <p className="text-white pt-2 font-bold">{user?.username}</p>
          </div>
        </div>
        <Menu
          className="pt-10"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="supplies">Supplies</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="create-supply">Create Supply</Link>,
            },
            {
              key: "4",
              icon: <FileMarkdownOutlined />,
              label: <Link to="create-testimonial">Create Testimonials</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "grey" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-3xl text-white text-center"></h1>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
