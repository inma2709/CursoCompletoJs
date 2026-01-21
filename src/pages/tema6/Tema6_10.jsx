// src/pages/tema6/Tema6_10.jsx
export default function Tema6_10() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6 · Tema 6.10</span>
          <h1>Getters y Setters: propiedades controladas</h1>
          <p className="muted">
            En este tema aprenderás a <strong>controlar el acceso</strong> a las propiedades
            de un objeto usando <strong>getters</strong> y <strong>setters</strong>.
            Son clave para validar datos y proteger el estado interno.
          </p>
        </div>
      </header>
      {/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box">
    <h2 className="section-title">🎥 Video: Getters y Setters</h2>
    <p className="muted">
      Este vídeo muestra cómo controlar el acceso a las propiedades
      usando getters y setters con ejemplos prácticos.
    </p>

    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.youtube.com/embed/QhFo_L_81Tc"
        title="Getters y Setters JS"
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
          <h2>La idea clave</h2>
          <span className="topic-section__meta">idea</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Leer y escribir con control
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Normalmente accedemos a una propiedad directamente:
              <code>obj.propiedad</code>. Con getters y setters podemos
              <strong>interceptar</strong> esa lectura o escritura.
            </p>
            <p className="muted">
              Así añadimos reglas sin cambiar cómo se usa el objeto desde fuera.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          GETTER
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es un getter?</h2>
          <span className="topic-section__meta">getter</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">👀</span> Controlar la lectura
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>getter</strong> es un método que se ejecuta cuando
              <strong>lees</strong> una propiedad.
            </p>

            <div className="code-example">
              <pre>
                <code>{`class Usuario {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre.toUpperCase();
  }
}

let u = new Usuario("Inma");
console.log(u.nombre); // "INMA"`}</code>
              </pre>
            </div>

            <p className="muted">
              Desde fuera parece una propiedad normal, pero en realidad ejecuta código.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          SETTER
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué es un setter?</h2>
          <span className="topic-section__meta">setter</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✍️</span> Controlar la escritura
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>setter</strong> se ejecuta cuando intentas
              <strong>modificar</strong> una propiedad.
            </p>

            <div className="code-example">
              <pre>
                <code>{`class Usuario {
  constructor(nombre) {
    this._nombre = nombre;
  }

  set nombre(valor) {
    if (valor.length < 3) {
      console.log("Nombre demasiado corto");
      return;
    }
    this._nombre = valor;
  }

  get nombre() {
    return this._nombre;
  }
}

let u = new Usuario("Ana");
u.nombre = "Al";   // error
u.nombre = "Inma"; // correcto
console.log(u.nombre);`}</code>
              </pre>
            </div>

            <p className="muted">
              El setter permite validar antes de cambiar el dato.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          _ PROPIEDADES PRIVADAS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Por qué usar _nombre?</h2>
          <span className="topic-section__meta">privado</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔒</span> Convención importante
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Usamos <code>_nombre</code> como convención para indicar que
              esa propiedad <strong>no debe tocarse directamente</strong>.
            </p>

            <p className="muted">
              Así evitamos bucles infinitos y dejamos claro qué se controla
              con getter/setter.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CUÁNDO USARLOS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Cuándo usar getters y setters?</h2>
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
              <li>Validar datos (edad, nombre, precio…).</li>
              <li>Evitar estados inválidos.</li>
              <li>Formatear datos al leerlos.</li>
              <li>Proteger el estado interno del objeto.</li>
            </ul>
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
              <span className="badge">✏️</span> Controla un precio
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>Crea una clase <code>Producto</code> que:</p>

            <ul>
              <li>Tenga una propiedad interna <code>_precio</code>.</li>
              <li>Un getter <code>precio</code> que devuelva el precio.</li>
              <li>
                Un setter <code>precio</code> que solo acepte valores mayores que 0.
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`class Producto {
  constructor(precio) {
    this._precio = precio;
  }

  get precio() {
    return this._precio;
  }

  set precio(valor) {
    if (valor <= 0) {
      console.log("Precio inválido");
      return;
    }
    this._precio = valor;
  }
}

let p = new Producto(10);
p.precio = -5; // error
p.precio = 20; // correcto
console.log(p.precio);`}</code>
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
          <h2>Resumen del Tema 6.10</h2>
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
              <li>Los getters controlan la lectura.</li>
              <li>Los setters controlan la escritura.</li>
              <li>Parecen propiedades, pero ejecutan código.</li>
              <li>Sirven para validar y proteger datos.</li>
            </ul>

            <p className="muted">
              Con esto cierras el <strong>Módulo 6</strong>.  
              A partir de aquí ya tienes una base sólida de <strong>POO en JavaScript</strong>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
