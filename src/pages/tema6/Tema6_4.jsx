// src/pages/tema6/Tema6_4.jsx
export default function Tema6_4() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.4</span>
          <h1>Acceso y edición: . , [] , delete y 'in'</h1>
          <p className="muted">
            En este tema aprendes a hacer lo más importante con objetos:{" "}
            <strong>leer</strong> y <strong>modificar</strong> sus propiedades.
            Dominarás cuándo usar <code>.</code> y cuándo usar <code>[]</code>, y verás
            dos herramientas clave: <code>delete</code> y el operador <code>'in'</code>.
          </p>
        </div>
      </header>
{/* VIDEO */}
{/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Acceder a propiedades (. y [])</h2>
    <p className="muted">
      En este vídeo, en español, se explica de forma clara cómo acceder
      a las propiedades de un objeto usando la notación con punto y
      con corchetes, y cuándo conviene usar cada una.
    </p>

    <div
      className="video-container"
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      <iframe
        src="https://www.youtube.com/embed/1Rs2ND1ryYc"
        title="Acceder a propiedades de objetos en JavaScript"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  </div>
</section>


      {/* =========================
          ACCEDER CON PUNTO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) Acceder con punto</h2>
          <span className="topic-section__meta">dot</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔎</span> La forma más común y cómoda
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Si conoces el nombre de la propiedad y es un nombre “normal” (sin espacios ni guiones),
              lo más habitual es usar el <strong>punto</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  matriculada: true
};

console.log(alumno.nombre); // "Ana"
console.log(alumno.edad);   // 22`}</code>
              </pre>
            </div>

            <p className="muted">
              Regla rápida: <strong>si puedes escribirlo como una palabra</strong>, usa punto.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ACCEDER CON CORCHETES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) Acceder con corchetes</h2>
          <span className="topic-section__meta">brackets</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Cuando el nombre viene en una variable (o es raro)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Los <code>[]</code> se usan en dos situaciones típicas:
            </p>

            <ul>
              <li>
                Cuando el nombre de la propiedad <strong>está en una variable</strong>.
              </li>
              <li>
                Cuando la propiedad tiene un nombre “especial” (espacios, guiones, números como texto…).
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  "nombre completo": "Ana López"
};

console.log(alumno["nombre completo"]); // "Ana López"`}</code>
              </pre>
            </div>

            <div className="divider" />

            <p>
              Ejemplo clave: la propiedad viene en una variable:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = { nombre: "Ana", edad: 22 };

let clave = "edad";
console.log(alumno[clave]); // 22`}</code>
              </pre>
            </div>

            <p className="muted">
              ⚠️ Esto es MUY importante: si haces <code>alumno.clave</code> NO funciona como esperas,
              porque buscaría una propiedad literal llamada <code>"clave"</code>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          EDITAR Y AÑADIR PROPIEDADES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) Editar y añadir propiedades</h2>
          <span className="topic-section__meta">editar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✏️</span> Cambiar valores y crear propiedades nuevas
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para <strong>modificar</strong> una propiedad, simplemente reasignas el valor.
              Y si la propiedad no existía, JavaScript la crea.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = { nombre: "Ana", edad: 22 };

alumno.edad = 23;          // editar
alumno.curso = "JS";       // añadir

console.log(alumno);`}</code>
              </pre>
            </div>

            <p className="muted">
              Esto es normal en JS: los objetos son “flexibles”. Más adelante verás cómo
              controlar esto con getters/setters.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          DELETE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4) Borrar propiedades con delete</h2>
          <span className="topic-section__meta">delete</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🗑️</span> Eliminar una propiedad (no el objeto)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>delete</code> sirve para eliminar una propiedad de un objeto.
              Ojo: <strong>no borra el objeto</strong>, solo quita esa propiedad.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = { nombre: "Ana", edad: 22, curso: "JS" };

delete alumno.curso;

console.log(alumno); // { nombre: "Ana", edad: 22 }`}</code>
              </pre>
            </div>

            <p className="muted">
              Consejo: borra propiedades solo cuando tenga sentido. Muchas veces es más claro
              poner un valor como <code>null</code> o <code>""</code>, pero aquí aprenderás la herramienta.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          'in'
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5) Comprobar si existe una propiedad con 'in'</h2>
          <span className="topic-section__meta">in</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> “¿Esta clave existe en el objeto?”
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              El operador <code>in</code> comprueba si una propiedad existe dentro de un objeto.
              Devuelve <code>true</code> o <code>false</code>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = { nombre: "Ana", edad: 22 };

console.log("edad" in alumno);   // true
console.log("curso" in alumno);  // false`}</code>
              </pre>
            </div>

            <p className="muted">
              Esto es útil cuando no estás seguro/a de si la propiedad existe y quieres evitar errores o decisiones incorrectas.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          ERRORES TÍPICOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Errores típicos con . y []</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">❌</span> Lo que confunde a casi todo el mundo al principio
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Usar <code>.</code> cuando la clave está en una variable:
                <strong> mal</strong> <code>obj.clave</code> / <strong>bien</strong> <code>obj[clave]</code>
              </li>
              <li>
                Intentar acceder a propiedades con espacios usando punto (no se puede).
              </li>
              <li>
                Pensar que <code>delete</code> “vacía” el objeto (solo quita una propiedad).
              </li>
              <li>
                Comprobar existencia comparando con <code>undefined</code> sin entender el caso (en este curso usamos <code>'in'</code>).
              </li>
            </ul>
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
              <span className="badge">✏️</span> Lee, cambia, añade y comprueba
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Partimos de este objeto:
            </p>

            <div className="code-example">
              <pre>
                <code>{`let usuario = {
  nombre: "Inma",
  edad: 30,
  rol: "alumna"
};`}</code>
              </pre>
            </div>

            <ol>
              <li>Muestra por consola el <code>nombre</code> usando <code>.</code>.</li>
              <li>Cambia la <code>edad</code> a <code>31</code>.</li>
              <li>Añade una propiedad <code>ciudad</code> con el valor que quieras.</li>
              <li>Borra la propiedad <code>rol</code> con <code>delete</code>.</li>
              <li>Comprueba si existe <code>"ciudad"</code> usando <code>"ciudad" in usuario</code>.</li>
              <li>
                Crea una variable <code>clave</code> con el texto <code>"edad"</code> y muestra la edad usando <code>[]</code>.
              </li>
            </ol>

            <div className="divider" />

            <p className="muted">Plantilla para completar:</p>

            <div className="code-example">
              <pre>
                <code>{`let usuario = {
  nombre: "Inma",
  edad: 30,
  rol: "alumna"
};

// 1) leer con punto

// 2) cambiar edad

// 3) añadir ciudad

// 4) delete rol

// 5) comprobar con 'in'

// 6) clave en variable + acceso con []`}</code>
              </pre>
            </div>

            <p className="muted">
              Si lo terminas rápido: añade una propiedad con espacio en el nombre
              (por ejemplo <code>"nombre completo"</code>) y accede a ella con <code>[]</code>.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          RESUMEN FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Resumen del Tema 6.4</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Lo esencial que debes dominar
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Usa <code>.</code> cuando la propiedad es fija y simple.
              </li>
              <li>
                Usa <code>[]</code> cuando la clave está en una variable o el nombre es especial.
              </li>
              <li>
                Puedes editar o añadir propiedades reasignando valores.
              </li>
              <li>
                <code>delete</code> elimina una propiedad.
              </li>
              <li>
                <code>"clave" in objeto</code> comprueba si existe una propiedad.
              </li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás a <strong>recorrer objetos</strong>:
              <code>for...in</code> y <code>Object.keys/values/entries</code>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
