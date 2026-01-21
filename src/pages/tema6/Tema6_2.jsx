// src/pages/tema6/Tema6_2.jsx
export default function Tema6_2() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.2</span>
          <h1>Vocabulario clave de los objetos</h1>
          <p className="muted">
            Antes de aprender a usar objetos en profundidad, necesitamos dominar
            tres palabras clave que vas a ver constantemente en JavaScript:
            <strong> propiedad</strong>, <strong>método</strong> e <strong>instancia</strong>.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Propiedades y métodos</h2>
    <p className="muted">
      En este vídeo se explican de forma clara las propiedades y los métodos,
      vocabulario esencial para trabajar con objetos.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/aoQRQj74Y-k"
        title="Propiedades y métodos en JS"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          PROPIEDAD
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es una propiedad?</h2>
          <span className="topic-section__meta">propiedad</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🏷️</span> Datos dentro de un objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una <strong>propiedad</strong> es una característica o dato que pertenece
              a un objeto.
            </p>

            <p>
              En otras palabras: una propiedad es una <strong>clave con un valor</strong>
              dentro de un objeto.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  matriculada: true
};`}</code>
              </pre>
            </div>

            <ul>
              <li><code>nombre</code> es una propiedad</li>
              <li><code>edad</code> es una propiedad</li>
              <li><code>matriculada</code> es una propiedad</li>
            </ul>

            <p className="muted">
              Las propiedades describen <strong>cómo es</strong> un objeto.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MÉTODO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es un método?</h2>
          <span className="topic-section__meta">metodo</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⚙️</span> Acciones que puede hacer un objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>método</strong> es una función que está dentro de un objeto.
            </p>

            <p>
              Si las propiedades describen <em>cómo es</em> un objeto,
              los métodos describen <strong>qué puede hacer</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  saludar: function () {
    return "Hola, soy Ana";
  }
};`}</code>
              </pre>
            </div>

            <ul>
              <li><code>saludar</code> es un método</li>
              <li>Es una función asociada al objeto</li>
            </ul>

            <p className="muted">
              Más adelante aprenderás una forma más corta de escribir métodos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          INSTANCIA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es una instancia?</h2>
          <span className="topic-section__meta">instancia</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Un objeto concreto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una <strong>instancia</strong> es un objeto concreto creado a partir
              de un modelo.
            </p>

            <p>
              Aunque todavía no hemos visto clases, la idea es sencilla:
              cada objeto que creas es una instancia.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = {
  nombre: "Ana",
  edad: 22
};

let alumno2 = {
  nombre: "Luis",
  edad: 25
};`}</code>
              </pre>
            </div>

            <p className="muted">
              <code>alumno1</code> y <code>alumno2</code> son instancias distintas,
              aunque representen el mismo tipo de cosa.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MINI EJERCICIO PRÁCTICO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧪 Mini ejercicio práctico</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✏️</span> Identifica propiedades y métodos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Observa el siguiente objeto y responde:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar: function () {
    return "El coche está en marcha";
  }
};`}</code>
              </pre>
            </div>

            <ol>
              <li>¿Qué propiedades tiene el objeto?</li>
              <li>¿Qué método tiene?</li>
              <li>¿Este objeto es una instancia?</li>
            </ol>

            <p className="muted">
              No escribas código todavía.  
              El objetivo es <strong>reconocer los conceptos</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del vocabulario clave</h2>
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
              <li>Una <strong>propiedad</strong> es un dato de un objeto.</li>
              <li>Un <strong>método</strong> es una función dentro de un objeto.</li>
              <li>Una <strong>instancia</strong> es un objeto concreto.</li>
              <li>Los objetos combinan datos y acciones.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a <strong>crear objetos de distintas formas</strong>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
