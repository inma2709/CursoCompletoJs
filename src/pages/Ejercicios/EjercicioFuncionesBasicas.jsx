// src/pages/Ejercicios/EjercicioFuncionesBasicas.jsx
export default function EjercicioFuncionesBasicas() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">E18</span>
          <h1>Ejercicios: Funciones (básico)</h1>
          <p className="muted">
            Practica funciones paso a paso: parámetros, return, valores por defecto y funciones flecha.
            Todo guiado y con solución oculta.
          </p>
        </div>
      </header>

      {/* =========================
          EJERCICIO 1
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🧩 Ejercicio 1: Saludo personalizado (parámetros)</h2>
          <span className="topic-section__meta">parámetros</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Crea tu primera función con parámetros
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Objetivo: una función que reciba datos y los use para construir un mensaje.
            </p>

            <ol>
              <li>Crea una función llamada <code>saludar</code>.</li>
              <li>Debe recibir <code>nombre</code> y <code>ciudad</code>.</li>
              <li>Debe mostrar por consola: <code>"Hola NOMBRE, ¿qué tal por CIUDAD?"</code></li>
              <li>Llama a la función 3 veces con valores distintos.</li>
            </ol>

            <div className="divider" />

            <p className="muted">
              Pista: usa concatenación (<code>"..." + variable</code>) o template literals (<code>`...${"{variable}"}...`</code>).
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// 1) Defino la función (con parámetros)
function saludar(nombre, ciudad) {
  console.log("Hola " + nombre + ", ¿qué tal por " + ciudad + "?");
}

// 2) La uso con distintos valores (argumentos)
saludar("Ana", "Sevilla");
saludar("Luis", "Madrid");
saludar("Marta", "Valencia");`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 2
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧮 Ejercicio 2: Calcular descuento (return)</h2>
          <span className="topic-section__meta">return</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎁</span> Devolver un resultado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función <code>precioFinal</code>.</li>
              <li>Recibe <code>precio</code> y <code>descuento</code> (porcentaje, por ejemplo 10).</li>
              <li>Devuelve el precio con descuento aplicado.</li>
              <li>Guarda el resultado en una variable y muéstralo.</li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Si el precio es menor o igual que 0, devuelve <code>0</code>.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function precioFinal(precio, descuento) {
  // Reto: validación simple
  if (precio <= 0) return 0;

  const cantidad = precio * (descuento / 100);
  return precio - cantidad;
}

const p1 = precioFinal(100, 10);
console.log("Final 1:", p1);

const p2 = precioFinal(50, 20);
console.log("Final 2:", p2);

const p3 = precioFinal(-10, 10);
console.log("Final 3:", p3); // 0`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 3
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🎭 Ejercicio 3: Valores por defecto</h2>
          <span className="topic-section__meta">defaults</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Que funcione aunque falte un dato
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función <code>mensajeBienvenida</code>.</li>
              <li>Recibe <code>nombre</code> (por defecto: <code>"Amigo"</code>).</li>
              <li>Recibe <code>saludo</code> (por defecto: <code>"Hola"</code>).</li>
              <li>Devuelve el mensaje completo (no lo muestres dentro).</li>
              <li>Haz <code>console.log</code> llamándola con 0, 1 y 2 argumentos.</li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Si el nombre está vacío (<code>""</code>), usa <code>"Amigo"</code>.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`function mensajeBienvenida(nombre = "Amigo", saludo = "Hola") {
  // Reto: si viene vacío, lo corrijo
  if (nombre === "") nombre = "Amigo";
  return saludo + " " + nombre + " 👋";
}

console.log(mensajeBienvenida());               // Hola Amigo 👋
console.log(mensajeBienvenida("Inma"));         // Hola Inma 👋
console.log(mensajeBienvenida("Luis", "Buenas")); // Buenas Luis 👋
console.log(mensajeBienvenida("", "Hey"));      // Hey Amigo 👋`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIO 4
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🏹 Ejercicio 4: Función flecha (versión corta)</h2>
          <span className="topic-section__meta">arrow</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚡</span> Misma lógica, menos texto
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>Crea una función flecha <code>doble</code> que reciba <code>n</code>.</li>
              <li>Debe devolver el doble.</li>
              <li>Prueba con varios números.</li>
            </ol>

            <div className="divider" />

            <h3 style={{ marginTop: ".2rem" }}>🎯 Reto</h3>
            <p className="muted">
              Crea otra flecha <code>esPar</code> que devuelva <code>true</code> si el número es par.
            </p>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Posible solución (comentada)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="code-example">
              <pre>
                <code>{`// return implícito (una sola expresión)
const doble = (n) => n * 2;

// reto: par/impar
const esPar = (n) => n % 2 === 0;

console.log(doble(5));  // 10
console.log(doble(12)); // 24

console.log(esPar(10)); // true
console.log(esPar(7));  // false`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
