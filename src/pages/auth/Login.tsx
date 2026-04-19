import AuthLayout from "./AuthLayout";
import LoginBody from "../../components/units/auth/body/LoginBody";
import LoginFooter from "../../components/units/auth/footer/LoginFooter";
import LoadingScreen from "../../components/units/auth/loading/LoadingScreen";
import useLogin from "../../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
  const { loading, ...loginProps } = useLogin();
  const { isAuthenticated, authChecked } = useAuth();

  if (!authChecked) return <LoadingScreen />;

  // 로그인 되어 있으면 리다이렉트
  if (isAuthenticated) {
    return <Navigate to="/community/post" replace />; // 메인만들면 변경
  }

  return (
    <>
      {loading ? (
        <LoadingScreen {...loginProps} />
      ) : (
        <>
          <AuthLayout title="로그인/회원가입">
            <LoginBody {...loginProps} />
            <LoginFooter />
          </AuthLayout>
        </>
      )}
    </>
  );
};

export default Login;
