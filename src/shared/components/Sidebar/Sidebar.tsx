import { useState } from "react";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && !isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-4 left-4 z-50 rounded-md border border-blue-600 px-3 py-2 text-blue-600 bg-white"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen flex flex-col bg-white
          border-r border-blue-100
          transition-all duration-200 border-4 border-blue-600
          ${
            isMobile
              ? isMobileOpen
                ? "w-full"
                : "hidden"
              : isCollapsed
              ? "w-16"
              : "w-56"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-blue-100">
          {!isCollapsed && (
            <span className="text-lg font-semibold text-blue-700">
              Batch-Based
            </span>
          )}

          <button
            onClick={() =>
              isMobile
                ? setIsMobileOpen(false)
                : setIsCollapsed(!isCollapsed)
            }
            className="text-blue-700 hover:text-blue-900 text-sm"
          >
            {isMobile ? "✕" : isCollapsed ? "»" : "«"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-6 space-y-1">
          <Link to={"/dashboard"}>
            <SidebarItem label="Dashboard" collapsed={isCollapsed} />
          </Link>
          <Link to={"/manage-business"}>
            <SidebarItem label="Manage Business" collapsed={isCollapsed} />
          </Link>
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({
  label,
  collapsed,
}: {
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 cursor-pointer">
      {!collapsed ? (
        <span>{label}</span>
      ) : (
        <span className="mx-auto text-xs text-blue-700">
          {label.charAt(0)}
        </span>
      )}
    </div>
  );
}
