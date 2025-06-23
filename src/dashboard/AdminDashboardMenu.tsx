import {
  FileMarkdownOutlined,
  LogoutOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/feature/hook";
import { logout } from "../redux/auth/authSlice";
export const AdminDashboardMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <>
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
          {
            key: "5",
            icon: <LogoutOutlined />,
            label: (
              <Link to="/" onClick={() => dispatch(logout())}>
                Log out
              </Link>
            ),
          },
        ]}
      />
    </>
  );
};
