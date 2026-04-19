import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import AccountRecovery from "../pages/auth/accountRecovery";
import PasswordRecovery from "../pages/auth/PasswordRecovery";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/findAccount" element={<AccountRecovery />} />
      <Route path="/findPW" element={<PasswordRecovery />} />
    </Routes>
  );
};

export default AuthRoutes;
