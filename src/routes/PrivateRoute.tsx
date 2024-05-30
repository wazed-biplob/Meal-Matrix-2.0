import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/feature/hook";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAppSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
