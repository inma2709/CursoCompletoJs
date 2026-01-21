// src/pages/tema6/Tema6_9.jsx
export default function Tema6_9() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.9</span>
          <h1>Clases (ES6): constructor, métodos y this</h1>
          <p className="muted">
            En este tema aprenderás a usar <strong>clases</strong> en JavaScript.
            Las clases son una forma más clara y ordenada de trabajar con objetos
            y están construidas sobre el sistema de <strong>prototipos</strong>
            que ya conoces.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Clases en JavaScript</h2>
    <p className="muted">
      Aprende a crear clases, usar el constructor y definir métodos
      de forma clara y ordenada.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/M0FfjG4mhZg"
        title="Clases en JavaScript"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          QUÉ ES UNA CLASE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es una clase?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🏗️</span> Un molde para crear objetos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una <strong>clase</strong> es un molde que define cómo serán los objetos
              que se creen a partir de ella.
            </p>

            <p>
              Cada objeto creado con una clase se llama <strong>instancia</strong>.
            </p>

            <p className="muted">
              Las clases no sustituyen a los objetos: <strong>los organizan mejor</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          SINTAXIS BÁSICA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Sintaxis básica de una clase</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> La estructura mínima
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}`}</code>
              </pre>
            </div>

            <ul>
              <li><code>class</code>: palabra clave para crear la clase.</li>
              <li><code>constructor</code>: se ejecuta al crear el objeto.</li>
              <li><code>this</code>: hace referencia al objeto que se está creando.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          THIS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es this?</h2>
          <span className="topic-section__meta">this</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">👉</span> El objeto actual
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Dentro de una clase, <code>this</code> hace referencia
              al <strong>objeto que se está creando</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno1 = new Alumno("Ana", 22);
let alumno2 = new Alumno("Luis", 25);`}</code>
              </pre>
            </div>

            <p className="muted">
              <code>this.nombre</code> será distinto en cada instancia.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          MÉTODOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Métodos en una clase</h2>
          <span className="topic-section__meta">metodos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚙️</span> Acciones que puede hacer el objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Los métodos son funciones que pertenecen a la clase
              y estarán disponibles en todas las instancias.
            </p>

            <div className="code-example">
              <pre>
                <code>{`class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return "Hola, soy " + this.nombre;
  }
}

let alumno = new Alumno("Ana", 22);
console.log(alumno.saludar());`}</code>
              </pre>
            </div>

            <p className="muted">
              Los métodos no llevan la palabra <code>function</code>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CLASE VS FUNCIÓN FÁBRICA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Clases vs funciones fábrica</h2>
          <span className="topic-section__meta">comparacion</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⚖️</span> Dos caminos, mismo objetivo
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Ambas crean objetos.</li>
              <li>Las clases son más claras cuando hay muchos métodos.</li>
              <li>Las funciones fábrica son más simples para casos pequeños.</li>
            </ul>

            <p className="muted">
              En proyectos grandes, las clases ayudan a mantener el código ordenado.
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
              <span className="badge">✏️</span> Crea tu primera clase
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea una clase llamada <code>Producto</code> con:
            </p>

            <ul>
              <li>Un <code>constructor</code> que reciba <code>nombre</code> y <code>precio</code>.</li>
              <li>Un método <code>mostrarInfo()</code> que devuelva un texto con los datos.</li>
            </ul>

            <div className="divider" />

            <p className="muted">Plantilla de ayuda:</p>

            <div className="code-example">
              <pre>
                <code>{`class Producto {
  constructor(nombre, precio) {
    // ...
  }

  mostrarInfo() {
    // ...
  }
}

let p1 = new Producto("Camiseta", 19.99);
console.log(p1.mostrarInfo());`}</code>
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
          <h2>Resumen del Tema 6.9</h2>
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
              <li>Las clases son moldes para crear objetos.</li>
              <li><code>constructor</code> inicializa los datos.</li>
              <li><code>this</code> hace referencia a la instancia actual.</li>
              <li>Los métodos definen el comportamiento del objeto.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a usar
              <strong> getters y setters</strong> para controlar los datos.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
