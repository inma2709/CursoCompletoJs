// Home.jsx
// Página de inicio con introducción + índice del curso (módulos) usando el CSS global

import { Link } from "react-router-dom";

const COURSE = {
  title: "JavaScript de 0 a Experto (ES6+)",
  subtitle: "Aprende desde cero hasta un nivel profesional con teoría, ejemplos y ejercicios guiados.",
  intro: [
    "Este curso está diseñado para que avances paso a paso: primero entiendes los conceptos, luego los ves en ejemplos reales y finalmente los aplicas con ejercicios enlazados.",
    "Cada tema estará organizado en secciones tipo acordeón (details/summary) para que puedas estudiar a tu ritmo y repasar rápidamente lo importante.",
    " No te agobies si al principio no entiendes todo: la práctica constante es clave para dominar JavaScript.",
    " Y si ya conoces JS básico este curso te ayudará a consolidar. En la parte final hay temas avanzados para llevar tus habilidades al siguiente nivel.",
    "En la parte de ejercicios puedes encontrar retos de diferentes niveles para ponerte a prueba",
    "El único secreto de la programación es la práctica constante y la curiosidad por aprender cosas nuevas.",
  ],
  goals: [
    "Dominar la sintaxis moderna (ES6+) y escribir código limpio.",
    "Entender el modelo de ejecución, el scope y la asincronía.",
    "Manipular el DOM, eventos y consumo de APIs.",
    "Prepararte para proyectos reales (front y base de Node).",
  ],
  modules: [
    { id: "1", title: "Introducción a JavaScript", desc: "Qué es JS, evolución, entornos y herramientas." },
    { id: "2", title: "Características y sintaxis", desc: "Sintaxis básica, buenas prácticas y errores frecuentes." },
    { id: "3", title: "Tipos de datos y variables", desc: "let/const, primitivos, complejos y typeof." },
    { id: "4", title: "Conversiones entre tipos", desc: "Coerción, truthy/falsy y conversiones explícitas." },
    { id: "5", title: "Operadores", desc: "Aritméticos, comparación, lógicos y operadores modernos." },
    { id: "6", title: "Control de flujo", desc: "Condicionales, bucles y patrones de control." },
    { id: "7", title: "Arrays", desc: "Métodos clave y programación funcional (map/filter/reduce)." },
    { id: "8", title: "Funciones", desc: "Arrow, parámetros, scope, closures (intro)." },
    { id: "9", title: "POO (Programación Orientada a Objetos)", desc: "Objetos, this, prototipos y reutilización." },
    { id: "10", title: "Clases", desc: "Clases ES6, herencia y buenas prácticas." },
    { id: "11", title: "Módulos", desc: "import/export y organización de proyectos." },
    { id: "12", title: "Librería estándar JavaScript", desc: "RegExp, Set/Map, JSON y APIs estándar." },
    { id: "13", title: "Iteradores y generadores", desc: "Symbol.iterator, generadores y casos avanzados." },
    { id: "14", title: "Programación asíncrona", desc: "Callbacks, Promesas y async/await." },
    { id: "15", title: "Eventos", desc: "Modelo de eventos, delegación y casos reales." },
    { id: "16", title: "Scripting", desc: "Automatización en navegador y Node." },
    { id: "17", title: "Componentes web", desc: "Custom Elements, Shadow DOM, templates." },
    { id: "18", title: "Gráficos en canvas y audio", desc: "Canvas API, animación y audio." },
    { id: "19", title: "Almacenamiento y Networking", desc: "Storage, cookies, fetch y seguridad básica." },
    { id: "20", title: "Node.js: JavaScript del lado del servidor", desc: "Node, npm y fundamentos de servidor." },
    { id: "21", title: "Extensiones JavaScript", desc: "Ecosistema, casos de uso y proyección." },
  ],
};

export default function Home() {
  return (
    <main className="wrap" id="main">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      {/* HERO */}
      <header className="hero" id="contenido">
        <span className="badge">📘 Curso</span>
        <h1 style={{ marginTop: ".55rem" }}>{COURSE.title}</h1>
        <p className="muted">{COURSE.subtitle}</p>

        <div className="row" style={{ marginTop: ".75rem" }}>
          <Link className="btn btn-primary" to="/modulo/1">
            Empezar por el Módulo 1
          </Link>
          <a className="btn btn-ghost" href="#indice">
            Ver índice
          </a>
        </div>
      </header>

      {/* INTRO */}
      <section className="grid" style={{ marginTop: "1rem" }}>
        <article className="card">
          <h2>¿Cómo está organizado el curso?</h2>
          {COURSE.intro.map((p, i) => (
            <p key={i} className="muted">
              {p}
            </p>
          ))}

          <div className="hr" />

          <div className="grid grid-2">
            <div className="callout callout--concept">
              <p className="callout__title">📘 Conceptos</p>
              <p className="muted small">
                Explicaciones claras con definiciones, claves y contexto.
              </p>
            </div>

            <div className="callout callout--example">
              <p className="callout__title">🧩 Ejemplos</p>
              <p className="muted small">
                Código comentado para ver cómo funciona en la práctica.
              </p>
            </div>

            <div className="callout callout--exercise">
              <p className="callout__title">🛠️ Ejercicios enlazados</p>
              <p className="muted small">
                Actividades progresivas para aplicar lo aprendido paso a paso.
              </p>
            </div>

            <div className="callout callout--warning">
              <p className="callout__title">⚠️ Errores frecuentes</p>
              <p className="muted small">
                Trampas típicas y buenas prácticas para evitarlas.
              </p>
            </div>
          </div>
        </article>

        <article className="card">
          <h2>Objetivos del curso</h2>
          <ul>
            {COURSE.goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>

          <div className="hr" />

          <div className="callout callout--summary">
            <p className="callout__title">✅ Resultado esperado</p>
            <p className="muted">
              Al terminar, podrás construir proyectos con JavaScript moderno,
              entender asincronía, DOM y APIs, y estar listo/a para avanzar a
              frameworks como React con una base sólida.
            </p>
          </div>
        </article>
      </section>

      {/* ÍNDICE */}
      <section className="card" id="indice" style={{ marginTop: "1rem" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <h2 style={{ marginBottom: ".25rem" }}>Índice del curso</h2>
            <p className="muted small">
              Cada módulo tendrá subtemas con <span className="inline-code">details/summary</span> y ejercicios enlazados.
            </p>
          </div>
          <a className="btn btn-ghost" href="#main">
            Volver arriba
          </a>
        </div>

        <div className="hr" />

        <div className="grid">
          {COURSE.modules.map((m) => (
            <div key={m.id} className="topic-details" role="group" aria-label={`Módulo ${m.id}`}>
              <div style={{ padding: ".95rem 1.05rem" }}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <div>
                    <p className="small muted" style={{ margin: 0 }}>
                      Módulo {m.id}
                    </p>
                    <h3 style={{ margin: ".2rem 0 .35rem" }}>{m.title}</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>

                  <div className="row">
                    <Link className="btn btn-primary" to={`/modulo/${m.id}`}>
                      Entrar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* =========================
   ENLACES RECOMENDADOS
   ========================= */}
<section className="resources-box">
  <div className="resources-box__header">
    <h3 className="resources-box__title">📌 Enlaces recomendados</h3>
    <p className="resources-box__hint">Material extra (no obligatorio, pero muy útil)</p>
  </div>

  <div className="resource-list">
    <a
      className="resource-link"
      href="https://developer.mozilla.org/es/docs/Web/JavaScript"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resource-link__icon" aria-hidden="true">📘</span>
      <div className="resource-link__content">
        <p className="resource-link__label">MDN – JavaScript (Documentación)</p>
        <p className="resource-link__desc">
          La referencia más fiable para aprender conceptos, ejemplos y métodos con rigor.
        </p>
        <div className="resource-tag-row" aria-label="Etiquetas del recurso">
          <span className="resource-tag">oficial</span>
          <span className="resource-tag">nivel: todos</span>
        </div>
      </div>
    </a>

    <a
      className="resource-link"
      href="https://javascript.info/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resource-link__icon" aria-hidden="true">🧠</span>
      <div className="resource-link__content">
        <p className="resource-link__label">JavaScript.info (curso completo)</p>
        <p className="resource-link__desc">
          Explicaciones muy claras, con ejercicios y progresión por niveles.
        </p>
        <div className="resource-tag-row" aria-label="Etiquetas del recurso">
          <span className="resource-tag">tutorial</span>
          <span className="resource-tag">práctico</span>
        </div>
      </div>
    </a>

    <a
      className="resource-link"
      href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resource-link__icon" aria-hidden="true">🌐</span>
      <div className="resource-link__content">
        <p className="resource-link__label">Fetch API (MDN)</p>
        <p className="resource-link__desc">
          Para entender peticiones a internet, promesas y asincronía con ejemplos reales.
        </p>
        <div className="resource-tag-row" aria-label="Etiquetas del recurso">
          <span className="resource-tag">asincronía</span>
          <span className="resource-tag">red</span>
        </div>
      </div>
    </a>
       <a
      className="resource-link"
      href="https://www.w3schools.com/js/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resource-link__icon" aria-hidden="true">🌐</span>
      <div className="resource-link__content">
        <p className="resource-link__label">W3Schools – JavaScript</p>
        <p className="resource-link__desc">
          Tutorial interactivo con ejemplos prácticos y ejercicios para practicar.
        </p>
        <div className="resource-tag-row" aria-label="Etiquetas del recurso">
          <span className="resource-tag">tutorial</span>
          <span className="resource-tag">recurso</span>
        </div>
      </div>
    </a>
  </div>

  <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
    <p className="callout__title">Cómo usar estos enlaces (sin agobios)</p>
    <p className="muted">
      Elige <strong>1</strong> recurso y úsalo 10 minutos al día. No intentes leerlo todo: ve a lo que necesitas
      cuando te salga una duda.
    </p>
  </div>
</section>

     
    </main>
  );
}

