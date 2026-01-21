// src/pages/tema6/Tema6_3.jsx
export default function Tema6_3() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.3</span>
          <h1>Crear objetos: literal, new Object y funciones fábrica</h1>
          <p className="muted">
            En JavaScript puedes crear objetos de varias formas. En este tema aprenderás
            las 3 más habituales: <strong>objeto literal</strong>, <strong>new Object()</strong> y
            <strong> funciones fábrica</strong>. La idea no es memorizar “por memorizar”, sino saber
            cuál es la más cómoda y por qué.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Crear objetos en JavaScript</h2>
    <p className="muted">
      Aquí verás distintas formas de crear objetos y entenderás cuándo
      conviene usar cada una.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/y8scyGyc3W8"
        title="Crear objetos JS"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          1) OBJETO LITERAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) Crear un objeto con notación literal</h2>
          <span className="topic-section__meta">literal</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> La forma más común (y la que usarás más)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              La forma más habitual de crear un objeto es con llaves <code>{`{}`}</code>. Es rápida,
              clara y se entiende muy bien.
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

            <p className="muted">
              Aquí estás creando un objeto con 3 propiedades. Fíjate en algo importante:
              las claves (<code>nombre</code>, <code>edad</code>…) son como “etiquetas” que describen los datos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          2) new Object()
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) Crear un objeto con new Object()</h2>
          <span className="topic-section__meta">new-object</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧰</span> Otra forma válida (pero menos usada)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              También puedes crear un objeto con <code>new Object()</code>. Esta forma existe por historia
              del lenguaje, pero en la práctica se usa menos porque es más larga.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = new Object();
alumno.nombre = "Ana";
alumno.edad = 22;
alumno.matriculada = true;`}</code>
              </pre>
            </div>

            <p className="muted">
              ¿Ves la diferencia? Con literal lo haces “de golpe”. Con <code>new Object()</code> lo creas vacío
              y luego vas añadiendo propiedades.
            </p>

            <p>
              📌 Idea clave: <strong>ambas formas crean objetos</strong>. La diferencia es el estilo y la comodidad.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          3) FUNCIONES FÁBRICA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) Crear objetos con funciones fábrica</h2>
          <span className="topic-section__meta">factory</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🏭</span> Cuando necesitas crear muchos objetos parecidos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Una <strong>función fábrica</strong> es una función que <strong>devuelve un objeto</strong>.
              Se usa cuando necesitas crear varios objetos con la misma estructura.
            </p>

            <p className="muted">
              Ejemplo: vas a crear muchos alumnos, y todos tienen <code>nombre</code> y <code>edad</code>.
              En vez de repetir el objeto a mano, creas una “fábrica”.
            </p>

            <div className="code-example">
              <pre>
                <code>{`function crearAlumno(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    matriculada: true
  };
}

let alumno1 = crearAlumno("Ana", 22);
let alumno2 = crearAlumno("Luis", 25);`}</code>
              </pre>
            </div>

            <p>
              Ahora ya tienes dos objetos distintos (dos <strong>instancias</strong>) sin repetir código.
            </p>

            <p className="muted">
              Consejo: si ves que repites el mismo objeto muchas veces cambiando solo valores, una función fábrica te ahorra tiempo.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          COMPARATIVA RÁPIDA
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Comparativa rápida: ¿cuál usar?</h2>
          <span className="topic-section__meta">comparativa</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧭</span> Regla práctica para decidir rápido
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                <strong>Literal</strong> → cuando necesitas <strong>un objeto</strong> o pocos objetos (lo más común).
              </li>
              <li>
                <strong>new Object()</strong> → forma alternativa, útil para entender el lenguaje, pero menos usada.
              </li>
              <li>
                <strong>Función fábrica</strong> → cuando necesitas <strong>muchos objetos parecidos</strong>.
              </li>
            </ul>

            <p className="muted">
              En este curso, lo normal es que uses sobre todo <strong>literal</strong> y <strong>funciones fábrica</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ERRORES TÍPICOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Errores típicos al crear objetos</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">❌</span> Fallos normales (y cómo evitarlos)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                <strong>Olvidar el return</strong> en una función fábrica (entonces devuelve <code>undefined</code>).
              </li>
              <li>
                Pensar que <code>new Object()</code> “crea algo diferente” (no: crea un objeto normal).
              </li>
              <li>
                Repetir objetos a mano en vez de crear una función fábrica cuando hay muchos.
              </li>
            </ul>

            <p className="muted">
              Tranquilo/a: estos errores son muy comunes. Los vas a reconocer rápido con práctica.
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
              <span className="badge">✏️</span> Crea objetos de 3 formas
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un objeto <strong>producto</strong> que tenga estas propiedades:
              <code> nombre</code>, <code> precio</code> y <code> disponible</code>.
            </p>

            <ol>
              <li>Crea el producto con <strong>notación literal</strong>.</li>
              <li>Crea otro producto con <strong>new Object()</strong> y añade propiedades una a una.</li>
              <li>
                Crea una <strong>función fábrica</strong> llamada <code>crearProducto</code> que reciba
                <code> nombre</code> y <code> precio</code> y devuelva un objeto.
              </li>
            </ol>

            <div className="divider" />

            <p className="muted">Plantilla de ayuda (puedes completarla):</p>

            <div className="code-example">
              <pre>
                <code>{`// 1) Literal
let producto1 = {
  // ...
};

// 2) new Object()
let producto2 = new Object();
// ...

// 3) Función fábrica
function crearProducto(nombre, precio) {
  return {
    // ...
  };
}

let producto3 = crearProducto("Camiseta", 19.99);`}</code>
              </pre>
            </div>

            <p className="muted">
              Si te sale, prueba a crear <strong>dos productos más</strong> con la función fábrica.
              Ahí verás la ventaja real.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del Tema 6.3</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Lo que debes dominar
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>La forma más común es el <strong>objeto literal</strong>.</li>
              <li><code>new Object()</code> crea un objeto vacío y luego le añades propiedades.</li>
              <li>Las <strong>funciones fábrica</strong> sirven para crear muchos objetos similares.</li>
              <li>Si repites estructura, crea una fábrica y evita duplicar.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a <strong>acceder y editar</strong> propiedades:
              <code> .</code>, <code>[]</code>, <code>delete</code> y <code>'in'</code>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
