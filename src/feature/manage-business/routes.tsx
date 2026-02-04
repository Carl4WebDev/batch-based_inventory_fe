import { Route } from "react-router-dom";
import MngBusinessPage from "./pages/MngBusinessPage";
import BatchInfoPage from "./pages/BatchInfoPage";

export const mngBusinessRoutes = (
  <>
    <Route path="/manage-business" element={<MngBusinessPage />} />
    <Route
      path="/manage-business/:batchId"
      element={<BatchInfoPage />}
    />
  </>
);
