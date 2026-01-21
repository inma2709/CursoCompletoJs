// src/pages/tema6/Tema6_6.jsx
export default function Tema6_6() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.6</span>
          <h1>Copias en objetos: referencia vs clon</h1>
          <p className="muted">
            Este es uno de los temas más importantes (y más traicioneros) de JavaScript.
            Aquí aprenderás la diferencia entre <strong>copiar por referencia</strong> y
            <strong> clonar un objeto</strong>, y cómo evitar errores muy comunes.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Referencia vs copia</h2>
    <p className="muted">
      Este vídeo explica uno de los errores más importantes en JavaScript:
      copiar un objeto no siempre crea un objeto nuevo.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/4R6pP4R4jts"
        title="Referencia vs copia"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          COPIA POR REFERENCIA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) Qué es copiar por referencia</h2>
          <span className="topic-section__meta">referencia</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> El error más común con objetos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cuando copias un objeto en JavaScript usando <code>=</code>,
              <strong> NO se crea un objeto nuevo</strong>.
              Lo que se copia es la <strong>referencia</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = {
  nombre: "Ana",
  edad: 22
};

let alumno2 = alumno1;

alumno2.edad = 23;

console.log(alumno1.edad); // 23 😱`}</code>
              </pre>
            </div>

            <p className="muted">
              Aunque parezca que hay dos objetos, en realidad ambos apuntan
              <strong> al mismo objeto en memoria</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          VISIÓN MENTAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Cómo entenderlo mentalmente</h2>
          <span className="topic-section__meta">mental</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Dos etiquetas, una sola caja
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Piensa en el objeto como una <strong>caja</strong> y en las variables
              como <strong>etiquetas</strong>.
            </p>

            <ul>
              <li><code>alumno1</code> → apunta a la caja</li>
              <li><code>alumno2</code> → apunta a la misma caja</li>
            </ul>

            <p className="muted">
              Cambiar la caja desde una etiqueta afecta a la otra.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CLONAR OBJETOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) Cómo clonar un objeto correctamente</h2>
          <span className="topic-section__meta">clonar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Crear un objeto nuevo e independiente
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para evitar el problema anterior, necesitas crear un
              <strong> clon</strong>, es decir, un objeto nuevo con los mismos datos.
            </p>

            <h4>🔹 Opción 1: Spread operator</h4>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = { nombre: "Ana", edad: 22 };
let alumno2 = { ...alumno1 };

alumno2.edad = 23;

console.log(alumno1.edad); // 22 ✅`}</code>
              </pre>
            </div>

            <p className="muted">
              Esta es la forma más usada para clonar objetos simples.
            </p>

            <h4>🔹 Opción 2: Object.assign()</h4>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = { nombre: "Ana", edad: 22 };
let alumno2 = Object.assign({}, alumno1);

alumno2.edad = 23;

console.log(alumno1.edad); // 22 ✅`}</code>
              </pre>
            </div>

            <p className="muted">
              Hace lo mismo que el spread, pero con sintaxis más antigua.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          COPIAS SUPERFICIALES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>⚠️ Copias superficiales (detalle importante)</h2>
          <span className="topic-section__meta">shallow</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🚨</span> Ojo con objetos dentro de objetos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Tanto el spread como <code>Object.assign()</code> hacen
              <strong> copias superficiales</strong>.
            </p>

            <p>
              Eso significa que si el objeto tiene otro objeto dentro,
              <strong> ese objeto interno sigue siendo compartido</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = {
  nombre: "Ana",
  direccion: { ciudad: "Sevilla" }
};

let alumno2 = { ...alumno1 };

alumno2.direccion.ciudad = "Córdoba";

console.log(alumno1.direccion.ciudad); // "Córdoba" 😬`}</code>
              </pre>
            </div>

            <p className="muted">
              Tranquila/o: esto lo entenderás mejor con la práctica. De momento,
              quédate con la idea de que <strong>no siempre es una copia total</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          STRUCTUREDCLONE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) structuredClone(): copia profunda</h2>
          <span className="topic-section__meta">deep</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧬</span> Copiar todo de verdad
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>structuredClone()</code> crea una <strong>copia profunda</strong>:
              clona también los objetos internos.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = {
  nombre: "Ana",
  direccion: { ciudad: "Sevilla" }
};

let alumno2 = structuredClone(alumno1);

alumno2.direccion.ciudad = "Córdoba";

console.log(alumno1.direccion.ciudad); // "Sevilla" ✅`}</code>
              </pre>
            </div>

            <p className="muted">
              Es la opción más segura cuando trabajas con objetos complejos.
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
              <span className="badge">✏️</span> Referencia o clon
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Partimos de este objeto:</p>

            <div className="code-example">
              <pre>
                <code>{`let curso1 = {
  titulo: "JavaScript",
  nivel: "Inicial",
  profesor: { nombre: "Inma" }
};`}</code>
              </pre>
            </div>

            <ol>
              <li>Copia el objeto usando <code>=</code> y cambia el nivel.</li>
              <li>Cópialo usando <strong>spread</strong> y cambia el nivel.</li>
              <li>Cambia el nombre del profesor en ambos casos.</li>
              <li>Repite el ejercicio usando <code>structuredClone()</code>.</li>
            </ol>

            <p className="muted">
              Observa en qué casos se modifica el objeto original y en cuáles no.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del Tema 6.6</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Ideas clave
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Copiar con <code>=</code> copia la referencia, no el objeto.</li>
              <li>Spread y <code>Object.assign()</code> crean clones superficiales.</li>
              <li>Los objetos internos siguen compartidos en copias superficiales.</li>
              <li><code>structuredClone()</code> crea una copia profunda.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a trabajar con <strong>JSON</strong>
              y la serialización de objetos.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
