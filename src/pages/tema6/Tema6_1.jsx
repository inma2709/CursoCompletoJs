// src/pages/tema6/Tema6_1.jsx
export default function Tema6_1() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.1</span>
          <h1>Introducción a los objetos en JavaScript</h1>
          <p className="muted">
            Hasta ahora has trabajado con variables, arrays y funciones. En este tema
            damos un paso muy importante: aprender a <strong>agrupar información relacionada</strong>
            usando objetos.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Objetos vs Arrays</h2>
    <p className="muted">
      Este vídeo refuerza la diferencia clave entre arrays y objetos y cuándo
      debes usar cada uno.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/5DaZXXbHI_U"
        title="Objetos vs Arrays"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          ¿POR QUÉ EXISTEN LOS OBJETOS?
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Por qué existen los objetos?</h2>
          <span className="topic-section__meta">fundamentos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> El problema de tener demasiadas variables sueltas
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Imagina que quieres guardar información de una persona:
              su nombre, su edad y si está matriculada en un curso.
            </p>

            <p>
              Sin objetos, podrías hacerlo así:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let nombre = "Ana";
let edad = 28;
let matriculada = true;`}</code>
              </pre>
            </div>

            <p className="muted">
              Funciona, sí. Pero… ¿y si tienes 20 personas? ¿Y si quieres pasar toda esa
              información junta a una función?
            </p>

            <p>
              Aquí es donde entran en juego los <strong>objetos</strong>: permiten
              agrupar datos que pertenecen a una misma “cosa”.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ¿QUÉ ES UN OBJETO?
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es un objeto en JavaScript?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">📦</span> Un objeto explicado sin tecnicismos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>objeto</strong> es una estructura que guarda información en forma
              de <strong>pares clave–valor</strong>.
            </p>

            <p>
              Piensa en un objeto como una <strong>ficha</strong> o una <strong>tarjeta</strong>
              donde cada dato tiene un nombre claro.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let persona = {
  nombre: "Ana",
  edad: 28,
  matriculada: true
};`}</code>
              </pre>
            </div>

            <p className="muted">
              No te preocupes ahora por cómo se usa. De momento, quédate con la idea:
              <strong>un objeto representa algo real</strong> con sus características.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          OBJETOS VS ARRAYS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Objetos vs Arrays: no son lo mismo</h2>
          <span className="topic-section__meta">comparacion</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> Diferencia clave que debes tener clara
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Es muy común confundir objetos y arrays porque <strong>ambos usan llaves o corchetes</strong>,
              pero sirven para cosas distintas.
            </p>

            <ul>
              <li>
                <strong>Array</strong>: se usa para listas ordenadas de elementos.
              </li>
              <li>
                <strong>Objeto</strong>: se usa para representar una cosa con propiedades.
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`// Array: lista de valores
let colores = ["rojo", "verde", "azul"];

// Objeto: información con significado
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  puertas: 5
};`}</code>
              </pre>
            </div>

            <p className="muted">
              Regla mental sencilla:
            </p>

            <ul>
              <li>👉 Si importa el orden → usa un array</li>
              <li>👉 Si importa qué representa cada dato → usa un objeto</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          PRIMER VISTAZO A LA SINTAXIS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Primer vistazo a la forma de un objeto</h2>
          <span className="topic-section__meta">sintaxis</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">👀</span> Solo entender la forma, no memorizar
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Todos los objetos siguen esta estructura básica:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let objeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3
};`}</code>
              </pre>
            </div>

            <p className="muted">
              Cada <strong>clave</strong> describe qué es el dato.
              Más adelante aprenderás a leerlos, modificarlos y recorrerlos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ERRORES TÍPICOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Errores típicos al empezar con objetos</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">❌</span> Cosas normales que no debes hacer
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Pensar que un objeto es “otro tipo de array”.</li>
              <li>Usar números como claves sin sentido.</li>
              <li>Creer que el orden de las propiedades es lo importante.</li>
            </ul>

            <p className="muted">
              Tranquila/o: estos errores son normales. Justo por eso vamos paso a paso.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Qué debes llevarte de esta introducción</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Ideas clave
            </span>
            <span className="chev">⌄</span>
          </summary>
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
        <span className="badge">✏️</span> ¿Array u objeto?
      </span>
      <span className="chev">⌄</span>
    </summary>

    <div className="topic-details__content">
      <p>
        Observa los siguientes ejemplos y piensa <strong>qué estructura usarías en cada caso</strong>:
        un <strong>array</strong> o un <strong>objeto</strong>.
      </p>

      <ol>
        <li>Una lista de colores disponibles en una tienda.</li>
        <li>La información de una persona (nombre, edad, email).</li>
        <li>Los nombres de los alumnos de una clase.</li>
        <li>Los datos de un curso (título, duración, nivel).</li>
      </ol>

      <p className="muted">
        Antes de ver el código, intenta responder mentalmente:
        ¿importa el orden o importa el significado de cada dato?
      </p>

      <div className="divider" />

      <p>
        Ahora observa estos ejemplos y comprueba si coinciden con tu razonamiento:
      </p>

      <div className="code-example">
        <pre>
          <code>{`// Array: lista ordenada
let alumnos = ["Ana", "Luis", "María", "Carlos"];

// Objeto: información con significado
let curso = {
  titulo: "JavaScript desde cero",
  duracion: "120 horas",
  nivel: "Inicial"
};`}</code>
        </pre>
      </div>

      <p className="muted">
        No tienes que memorizar nada aún.  
        El objetivo de este ejercicio es <strong>pensar bien la estructura</strong>
        antes de escribir código.
      </p>
    </div>
  </details>
</section>


          <div className="topic-details__content">
            <ul>
              <li>Los objetos sirven para agrupar información relacionada.</li>
              <li>Un objeto representa una “cosa” con propiedades.</li>
              <li>Los arrays son listas; los objetos describen.</li>
              <li>No es importante memorizar sintaxis aún, sino entender la idea.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás el vocabulario clave para empezar a
              trabajar con objetos de verdad.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
