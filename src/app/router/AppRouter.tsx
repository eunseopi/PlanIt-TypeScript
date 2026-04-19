import { Navigate, Route, Routes } from "react-router-dom";

import SplashPage from "../../pages/splash/SplashPage";
import Community from "../../pages/community/Community";
import PostDetail from "../../pages/community/Post/PostDetail";
import AuthRoutes from "../../routes/AuthRoutes";
import Register from "../../pages/register/Regitser";
import InquiryRoutes from "../../routes/InquiryRoutes";
import WelcomeScreen from "../../pages/register/WelcomeScreen";
import ChatRoutes from "../../routes/ChatRoutes";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/splash" element={<SplashPage />} />
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="welcome" element={<WelcomeScreen />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/inquiry/*" element={<InquiryRoutes />} />
      <Route path="/chats/*" element={<ChatRoutes />} />
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/community/*" element={<Community />} />
      <Route path="/community/post/:postId" element={<PostDetail />} />
    </Routes>
  );
}
