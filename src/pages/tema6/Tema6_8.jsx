// src/pages/tema6/Tema6_8.jsx
export default function Tema6_8() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.8</span>
          <h1>Prototipos sin drama: prototype, [[Prototype]] y herencia</h1>
          <p className="muted">
            JavaScript tiene herencia, pero no funciona como en otros lenguajes.
            En este tema aprenderás <strong>qué es un prototipo</strong>, cómo funciona
            la cadena de prototipos y por qué no necesitas memorizar teoría para entenderlo.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Prototipos sin drama</h2>
    <p className="muted">
      Este vídeo explica cómo funciona la herencia en JavaScript
      de forma visual y sencilla.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/nS5FmAx4u_0"
        title="Prototipos en JavaScript"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          IDEA CLAVE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>La idea clave de los prototipos</h2>
          <span className="topic-section__meta">idea</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Objetos que aprenden de otros objetos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              En JavaScript, los objetos pueden <strong>heredar propiedades y métodos</strong>
              de otros objetos.
            </p>

            <p>
              Esto se hace mediante una relación interna llamada <strong>prototipo</strong>.
              Cuando un objeto no tiene algo, JavaScript lo busca en su prototipo.
            </p>

            <p className="muted">
              No pienses en “clases” todavía. Piensa en <strong>copiar comportamientos</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          [[PROTOTYPE]]
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es [[Prototype]]?</h2>
          <span className="topic-section__meta">prototype-interno</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔗</span> El “padre” oculto de un objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Todo objeto en JavaScript tiene una referencia interna llamada
              <code> [[Prototype]]</code>.
            </p>

            <p>
              Esa referencia apunta a otro objeto del que puede heredar propiedades y métodos.
            </p>

            <p className="muted">
              No accedemos directamente a <code>[[Prototype]]</code>. Es un mecanismo interno.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          EJEMPLO SIMPLE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Ejemplo sencillo de herencia</h2>
          <span className="topic-section__meta">ejemplo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📦</span> Buscar primero aquí, luego arriba
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Observa este ejemplo:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let persona = {
  saludar() {
    return "Hola";
  }
};

let alumno = {
  nombre: "Ana"
};

Object.setPrototypeOf(alumno, persona);

console.log(alumno.saludar()); // "Hola"`}</code>
              </pre>
            </div>

            <p className="muted">
              <code>alumno</code> no tiene <code>saludar</code>, pero JavaScript lo busca
              en su prototipo (<code>persona</code>).
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          prototype
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es prototype?</h2>
          <span className="topic-section__meta">prototype</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧬</span> Prototype NO es lo mismo que [[Prototype]]
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>prototype</code> es una propiedad que tienen las <strong>funciones constructoras</strong>.
            </p>

            <p>
              Se usa para definir qué van a heredar los objetos creados con <code>new</code>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`function Alumno(nombre) {
  this.nombre = nombre;
}

Alumno.prototype.saludar = function () {
  return "Hola, soy " + this.nombre;
};

let a1 = new Alumno("Ana");
console.log(a1.saludar());`}</code>
              </pre>
            </div>

            <p className="muted">
              No te preocupes si ahora esto parece raro. En el siguiente tema verás
              las <strong>clases</strong>, que usan este sistema por debajo.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CADENA DE PROTOTIPOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>La cadena de prototipos</h2>
          <span className="topic-section__meta">cadena</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">⛓️</span> Buscar hacia arriba
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cuando accedes a una propiedad, JavaScript busca:
            </p>

            <ol>
              <li>En el propio objeto.</li>
              <li>En su prototipo.</li>
              <li>En el prototipo del prototipo.</li>
              <li>Hasta llegar a <code>null</code>.</li>
            </ol>

            <p className="muted">
              Esto se llama <strong>cadena de prototipos</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CUÁNDO IMPORTA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Cuándo te importa saber esto?</h2>
          <span className="topic-section__meta">cuando</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Casos reales
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Cuando usas clases (tema siguiente).</li>
              <li>Cuando un método “aparece” y no sabes de dónde viene.</li>
              <li>Cuando lees código de otras personas.</li>
            </ul>

            <p className="muted">
              No necesitas escribir prototipos a mano todos los días,
              pero sí entender cómo funcionan.
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
              <span className="badge">✏️</span> ¿De dónde sale este método?
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Observa este código:</p>

            <div className="code-example">
              <pre>
                <code>{`let animal = {
  comer() {
    return "Comiendo";
  }
};

let perro = {
  nombre: "Toby"
};

Object.setPrototypeOf(perro, animal);

console.log(perro.comer());`}</code>
              </pre>
            </div>

            <ol>
              <li>¿Tiene <code>perro</code> el método <code>comer</code>?</li>
              <li>¿De dónde lo obtiene?</li>
              <li>¿Qué pasaría si <code>animal</code> no tuviera ese método?</li>
            </ol>

            <p className="muted">
              No escribas más código: piensa el recorrido que hace JavaScript.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del Tema 6.8</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Qué debes entender
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Los objetos pueden heredar de otros objetos.</li>
              <li><code>[[Prototype]]</code> es una referencia interna.</li>
              <li><code>prototype</code> se usa con funciones constructoras.</li>
              <li>JavaScript busca propiedades siguiendo la cadena de prototipos.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a usar <strong>clases (ES6)</strong>,
              que hacen todo esto mucho más fácil de leer.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
