export default function M5() {
  return (
    <article className="wrap">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <span className="badge">M5</span>
        <h1>Estructuras de control</h1>
        <p className="muted">
          Aprendemos a <strong>controlar el flujo de ejecución</strong> de un programa:
          tomar decisiones, repetir acciones y alterar el recorrido del código.
        </p>
      </header>

      {/* =========================
          ¿QUÉ SON LAS ESTRUCTURAS DE CONTROL?
      ========================= */}
      <section className="card">
        <h2>¿Qué son las estructuras de control?</h2>

        <p>
          Hasta ahora, JavaScript ejecutaba el código <strong>línea a línea</strong>,
          de arriba abajo y de izquierda a derecha. Sin embargo, los programas reales necesitan{" "}
          <strong>decidir</strong>, <strong>repetir</strong> acciones y{" "}
          <strong>responder</strong> a distintas situaciones.
        </p>

        <p>
          Las <strong>estructuras de control</strong> permiten modificar el flujo normal
          de ejecución de un programa para que el código:
        </p>

        <ul>
          <li>Se ejecute solo si se cumple una condición.</li>
          <li>Se repita varias veces mientras algo sea verdadero.</li>
          <li>Se interrumpa o redirija cuando sea necesario.</li>
        </ul>

        <div className="callout callout--tip">
          <strong>Idea clave:</strong> gracias a las estructuras de control,
          el programa deja de ser “automático” y empieza a ser <em>inteligente</em>.Es la forma que tenemos de decidir qué hace el programa en cada momento.

        </div>
      </section>

      {/* =========================
          IMAGEN / ESQUEMA VISUAL
      ========================= */}
      <section className="card">
        <h2>El control del flujo en JavaScript</h2>

        <figure className="media">
          {/* Sustituir src cuando se añada la imagen real */}
          <img
            src="/m5.png"
            alt="Esquema de las estructuras de control en JavaScript"
          />
          <figcaption className="muted">
            Esquema general de las estructuras de control: condicionales,
            bucles y saltos.
          </figcaption>
        </figure>
      </section>

   {/* =========================
    VÍDEO INTRODUCTORIO (ÚNICO)
   ========================= */}
<section className="card video-block video-block--single">
  <div className="video-title">¿Qué es el control de flujo?</div>
  <p className="video-meta muted">Introducción visual a las estructuras de control</p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="Introducción a las estructuras de control"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>

{/* =========================
    TIPOS DE ESTRUCTURAS
   ========================= */}
<section className="card">
  <h2>Tipos de estructuras de control</h2>

  <p>
    En JavaScript, el control del flujo se organiza en <strong>tres grandes bloques</strong>:
  </p>

  <ul>
    <li>
      <strong>Condicionales</strong>: permiten ejecutar código solo si se cumple una condición.
    </li>
    <li>
      <strong>Bucles</strong>: repiten una acción varias veces de forma controlada.
    </li>
    <li>
      <strong>Saltos</strong>: alteran o interrumpen el flujo normal del programa.
    </li>
  </ul>

  <div className="callout callout--warning">
    No son conceptos aislados: en la práctica se combinan continuamente para resolver problemas reales.
  </div>
</section>

{/* =========================
    ENLACES DE LOS TEMAS (MEJOR VISUAL)
   ========================= */}
<section className="topic-section links-section">
  <div className="topic-section__title">
    <h2>Contenidos del módulo</h2>
    <span className="topic-section__meta">Rutas de aprendizaje</span>
  </div>

  <div className="links-box">
    <h3 className="links-box__title">📌 Pasa a cada bloque en profundidad</h3>

    <ul className="links-list">
      <li className="links-item">
        <a href="/5.1">M5.1 · Condicionales</a>
        <p className="links-desc">
          Aprende a tomar decisiones en tu código: <code>if</code>, <code>else</code>,{" "}
          <code>else if</code> y <code>switch</code>.
        </p>
      </li>

      <li className="links-item">
        <a href="/5.2">M5.2 · Bucles</a>
        <p className="links-desc">
          Repite acciones sin duplicar código: <code>while</code>, <code>do...while</code>,{" "}
          <code>for</code> y recorridos con <code>for...of</code>.
        </p>
      </li>

      <li className="links-item">
        <a href="/5.3">M5.3 · Saltos y control del flujo</a>
        <p className="links-desc">
          Control fino del programa: <code>break</code>, <code>continue</code>,{" "}
          <code>return</code> y manejo de errores con <code>try/catch</code>.
        </p>
      </li>
    </ul>
  </div>
</section>

{/* =========================
    ENLACES RELACIONADOS (DOCUMENTACIÓN)
   ========================= */}
<section className="topic-section links-section">
  <div className="topic-section__title">
    <h2>Enlaces relacionados</h2>
    <span className="topic-section__meta">Documentación y referencias</span>
  </div>

  <div className="links-box">
    <h3 className="links-box__title">📎 Recursos para ampliar la documentación</h3>

    <ul className="links-list">
      <li className="links-item">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN · Control del flujo y manejo de errores
        </a>
        <p className="links-desc">
          Guía oficial con condicionales, bucles y gestión de errores. Muy útil para repasar
          conceptos con ejemplos.
        </p>
      </li>

      <li className="links-item">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN · if...else
        </a>
        <p className="links-desc">
          Referencia oficial de la estructura condicional <code>if</code>.
        </p>
      </li>

      <li className="links-item">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN · for
        </a>
        <p className="links-desc">
          Sintaxis, ejemplos y buenas prácticas del bucle <code>for</code>.
        </p>
      </li>

      <li className="links-item">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN · switch
        </a>
        <p className="links-desc">
          Alternativa a múltiples <code>else if</code> cuando comparas valores concretos.
        </p>
      </li>

      <li className="links-item">
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN · try...catch
        </a>
        <p className="links-desc">
          Manejo de errores para evitar que tu aplicación se rompa cuando algo falla.
        </p>
      </li>
    </ul>
  </div>
</section>

    </article>
  );
}
