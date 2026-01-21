import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Persistencia (como en el manual): recuerda si estaba plegada
  useEffect(() => {
    const saved = localStorage.getItem("js-course.sidebarOpen");
    if (saved === "0") setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("js-course.sidebarOpen", isSidebarOpen ? "1" : "0");
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <div className="app-shell">
        <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

        <div className={`app-body ${isSidebarOpen ? "" : "app-body--wide"}`}>
          <Sidebar isOpen={isSidebarOpen} />
          <main id="main" className="app-main" tabIndex={-1}>
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
