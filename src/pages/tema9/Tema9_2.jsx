// src/pages/tema9/Tema9_2.jsx
export default function Tema9_2() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9.2</span>
          <h1>Tema 9.2 · Arrays (listas) desde cero</h1>
          <p className="muted">
            Guardar varios datos, recorrerlos y modificarlos: la base real de listas, carritos, tareas y menús.
          </p>
        </div>
      </header>

      {/* =========================
          OBJETIVO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Qué vas a aprender aquí</h2>
          <span className="topic-section__meta">objetivo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Lo importante de verdad
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Qué es un <strong>array</strong> (lista) y qué significa que empiece en índice <code>0</code>.
              </li>
              <li>
                Acceder y cambiar valores: <code>arr[i]</code>.
              </li>
              <li>
                Saber cuántos elementos hay: <code>length</code>.
              </li>
              <li>
                Añadir y quitar: <code>push</code>, <code>pop</code>, <code>unshift</code>, <code>shift</code>.
              </li>
              <li>
                Buscar: <code>includes</code>, <code>indexOf</code>.
              </li>
              <li>
                Cortar / copiar: <code>slice</code> (no modifica).
              </li>
              <li>
                Modificar “en medio”: <code>splice</code> (sí modifica).
              </li>
              <li>
                Convertir a texto: <code>join</code> (muy útil para mostrar listas).
              </li>
              <li>
                Recorrer: <code>for</code>, <code>for...of</code> y <code>forEach</code>.
              </li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Idea clave:</strong> Un array es como una estantería con huecos numerados.
                El primer hueco es el <code>0</code>, el segundo es el <code>1</code>…
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CREAR ARRAYS + INDICES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📦 1) Crear arrays y entender los índices</h2>
          <span className="topic-section__meta">basico</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">0️⃣</span> Empieza en 0 (siempre)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un array es una lista:
              <br />
              <code>["manzana", "pera", "uva"]</code>
              <br />
              Cada elemento tiene una posición llamada <strong>índice</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const frutas = ["manzana", "pera", "uva"];

console.log(frutas[0]); // "manzana"
console.log(frutas[1]); // "pera"
console.log(frutas[2]); // "uva"`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Error típico:</strong> creer que el primer elemento es el 1.
                <br />
                No: el primero siempre es <code>0</code>.
              </p>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Crea un array con 3 colores y muestra por consola el primero y el último.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const colores = ["rojo", "verde", "azul"];

console.log(colores[0]); // primero
console.log(colores[colores.length - 1]); // último`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          LENGTH
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📏 2) length: cuántos elementos hay</h2>
          <span className="topic-section__meta">length</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">📏</span> Tamaño del array
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>length</code> te dice el número total de elementos.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const alumnos = ["Ana", "Luis", "María", "Carlos"];
console.log(alumnos.length); // 4`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                Para acceder al último elemento:
                <br />
                <code>arr[arr.length - 1]</code>
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          AÑADIR/QUITAR: PUSH/POP/SHIFT/UNSHIFT
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>➕➖ 3) Añadir y quitar elementos</h2>
          <span className="topic-section__meta">mutaciones</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧰</span> push/pop y unshift/shift
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted" style={{ marginTop: 0 }}>
              Estos métodos <strong>sí modifican</strong> el array (mutan el array).
            </p>

            <ul>
              <li>
                <code>push(x)</code> → añade al final
              </li>
              <li>
                <code>pop()</code> → quita del final
              </li>
              <li>
                <code>unshift(x)</code> → añade al inicio
              </li>
              <li>
                <code>shift()</code> → quita del inicio
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const lista = ["A", "B"];

lista.push("C");
console.log(lista); // ["A","B","C"]

lista.pop();
console.log(lista); // ["A","B"]

lista.unshift("Z");
console.log(lista); // ["Z","A","B"]

lista.shift();
console.log(lista); // ["A","B"]`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Tienes una lista de tareas. Añade 2 tareas al final y borra la última.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const tareas = ["Estudiar JS"];

tareas.push("Practicar arrays");
tareas.push("Hacer ejercicios");
console.log(tareas);

tareas.pop();
console.log(tareas);`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          BUSCAR: INCLUDES / INDEXOF
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔎 4) Buscar en arrays: includes e indexOf</h2>
          <span className="topic-section__meta">buscar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> ¿Existe este elemento?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Igual que en strings, aquí tienes:
            </p>
            <ul>
              <li>
                <code>includes(x)</code> → true/false
              </li>
              <li>
                <code>indexOf(x)</code> → posición o <code>-1</code>
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const frutas = ["manzana", "pera", "uva"];

console.log(frutas.includes("pera")); // true
console.log(frutas.includes("kiwi")); // false

console.log(frutas.indexOf("uva"));   // 2
console.log(frutas.indexOf("kiwi"));  // -1`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Tip:</strong> en validaciones rápidas, <code>includes</code> es perfecto.
                Si necesitas eliminar un elemento por su posición, entonces te interesa <code>indexOf</code>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SLICE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>✂️ 5) slice: copiar una parte (NO modifica)</h2>
          <span className="topic-section__meta">slice</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🧊</span> Copiar sin tocar el original
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>slice(inicio, fin)</code> devuelve un <strong>nuevo array</strong> con una parte.
              <br />
              El original no cambia.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const nums = [10, 20, 30, 40, 50];

const parte = nums.slice(1, 4);
console.log(parte); // [20, 30, 40]
console.log(nums);  // [10, 20, 30, 40, 50] (igual)`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SPLICE
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧩 6) splice: modificar en medio (SÍ modifica)</h2>
          <span className="topic-section__meta">splice</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚙️</span> Insertar, borrar o reemplazar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>splice</code> es más “potente”, pero también más delicado.
              <br />
              Sintaxis:
            </p>

            <div className="code-example">
              <pre>
                <code>{`// arr.splice(inicio, cuantosBorro, ...elementosAInsertar)`}</code>
              </pre>
            </div>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`const letras = ["A", "B", "C", "D"];

// 1) Borrar 1 elemento en la posición 1 (quita "B")
letras.splice(1, 1);
console.log(letras); // ["A","C","D"]

// 2) Insertar sin borrar: en pos 1, borro 0, inserto "X"
letras.splice(1, 0, "X");
console.log(letras); // ["A","X","C","D"]

// 3) Reemplazar: en pos 2, borro 1 y meto "Y"
letras.splice(2, 1, "Y");
console.log(letras); // ["A","X","Y","D"]`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Ojo:</strong> <code>splice</code> modifica el array original.
                Si no quieres tocar el original, usa <code>slice</code>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          JOIN
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔗 7) join: convertir array a texto</h2>
          <span className="topic-section__meta">join</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔗</span> Para mostrarlo “bonito”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>join()</code> une todos los elementos en un string.
              <br />
              Tú decides el separador:
            </p>

            <div className="code-example">
              <pre>
                <code>{`const mods = ["Variables", "Condicionales", "Bucles"];

console.log(mods.join(", ")); // "Variables, Condicionales, Bucles"
console.log(mods.join(" · ")); // "Variables · Condicionales · Bucles"`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Pro tip:</strong> es perfecto para mostrar una lista en un <code>&lt;p&gt;</code>
                cuando aún no estás creando <code>&lt;li&gt;</code> en el DOM.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          RECORRER ARRAYS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔁 8) Recorrer arrays: for, for...of y forEach</h2>
          <span className="topic-section__meta">loops</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔁</span> Tres formas (empieza por for...of)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para empezar, <code>for...of</code> es súper claro:
            </p>

            <div className="code-example">
              <pre>
                <code>{`const frutas = ["manzana", "pera", "uva"];

for (const fruta of frutas) {
  console.log("Fruta:", fruta);
}`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">👀</span> Alternativa: for clásico (con índices)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const frutas = ["manzana", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Posición", i, "=", frutas[i]);
}`}</code>
                  </pre>
                </div>

                <p className="muted">
                  Útil cuando necesitas la posición exacta (<code>i</code>).
                </p>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">👀</span> Alternativa: forEach (modo “función”)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const frutas = ["manzana", "pera", "uva"];

frutas.forEach(function(fruta, i) {
  console.log(i, fruta);
});`}</code>
                  </pre>
                </div>

                <div className="friendly-box" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    <strong>Truco:</strong> <code>forEach</code> se usa muchísimo cuando trabajas con DOM:
                    “por cada elemento, crea un &lt;li&gt;”.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          MINI RETO (CON SOLUCIÓN)
      ========================= */}
      <section className="topic-section" style={{ marginBottom: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Reto final (mini) · Lista de la compra</h2>
          <span className="topic-section__meta">reto</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Mezcla lo aprendido
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Crea un array llamado <code>compra</code> y:
            </p>
            <ol>
              <li>Añade 3 productos con <code>push()</code>.</li>
              <li>Comprueba si existe “leche” con <code>includes()</code>.</li>
              <li>Elimina el primer producto con <code>shift()</code>.</li>
              <li>Muestra el resultado final como texto con <code>join(" · ")</code>.</li>
            </ol>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">✅</span> Solución propuesta
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`const compra = [];

compra.push("pan");
compra.push("leche");
compra.push("café");

console.log("¿Hay leche?", compra.includes("leche"));

compra.shift(); // quita "pan"

const resultado = compra.join(" · ");
console.log("Lista final:", resultado);`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="divider" />

            <p style={{ margin: 0 }}>
              Siguiente: <strong>Tema 9.3</strong> — Arrays + DOM: pintar listas en pantalla (creando
              <code> li </code> con <code>createElement</code> y <code>appendChild</code>).
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
