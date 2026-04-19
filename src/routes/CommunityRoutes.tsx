import { Route, Routes } from "react-router-dom";
import Post from "../pages/community/Post/Post";
import TravelMate from "../pages/community/travelMate/TravelMate";
import Storage from "../pages/community/storage/Storage";
import PostEditor from "../pages/community/Post/PostEditor";
import PostPreview from "../pages/community/Post/PostPreview";

const CommunityRoutes = () => {
  return (
    <Routes>
      <Route path="post" element={<Post />} />
      <Route path="travelmate" element={<TravelMate />} />
      <Route path="storage" element={<Storage />} />
      <Route path="postEditor" element={<PostEditor />} />
      <Route path="postPreview" element={<PostPreview />} />
    </Routes>
  );
};

export default CommunityRoutes;
