export default function Tema10() {
  return (
    <article className="topic">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M10</span>
          <h1>Tema 10 · Pensar en JavaScript (patrones reales)</h1>
          <p className="muted">
            Hasta ahora has aprendido <strong>sintaxis</strong>, <strong>estructuras</strong> y
            <strong> herramientas</strong>.  
            En este tema vamos a dar el salto más importante:  
            <strong>usar JavaScript como lo haría un desarrollador real</strong>.
          </p>
        </div>
      </header>

      {/* =========================
          INTRODUCCIÓN
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Por qué este tema es clave?</h2>
          <span className="topic-section__meta">intro</span>
        </div>

        <p>
          Aprender JavaScript no consiste solo en saber qué hace{" "}
          <code>map</code>, <code>addEventListener</code> o <code>innerHTML</code>.  
          Lo importante es saber:
        </p>

        <ul>
          <li>🧠 <strong>Cuándo</strong> usar cada cosa</li>
          <li>🧩 <strong>Cómo</strong> organizar el código</li>
          <li>🔁 <strong>Cómo pensar</strong> una solución antes de escribirla</li>
          <li>📐 <strong>Cómo evitar errores típicos</strong></li>
        </ul>

        <p className="muted">
          Este tema une todo lo anterior y te enseña a trabajar con
          <strong> lógica clara, código legible y estructura mental</strong>.
        </p>
      </section>

      <div className="divider" />

      {/* =========================
          QUÉ VAS A APRENDER
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Qué vas a aprender en el Tema 10</h2>
          <span className="topic-section__meta">objetivos</span>
        </div>

        <ul>
          <li>
            🔍 Analizar un problema antes de programar
          </li>
          <li>
            🧱 Separar <strong>datos</strong>, <strong>lógica</strong> y <strong>DOM</strong>
          </li>
          <li>
            🔄 Reutilizar funciones en vez de duplicar código
          </li>
          <li>
            ⚠️ Detectar y evitar errores comunes
          </li>
          <li>
            🧪 Construir mini-apps completas paso a paso
          </li>
        </ul>
      </section>

      <div className="divider" />

      {/* =========================
          CÓMO TRABAJAREMOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Cómo vamos a trabajar</h2>
          <span className="topic-section__meta">metodología</span>
        </div>

        <ol>
          <li>📝 Planteamos un problema real</li>
          <li>🧠 Pensamos la solución en lenguaje natural</li>
          <li>📦 Definimos datos (arrays / objetos)</li>
          <li>⚙️ Creamos funciones pequeñas y claras</li>
          <li>🖱️ Conectamos con el DOM</li>
          <li>✨ Mejoramos el resultado</li>
        </ol>

        <p className="muted">
          No es memorizar.  
          Es <strong>entender el flujo mental</strong> de JavaScript.
        </p>
      </section>

      <div className="divider" />

      {/* =========================
          ADELANTO DE SECCIONES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Contenido del Tema 10</h2>
          <span className="topic-section__meta">secciones</span>
        </div>

        <ul>
          <li><strong>10.1</strong> · Pensar antes de programar</li>
          <li><strong>10.2</strong> · Datos vs lógica vs DOM</li>
          <li><strong>10.3</strong> · Patrones comunes en ejercicios reales</li>
          <li><strong>10.4</strong> · Errores típicos (y cómo evitarlos)</li>
          <li><strong>10.5</strong> · Mini-apps guiadas</li>
          <li><strong>10.6</strong> · Retos finales</li>
        </ul>
      </section>

      <div className="divider" />

      {/* =========================
          MENSAJE FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Antes de empezar…</h2>
          <span className="topic-section__meta">mensaje</span>
        </div>

        <p>
          Si has llegado hasta aquí, ya no eres principiante.
        </p>

        <p>
          Este tema no va de escribir más código,  
          sino de escribir <strong>mejor código</strong>.
        </p>

        <p className="muted">
          Vamos a convertir todo lo aprendido en criterio.
        </p>
      </section>
    </article>
  );
}
