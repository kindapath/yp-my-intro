import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

export default function Root() {
  return (
    <main className="main">
      <Sidebar />
      <Outlet />
    </main>
  );
}
