import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Sidebar from "../shared/components/Sidebar/Sidebar";

function AppLayout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <div className="flex h-screen">
      {!isAuthPage && <Sidebar />}

      <main className="flex-1 overflow-y-auto p-16 md:ml-5 bg-white">
        <AppRoutes />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
