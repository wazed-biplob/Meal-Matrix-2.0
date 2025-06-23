import {
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";
import { useAppDispatch } from "../redux/feature/hook";
import { Menu } from "antd";
export const UserDashboardMenu = () => {
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
            label: <Link to="volunteer-list">Volunteer List</Link>,
          },

          {
            key: "3",
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
