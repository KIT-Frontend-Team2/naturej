import { useAuth } from "contexts/auth.ctx";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const { accessToken } = useAuth();
  const navigation = useNavigate();
  const { pathName } = useLocation();

  useEffect(() => {
    if (!accessToken) {
      navigation("/", {
        state: {
          from: pathName,
        },
      });
    }
  }, [accessToken, navigation]);

  return accessToken ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
