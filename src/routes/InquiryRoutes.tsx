import { Route, Routes } from "react-router-dom";
import Inquiry from "../pages/splash/inquiry/Inquiry";
import Findpwd from "../pages/splash/findpwd/Findpwd";

const InquiryRoutes = () => {
  return (
    <Routes>
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/password" element={<Findpwd />} />
    </Routes>
  );
};

export default InquiryRoutes;
