import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const menuItems = [
  { id: 1, title: "Objetivos del curso", path: "/", icon: "🏠" },
  { id: 2, title: "Antes de empezar", path: "/intro", icon: "★" },

  { id: 3, title: "Introducción a JavaScript", path: "/tema1", icon: "M1" },
  { id: 4, title: "Características y sintaxis", path: "/tema2", icon: "M2" },
  { id: 5, title: "Variables y tipos de datos", path: "/tema3", icon: "M3" },
  { id: 6, title: "Operadores en JavaScript", path: "/tema4", icon: "M4" },

  {
    id: 7,
    title: "Estructuras de control",
    icon: "M5",
    path: "/tema5",
    children: [
      { id: "5-1", title: "Condicionales", path: "/5.1" },
      { id: "5-2", title: "Bucles", path: "/5.2" },
      { id: "5-3", title: "Saltos", path: "/5.3" },
    ],
  },

  // ✅ MÓDULO ARRAYS (M6)
  {
    id: 8,
    title: "Arrays",
    icon: "M6",
    path: "/arrays",
    children: [
      { id: "a-1", title: "Intro: qué es un array", path: "/arrays/intro" },
      { id: "a-2", title: "Recorrer arrays", path: "/arrays/recorrer" },
      { id: "a-3", title: "Métodos básicos", path: "/arrays/metodos-basicos" },
      { id: "a-4", title: "Transformar: map / filter / reduce", path: "/arrays/transformar" },
    ],
  },

  // ✅ MÓDULO OBJETOS (M7)
  {
    id: 9,
    title: "Objetos y POO",
    icon: "M7",
    path: "/tema6",
    children: [
      { id: "6-1", title: "Introducción a los objetos", path: "/6.1" },
      { id: "6-2", title: "Vocabulario clave (propiedad, método, instancia)", path: "/6.2" },
      { id: "6-3", title: "Crear objetos: literal, new Object y funciones fábrica", path: "/6.3" },
      { id: "6-4", title: "Acceso y edición: . , [] , delete y 'in'", path: "/6.4" },
      { id: "6-5", title: "Recorrer objetos: for...in, Object.keys/values/entries", path: "/6.5" },
      { id: "6-6", title: "Copias: referencia vs clon (spread, assign, structuredClone)", path: "/6.6" },
      { id: "6-7", title: "JSON y serialización: stringify/parse (y casos típicos)", path: "/6.7" },
      { id: "6-8", title: "Prototipos sin drama: prototype, [[Prototype]] y herencia", path: "/6.8" },
      { id: "6-9", title: "Clases (ES6): constructor, métodos y this", path: "/6.9" },
      { id: "6-10", title: "Getters/Setters y propiedades controladas", path: "/6.10" },
    ],
  },

  // ✅ MÓDULO FUNCIONES (M8)
  {
    id: 10,
    title: "Funciones",
    icon: "M8",
    path: "/tema7",
    children: [
      { id: "7-1", title: "Introducción: qué es una función y por qué existe", path: "/7.1" },
      { id: "7-2", title: "Declarar y llamar funciones (sin parámetros)", path: "/7.2" },
      { id: "7-3", title: "Parámetros y argumentos", path: "/7.3" },
      { id: "7-4", title: "Return: devolver valores (el click)", path: "/7.4" },
      { id: "7-5", title: "Funciones con eventos (botones e inputs)", path: "/7.5" },
      { id: "7-6", title: "Arrow functions (introducción suave)", path: "/7.6" },
    ],
  },

  // ✅ MÓDULO DOM + BOM (M9) — Tema 8
  // IMPORTANTE: tus rutas en App.jsx eran /tema8 y /8_1 ... /8_6
  {
    id: 11,
    title: "Conectar JS con HTML (DOM)",
    icon: "M9",
    path: "/tema8",
    children: [
      { id: "8-1", title: "DOM: document, getElementById, querySelector", path: "/8_1" },
      { id: "8-2", title: "Modificar contenido: textContent vs innerHTML", path: "/8_2" },
      { id: "8-3", title: "Eventos: addEventListener (click, input…)", path: "/8_3" },
      { id: "8-4", title: "Estilos: style, classList y toggle", path: "/8_4" },
      { id: "8-5", title: "BOM: window, alert/prompt, setTimeout", path: "/8_5" },
      { id: "8-6", title: "Actividades guiadas + mini apps", path: "/8_6" },
    ],
  },

  // ✅ MÓDULO MÉTODOS ESENCIALES (M10) — Tema 9
  // IMPORTANTE: ahora tu carpeta es tema9, y la portada debe ser /tema9
  {
    id: 12,
    title: "Métodos esenciales",
    icon: "M10",
    path: "/tema9",
    children: [
      { id: "9-1", title: "Strings", path: "/9_1" },
      { id: "9-2", title: "Arrays I", path: "/9_2" },
      { id: "9-3", title: "Arrays II", path: "/9_3" },
      { id: "9-4", title: "Numbers & Math", path: "/9_4" },
      { id: "9-5", title: "Métodos + DOM", path: "/9_5" },
      { id: "9-6", title: "Ejercicios", path: "/9_6" },
    ],
  },


  // ✅ MÓDULO (M11) — Tema 10
{
  id: 12,
  title: "Mini Apps + Repaso final",
  icon: "M10",
  path: "/tema10",
  indexTitle: "📌 Portada",
  children: [
    { id: "10-1", title: "10.1 · (lo que tengas)", path: "/10.1" },
    { id: "10-2", title: "10.2 · (lo que tengas)", path: "/10.2" },
    { id: "10-3", title: "10.3 · (lo que tengas)", path: "/10.3" },
    { id: "10-4", title: "10.4 · (lo que tengas)", path: "/10.4" },
    { id: "10-5", title: "10.5 · (lo que tengas)", path: "/10.5" },
    { id: "10-6", title: "10.6 · Repaso + Mini Apps", path: "/10.6" },
  ],
},

];

export default function Sidebar({ isOpen, onToggle }) {
  const location = useLocation();

  // Abrimos automáticamente el grupo activo, pero permitimos abrir/cerrar sin warnings
  const activeGroupPaths = useMemo(() => {
    return menuItems
      .filter((it) => it.children)
      .filter(
        (it) =>
          location.pathname === it.path ||
          it.children.some((c) => c.path === location.pathname)
      )
      .map((it) => it.path);
  }, [location.pathname]);

  const [openGroups, setOpenGroups] = useState({});

  useEffect(() => {
    // abre el grupo activo al navegar
    setOpenGroups((prev) => {
      const next = { ...prev };
      activeGroupPaths.forEach((p) => (next[p] = true));
      return next;
    });
  }, [activeGroupPaths]);

  return (
    <aside
      className={`app-sidebar ${isOpen ? "" : "app-sidebar--hidden"}`}
      aria-label="Navegación lateral"
    >
      <div className="app-sidebar__head">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: ".75rem",
          }}
        >
          <div>
            <h2>Temario</h2>
            <p className="muted small">Curso JavaScript</p>
          </div>

          {typeof onToggle === "function" && (
            <button
              type="button"
              className="btn"
              onClick={onToggle}
              aria-label={isOpen ? "Ocultar barra lateral" : "Mostrar barra lateral"}
              title={isOpen ? "Ocultar barra lateral" : "Mostrar barra lateral"}
              style={{ padding: ".35rem .6rem" }}
            >
              {isOpen ? "◀" : "▶"}
            </button>
          )}
        </div>
      </div>

      <nav className="app-sidebar__nav" aria-label="Contenido del curso">
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            const isGroupActive =
              !!item.children &&
              (location.pathname === item.path ||
                item.children.some((child) => location.pathname === child.path));

            const isDividerAfterIntro = item.path === "/intro";

            // ITEM NORMAL (sin hijos)
            if (!item.children) {
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`side-link${isActive ? " side-link--active" : ""}`}
                  >
                    <span className="side-link__num">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>

                  {isDividerAfterIntro && (
                    <div className="hr" style={{ margin: ".4rem .4rem .6rem" }} />
                  )}
                </li>
              );
            }

            const isOpenGroup = openGroups[item.path] ?? isGroupActive;

            // GRUPO CON HIJOS
            return (
              <li key={item.id}>
                <details
                  className={`side-group${isGroupActive ? " side-group--active" : ""}`}
                  open={isOpenGroup}
                  onToggle={(e) => {
                    const nextOpen = e.currentTarget.open;
                    setOpenGroups((prev) => ({ ...prev, [item.path]: nextOpen }));
                  }}
                >
                  <summary>
                    <span className="side-link__num">{item.icon}</span>
                    <span>{item.title}</span>
                    <span className="side-group__chev">⌄</span>
                  </summary>

                  <div className="side-subnav">
                    <Link
                      to={item.path}
                      className={`side-sublink${
                        location.pathname === item.path ? " side-sublink--active" : ""
                      }`}
                      style={{ marginBottom: ".25rem" }}
                    >
                      <span className="side-sublink__dot" />
                      <span>Portada</span>
                    </Link>

                    {item.children.map((child) => {
                      const isChildActive = location.pathname === child.path;

                      return (
                        <Link
                          key={child.id}
                          to={child.path}
                          className={`side-sublink${
                            isChildActive ? " side-sublink--active" : ""
                          }`}
                        >
                          <span className="side-sublink__dot" />
                          <span>{child.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </details>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
