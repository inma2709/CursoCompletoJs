import { Link, NavLink } from "react-router-dom";

export default function Header({ isSidebarOpen, onToggleSidebar }) {
  return (
    <header className="app-header">
      {/* IZQUIERDA: marca + toggle */}
      <div className="app-header__left">
        <button
          className="btn btn-ghost"
          type="button"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Ocultar índice" : "Mostrar índice"}
        >
          {isSidebarOpen ? "⟨⟨ Ocultar índice" : "⟩⟩ Mostrar índice"}
        </button>

        <Link className="app-brand" to="/">
          <span className="badge">JS</span>
          <strong>JavaScript de 0 a Experto</strong>
        </Link>
      </div>

      {/* CENTRO: navegación principal */}
      <nav className="app-header__center" aria-label="Navegación principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `btn btn-ghost ${isActive ? "btn-primary" : ""}`
          }
        >
          Temario
        </NavLink>

        <NavLink
          to="/ejercicios"
          className={({ isActive }) =>
            `btn btn-ghost ${isActive ? "btn-primary" : ""}`
          }
        >
          Ejercicios
        </NavLink>
      </nav>

      
    </header>
  );
}
