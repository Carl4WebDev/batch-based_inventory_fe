import { Routes } from "react-router-dom";
import { authRoutes } from "../feature/auth/routes";
import { dashboardRoutes } from "../feature/dashboard/routes";
import {mngBusinessRoutes} from "../feature/manage-business/routes" 

export default function AppRoutes() {
  return (
    <Routes>
      {authRoutes}
      {dashboardRoutes}
      {mngBusinessRoutes}
    </Routes>
  );
}
