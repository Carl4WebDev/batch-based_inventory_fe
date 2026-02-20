import { useState } from "react";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-50 rounded-md border border-blue-600 px-3 py-2 text-blue-600 bg-white"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`
          fixed inset-0 bg-black/20 z-30
          transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen flex flex-col bg-white
          border-r border-blue-100 border-4 border-blue-600
          ${isMobile ? "w-full" : "w-56"}
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-end px-4 py-5 border-b border-blue-100">
          <span className="text-lg font-semibold text-blue-700">
            Batch-Based
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-6 space-y-1">
          <Link to={"/dashboard"} onClick={handleClose}>
            <SidebarItem label="Dashboard" />
          </Link>

          <Link to={"/manage-business"} onClick={handleClose}>
            <SidebarItem label="Manage Business" />
          </Link>
        </nav>

        {/* Logout (bottom) */}
        <div className="p-2 border-t border-blue-100">
          <Link
            to={"/"}
            onClick={handleClose}
            className="block w-full rounded-md px-3 py-3 text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 text-center"
          >
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ label }) {
  return (
    <div className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 cursor-pointer">
      <span>{label}</span>
    </div>
  );
}