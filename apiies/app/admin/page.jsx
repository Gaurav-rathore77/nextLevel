"use client";
import { useAdmin } from "../../context/AdminContext";

export default function AdminDashboard() {
  const { sidebarOpen, setSidebarOpen } = useAdmin();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          📊 Welcome to the Admin Dashboard
        </h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </div>
      <p className="text-gray-700">
        Current Sidebar State:{" "}
        <span className="font-semibold">
          {sidebarOpen ? "Open" : "Closed"}
        </span>
      </p>
    </div>
  );
}
