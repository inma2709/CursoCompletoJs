// src/pages/tema6/Tema6_5.jsx
export default function Tema6_5() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.5</span>
          <h1>Recorrer objetos: for...in y Object.keys / values / entries</h1>
          <p className="muted">
            Igual que recorres arrays con bucles, también puedes recorrer objetos.
            En este tema aprenderás <strong>cómo iterar sobre las propiedades</strong>
            de un objeto y cuándo usar cada método.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Recorrer objetos</h2>
    <p className="muted">
      Aprende a recorrer objetos correctamente usando for...in y Object.keys,
      values y entries.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/HnY7ZbH6v2g"
        title="Recorrer objetos JS"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  </div>
</section>


      {/* =========================
          DIFERENCIA CON ARRAYS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Antes de empezar: objetos ≠ arrays</h2>
          <span className="topic-section__meta">fundamentos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> Cambio importante de mentalidad
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>array</strong> es una lista ordenada. Un <strong>objeto</strong>
              es un conjunto de propiedades sin un orden fijo pensado para recorrer por índice.
            </p>

            <p>
              Por eso, métodos como <code>for</code>, <code>forEach</code> o <code>map</code>
              <strong>no se usan directamente sobre objetos</strong>.
            </p>

            <p className="muted">
              En su lugar, JavaScript ofrece otras herramientas específicas.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          FOR...IN
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1) Recorrer un objeto con for...in</h2>
          <span className="topic-section__meta">for-in</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔁</span> El bucle clásico para objetos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              El bucle <code>for...in</code> recorre las <strong>claves</strong> de un objeto,
              una a una.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  curso: "JS"
};

for (let clave in alumno) {
  console.log(clave);
}`}</code>
              </pre>
            </div>

            <p className="muted">
              Esto mostraría: <code>nombre</code>, <code>edad</code> y <code>curso</code>.
            </p>

            <div className="divider" />

            <p>
              Para acceder al valor, usamos <code>[]</code> porque la clave está en una variable:
            </p>

            <div className="code-example">
              <pre>
                <code>{`for (let clave in alumno) {
  console.log(clave + ": " + alumno[clave]);
}`}</code>
              </pre>
            </div>

            <p className="muted">
              Recuerda: <code>alumno.clave</code> no funciona aquí.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          OBJECT.KEYS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2) Object.keys()</h2>
          <span className="topic-section__meta">keys</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔑</span> Obtener un array con las claves
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>Object.keys()</code> devuelve un <strong>array</strong> con todas las
              claves del objeto.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let alumno = {
  nombre: "Ana",
  edad: 22,
  curso: "JS"
};

let claves = Object.keys(alumno);
console.log(claves);`}</code>
              </pre>
            </div>

            <p className="muted">
              Como ahora tienes un array, puedes usar lo que ya sabes:
              <code>for</code>, <code>forEach</code>, etc.
            </p>

            <div className="code-example">
              <pre>
                <code>{`claves.forEach(function (clave) {
  console.log(clave + ": " + alumno[clave]);
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          OBJECT.VALUES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3) Object.values()</h2>
          <span className="topic-section__meta">values</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">📦</span> Obtener solo los valores
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>Object.values()</code> devuelve un array con los <strong>valores</strong>
              del objeto.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let valores = Object.values(alumno);
console.log(valores);`}</code>
              </pre>
            </div>

            <p className="muted">
              Útil cuando no te interesa la clave, solo los datos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          OBJECT.ENTRIES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4) Object.entries()</h2>
          <span className="topic-section__meta">entries</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📑</span> Clave y valor juntos
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>Object.entries()</code> devuelve un array de pares
              <code>[clave, valor]</code>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`let entradas = Object.entries(alumno);
console.log(entradas);`}</code>
              </pre>
            </div>

            <p className="muted">
              Ejemplo del resultado:
              <code>[["nombre","Ana"], ["edad",22], ["curso","JS"]]</code>
            </p>

            <div className="divider" />

            <p>
              Esto es muy útil para recorrerlo cómodamente:
            </p>

            <div className="code-example">
              <pre>
                <code>{`entradas.forEach(function ([clave, valor]) {
  console.log(clave + ": " + valor);
});`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CUÁL USAR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Cuál usar en cada caso?</h2>
          <span className="topic-section__meta">eleccion</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧭</span> Regla práctica
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                <strong>for...in</strong>: rápido y directo para recorrer claves.
              </li>
              <li>
                <strong>Object.keys()</strong>: cuando quieres trabajar con un array de claves.
              </li>
              <li>
                <strong>Object.values()</strong>: cuando solo te importan los valores.
              </li>
              <li>
                <strong>Object.entries()</strong>: cuando necesitas clave y valor juntos.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          ERRORES TÍPICOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Errores típicos al recorrer objetos</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">❌</span> Lo que no funciona (y por qué)
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Intentar usar <code>forEach</code> directamente sobre un objeto.</li>
              <li>Usar <code>.</code> en lugar de <code>[]</code> dentro de un bucle.</li>
              <li>Olvidar que <code>Object.keys</code> devuelve un array.</li>
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
              <span className="badge">✏️</span> Recorre un objeto
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Partimos de este objeto:</p>

            <div className="code-example">
              <pre>
                <code>{`let producto = {
  nombre: "Camiseta",
  precio: 19.99,
  stock: 12
};`}</code>
              </pre>
            </div>

            <ol>
              <li>Recorre el objeto con <code>for...in</code> y muestra clave y valor.</li>
              <li>Obtén las claves con <code>Object.keys()</code> y recórrelas con <code>forEach</code>.</li>
              <li>Obtén solo los valores con <code>Object.values()</code>.</li>
              <li>Usa <code>Object.entries()</code> para mostrar clave y valor juntos.</li>
            </ol>

            <div className="divider" />

            <p className="muted">Plantilla de ayuda:</p>

            <div className="code-example">
              <pre>
                <code>{`// for...in

// Object.keys()

// Object.values()

// Object.entries()`}</code>
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
          <h2>Resumen del Tema 6.5</h2>
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
              <li>Los objetos no se recorren como los arrays.</li>
              <li><code>for...in</code> recorre las claves.</li>
              <li><code>Object.keys()</code>, <code>values()</code> y <code>entries()</code> devuelven arrays.</li>
              <li>Para acceder al valor dentro de un bucle se usa <code>[]</code>.</li>
            </ul>

            <p className="muted">
              En el siguiente tema aprenderás algo clave: la diferencia entre
              <strong>referencia y copia</strong>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
