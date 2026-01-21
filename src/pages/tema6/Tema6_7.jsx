// src/pages/tema6/Tema6_7.jsx
export default function Tema6_7() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.7</span>
          <h1>JSON y serialización: stringify() y parse()</h1>
          <p className="muted">
            En este tema aprenderás a trabajar con <strong>JSON</strong>, un formato clave
            para comunicar datos en JavaScript. Verás cómo convertir objetos en texto
            y volver a recuperarlos usando <code>JSON.stringify()</code> y
            <code>JSON.parse()</code>.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: JSON, stringify y parse</h2>
    <p className="muted">
      Aquí entenderás qué es JSON y cómo convertir objetos en texto y de vuelta
      a objetos con stringify y parse.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/t7j5O8JfIWU"
        title="JSON en JavaScript"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          QUÉ ES JSON
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es JSON?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📄</span> Un formato para intercambiar datos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <strong>JSON</strong> significa <em>JavaScript Object Notation</em>.
              Es un formato de texto usado para <strong>guardar y enviar datos</strong>.
            </p>

            <p>
              Aunque se parece mucho a los objetos de JavaScript, JSON no es un objeto,
              es <strong>texto</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`{
  "nombre": "Ana",
  "edad": 22,
  "matriculada": true
}`}</code>
              </pre>
            </div>

            <p className="muted">
              Este formato se usa constantemente en APIs, archivos y almacenamiento local.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          JSON VS OBJETO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>JSON vs objeto de JavaScript</h2>
          <span className="topic-section__meta">comparacion</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> Parecidos, pero no iguales
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>JSON es <strong>texto</strong>, un objeto es una estructura de datos.</li>
              <li>En JSON, las claves van siempre entre comillas dobles.</li>
              <li>JSON no permite funciones ni métodos.</li>
              <li>JSON se usa para comunicar y guardar datos.</li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`// Objeto JS
let alumno = {
  nombre: "Ana",
  saludar: function () {
    return "Hola";
  }
};

// JSON (no permite funciones)
{
  "nombre": "Ana"
}`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          JSON.STRINGIFY
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) JSON.stringify()</h2>
          <span className="topic-section__meta">stringify</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">➡️</span> De objeto a texto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>JSON.stringify()</code> convierte un objeto de JavaScript
              en una <strong>cadena de texto JSON</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  matriculada: true
};

let alumnoJSON = JSON.stringify(alumno);
console.log(alumnoJSON);`}</code>
              </pre>
            </div>

            <p className="muted">
              Ahora <code>alumnoJSON</code> es texto, no un objeto.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          JSON.PARSE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) JSON.parse()</h2>
          <span className="topic-section__meta">parse</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⬅️</span> De texto a objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>JSON.parse()</code> hace justo lo contrario:
              convierte texto JSON en un <strong>objeto de JavaScript</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let textoJSON = '{"nombre":"Ana","edad":22}';

let alumno = JSON.parse(textoJSON);
console.log(alumno.nombre); // "Ana"`}</code>
              </pre>
            </div>

            <p className="muted">
              Si el texto no es un JSON válido, <code>JSON.parse()</code> dará error.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CASOS TÍPICOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Casos típicos de uso de JSON</h2>
          <span className="topic-section__meta">usos</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🌍</span> Donde lo usarás en la vida real
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Enviar y recibir datos desde APIs.</li>
              <li>Guardar datos en <code>localStorage</code>.</li>
              <li>Leer archivos de configuración.</li>
              <li>Comunicación entre frontend y backend.</li>
            </ul>

            <p className="muted">
              En proyectos reales, JSON está en todas partes.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio práctico</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✏️</span> De objeto a JSON y vuelta
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Partimos de este objeto:</p>

            <div className="code-example">
              <pre>
                <code>{`let usuario = {
  nombre: "Inma",
  edad: 30,
  ciudad: "Sevilla"
};`}</code>
              </pre>
            </div>

            <ol>
              <li>Convierte el objeto a JSON con <code>JSON.stringify()</code>.</li>
              <li>Muestra el resultado por consola.</li>
              <li>Vuelve a convertir el JSON en objeto con <code>JSON.parse()</code>.</li>
              <li>Accede a la propiedad <code>ciudad</code> del nuevo objeto.</li>
            </ol>

            <div className="divider" />

            <p className="muted">Plantilla de ayuda:</p>

            <div className="code-example">
              <pre>
                <code>{`let usuarioJSON = JSON.stringify(usuario);

// console.log(usuarioJSON);

let usuarioRecuperado = JSON.parse(usuarioJSON);

// console.log(usuarioRecuperado.ciudad);`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del Tema 6.7</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Qué debes tener claro
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>JSON es texto, no un objeto.</li>
              <li><code>JSON.stringify()</code> convierte objetos en texto.</li>
              <li><code>JSON.parse()</code> convierte texto en objetos.</li>
              <li>JSON se usa para comunicar y guardar datos.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás cómo funciona la
              <strong> herencia en JavaScript</strong> sin complicaciones.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
