// src/pages/Bucles.jsx
// Lección · Bucles en JavaScript (WHILE / FOR / DO-WHILE + errores comunes + ejercicios)
// Estilo: tu manual (wrap, hero, card, topic-section, topic-details, callouts, code-example, embed, divider...)

import { useMemo } from "react";

export default function Bucles() {
  const toc = useMemo(
    () => [
      { id: "intro", label: "🤔 ¿Qué son los bucles?" },
      { id: "while", label: "🔄 WHILE" },
      { id: "for", label: "⚡ FOR" },
      { id: "do-while", label: "🔁 DO-WHILE" },
      { id: "comparacion", label: "⚖️ ¿Cuál usar y cuándo?" },
      { id: "errores", label: "⚠️ Errores comunes" },
      { id: "practica", label: "🎯 Ejercicios" },
      { id: "resumen", label: "📋 Resumen" }
    ],
    []
  );

  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">Fundamentos · Bucles</span>
          <h1 style={{ marginTop: ".55rem" }}>🔄 Bucles en JavaScript</h1>
          <p className="muted">
            Aprende a <strong>repetir acciones</strong> de forma automática: <strong>while</strong>,{" "}
            <strong>for</strong> y <strong>do-while</strong>. Esta lección está pensada para que entiendas
            la lógica, evites bucles infinitos y puedas recorrer arrays sin errores.
          </p>

          <div className="callout callout--tip" style={{ marginTop: ".9rem" }}>
            <p style={{ margin: 0 }}>
              Idea clave: un bucle es una máquina que repite algo, pero necesitas{" "}
              <strong>una condición de salida</strong>.
            </p>
          </div>
        </div>
      </header>

      {/* ÍNDICE */}
      <section className="card" style={{ marginTop: "1rem" }}>
        <div className="card-body">
          <div className="topic-section__title" style={{ marginBottom: ".5rem" }}>
            <h2 style={{ margin: 0 }}>🧭 Índice rápido</h2>
            <span className="topic-section__meta">navegación</span>
          </div>

          <div
            className="content-details"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: ".5rem"
            }}
          >
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="btn"
                style={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================= */}
      <section id="intro" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🤔 ¿Qué son los bucles?</h2>
          <span className="topic-section__meta">concepto</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--ok">
              <p style={{ marginTop: 0 }}>
                <strong>Imagínate esto:</strong> tienes que escribir 100 veces “No hablaré en clase”.
                ¿Lo harías línea por línea? ¡Claro que no!
              </p>
              <p style={{ marginBottom: 0 }}>
                Un bucle es como una <strong>máquina que repite</strong> la misma acción las veces que le digas.
              </p>
            </div>

            <p>
              Un <strong>bucle</strong> es una estructura que nos permite <strong>repetir código</strong> automáticamente
              sin tener que escribirlo una y otra vez.
            </p>
            <p>
  En JavaScript, los <strong>bucles</strong> se pueden clasificar en 
  <strong>determinados</strong> e <strong>indeterminados</strong>, según si conocemos o no 
  el número de repeticiones antes de que el programa se ejecute.
</p>
  <div className="divider" />
  <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
<p>
  Los <strong>bucles indeterminados</strong> son <code>while</code> y <code>do...while</code>. 
  Se llaman así porque <strong>no podemos saber de antemano cuántas veces se van a repetir</strong>, 
  ya que dependen de una condición que se evalúa durante la ejecución del programa. 
  En estos casos, el bucle continúa mientras la condición sea verdadera, y puede ocurrir que 
  <strong>no se ejecute ninguna vez</strong> (en el caso de <code>while</code>) o que 
  <strong>se ejecute al menos una vez</strong> (en el caso de <code>do...while</code>).
</p>
</div>
  <div className="divider" />
  <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
<p>
  Por el contrario, los <strong>bucles determinados</strong> son aquellos en los que 
  <strong>sí podemos saber cuántas veces se repetirá el código simplemente leyendo el programa</strong>. 
  En JavaScript, este grupo incluye los bucles <code>for</code>, <code>for...of</code> y 
  <code>for...in</code>. Estos bucles se utilizan cuando trabajamos con contadores, 
  recorridos de arrays u objetos, o cuando el número de iteraciones está claramente definido 
  desde el principio.
</p>
</div>
<p>
  En resumen, los bucles indeterminados se usan cuando <em>no sabemos cuántas veces será necesario repetir una acción</em>, 
  mientras que los bucles determinados son ideales cuando <em>el número de repeticiones está perfectamente definido</em>.
</p>


            <details className="topic-details" >
              <summary>
                <span className="summary-left">
                  <span className="badge">📝</span> ¿Para qué sirven?
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <ul>
                  <li>🔄 <strong>Repetir acciones:</strong> saludar 10 veces</li>
                  <li>📋 <strong>Recorrer listas:</strong> mostrar todos los nombres de un array</li>
                  <li>🧮 <strong>Hacer cálculos:</strong> sumar números del 1 al 100</li>
                  <li>🔍 <strong>Buscar:</strong> encontrar un elemento en una lista</li>
                </ul>

                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Si te pierdes: piensa siempre en <strong>3 cosas</strong>:
                    <br />1) ¿Con qué valor empiezo? 2) ¿Cuándo paro? 3) ¿Cómo avanzo en cada vuelta?
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          WHILE
      ========================= */}
      <section id="while" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🔄 Bucle WHILE — “Mientras que…”</h2>
          <span className="topic-section__meta">while</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--info">
            <p style={{ margin: 0 }}>
  <strong>WHILE</strong> es como decir: 
  <em>«Mientras llueva, quédate en casa»</em>.
</p>

<p>
  Este bucle repite un bloque de código <strong>mientras la condición sea verdadera</strong>. 
  Antes de cada repetición, JavaScript comprueba la condición: si se cumple, el código se ejecuta; 
  si no se cumple, el bucle se detiene.
</p>

<p>
  Es importante tener en cuenta que, si la condición <strong>nunca es verdadera</strong>, 
  el bucle <strong>no se ejecutará ni una sola vez</strong>. 
  Por el contrario, si la condición <strong>nunca llega a ser falsa</strong>, se produce uno de los 
  errores más comunes en programación: el <strong>bucle infinito</strong>.
</p>

<p>
  Un bucle infinito provoca que el programa <strong>no pueda finalizar</strong> y quede bloqueado, 
  ya que el código se repite sin parar. Por eso, cuando usamos <code>while</code>, es fundamental 
  asegurarnos de que <strong>la condición cambie en algún momento</strong> dentro del propio bucle.
</p>

            </div>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🔧</span> Sintaxis
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`while (condición) {
  // Código que se repite
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
                  <h4 style={{ marginTop: 0 }}>📝 WHILE: 3 pasos (obligatorios)</h4>

                  <p style={{ marginBottom: ".35rem" }}>
                    <strong>1) 🏁 ANTES del bucle:</strong> crear una variable
                  </p>
                  <p className="muted" style={{ marginTop: 0 }}>
                    Ejemplo: <code>let contador = 1;</code> (se crea UNA vez)
                  </p>

                  <p style={{ marginBottom: ".35rem" }}>
                    <strong>2) ❓ EN el while:</strong> poner la condición
                  </p>
                  <p className="muted" style={{ marginTop: 0 }}>
                    Ejemplo: <code>while (contador &lt;= 5)</code> → “mientras contador sea menor o igual a 5”
                  </p>

                  <p style={{ marginBottom: ".35rem" }}>
                    <strong>3) ⬆️ DENTRO del bucle:</strong> cambiar la variable
                  </p>
                  <p className="muted" style={{ marginTop: 0 }}>
                    Ejemplo: <code>contador++;</code> (si no cambias la variable… el bucle no termina)
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} >
              <summary>
                <span className="summary-left">
                  <span className="badge">🤔</span> ¿Por qué la variable va fuera en WHILE?
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Porque <code>while</code> solo tiene un hueco: la condición.
                </p>

                <div className="code-example">
                  <pre>
                    <code>{`while (condición) { ... }`}</code>
                  </pre>
                </div>

                <p className="muted">
                  ¿Se puede declarar dentro? Sí, pero suele ser raro y confuso (y muchas veces obliga a usar <code>break</code>).
                </p>

                <div className="code-example">
                  <pre>
                    <code>{`// ❌ Raro y confuso (aunque funciona)
while (true) {
  let contador = 1;           // se crea en cada vuelta 😵
  console.log(contador);
  if (contador >= 3) break;   // necesitas "break" para salir
}

// ✅ Claro y normal
let contador = 1;             // se crea UNA vez
while (contador <= 3) {
  console.log(contador);
  contador++;
}`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details" style={{ marginTop: ".75rem" }} >
              <summary>
                <span className="summary-left">
                  <span className="badge">🔄</span> Paso a paso (ejemplo cortito)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let contador = 1;
while (contador <= 3) {
  console.log(\`Número: \${contador}\`);
  contador++;
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--info" style={{ marginTop: ".75rem" }}>
                  <p style={{ marginTop: 0 }}>
                    <strong>Ejecución:</strong>
                  </p>
                  <ul style={{ marginBottom: 0 }}>
                    <li>Inicio: contador = 1</li>
                    <li>Vuelta 1: ¿1 &lt;= 3? ✅ → imprime 1 → contador = 2</li>
                    <li>Vuelta 2: ¿2 &lt;= 3? ✅ → imprime 2 → contador = 3</li>
                    <li>Vuelta 3: ¿3 &lt;= 3? ✅ → imprime 3 → contador = 4</li>
                    <li>Vuelta 4: ¿4 &lt;= 3? ❌ → sale</li>
                  </ul>
                </div>
              </div>
            </details>

            <div className="divider" style={{ marginTop: "1rem" }} />

            <details className="topic-details"  style={{ marginTop: "1rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📖</span> Ejemplo 1: Contar del 1 al 5
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`// Definimos la variable ANTES del bucle
let contador = 1;

// Mientras el contador sea menor o igual a 5
while (contador <= 5) {
  console.log(\`Número: \${contador}\`);
  contador++; // ¡MUY IMPORTANTE!
}

// Resultado:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5`}</code>
                  </pre>
                </div>

                <div className="callout callout--warning">
                  <p style={{ margin: 0 }}>
                    <strong>⚠️ Cuidado:</strong> si olvidas <code>contador++</code>, el bucle puede volverse infinito.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📋</span> Ejemplo 2: Recorrer un array de colores
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let colores = ["rojo", "azul", "verde", "amarillo"];

let posicion = 0;

while (posicion < colores.length) {
  console.log(\`Color \${posicion + 1}: \${colores[posicion]}\`);
  posicion++;
}

// Resultado:
// Color 1: rojo
// Color 2: azul
// Color 3: verde
// Color 4: amarillo`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧮</span> Ejemplo 3: Sumar números mientras la suma sea &lt; 20
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let numero = 1;
let suma = 0;

while (suma < 20) {
  suma = suma + numero;
  console.log(\`Sumamos \${numero}, total: \${suma}\`);
  numero++;
}

console.log(\`¡Hemos llegado a \${suma}!\`);

// Resultado:
// Sumamos 1, total: 1
// Sumamos 2, total: 3
// ...
// Sumamos 6, total: 21
// ¡Hemos llegado a 21!`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

   

      {/* =========================
          DO WHILE
      ========================= */}
      <section id="do-while" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🔁 Bucle DO-WHILE — “Haz primero, pregunta después”</h2>
          <span className="topic-section__meta">do-while</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--warning">
              <p style={{ marginTop: 0 }}>
                <strong>DO-WHILE</strong> se ejecuta <strong>al menos 1 vez</strong>.
                Primero hace, y luego pregunta si debe repetir.
              </p>
            </div>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🔧</span> Diferencia con WHILE
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: ".75rem"
                  }}
                >
                  <div className="callout callout--info">
                    <h4 style={{ marginTop: 0 }}>WHILE: pregunta primero</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let num = 10;

while (num < 5) {       // ¿10 < 5? NO
  console.log(num);     // ❌ No se ejecuta nunca
  num++;
}

// Resultado: (nada)`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--ok">
                    <h4 style={{ marginTop: 0 }}>DO-WHILE: hace primero</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let num = 10;

do {
  console.log(num);     // ✅ Se ejecuta una vez
  num++;
} while (num < 5);      // Luego pregunta: ¿11 < 5? NO

// Resultado: 10`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="code-example" style={{ marginTop: ".75rem" }}>
                  <pre>
                    <code>{`do {
  // Código que se ejecuta AL MENOS UNA VEZ
} while (condición);`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🎲</span> Ejemplo: generar números hasta conseguir un 7
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let numero;
let intentos = 0;

console.log("🎲 Buscando el número 7...");

do {
  numero = Math.floor(Math.random() * 10) + 1; // 1..10
  intentos++;
  console.log(\`Intento \${intentos}: Salió el \${numero}\`);
} while (numero !== 7);

console.log(\`🎉 ¡Encontramos el 7 en \${intentos} intentos!\`);`}</code>
                  </pre>
                </div>

                <div className="callout callout--tip">
                  <h4 style={{ marginTop: 0 }}>💡 ¿Cuándo usar DO-WHILE?</h4>
                  <ul style={{ marginBottom: 0 }}>
                    <li>✅ Menús (mostrar opciones al menos una vez)</li>
                    <li>✅ Validaciones (pedir datos y repetir hasta que sea correcto)</li>
                    <li>✅ Juegos (“¿quieres jugar otra vez?”)</li>
                    <li>✅ Procesos “haz y pregunta al final”</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

         {/* =========================
          FOR
      ========================= */}
      <section id="for" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚡ Bucle FOR — Versión compacta de WHILE</h2>
          <span className="topic-section__meta">for</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--info">
              <p style={{ margin: 0 }}>
                Si ya entiendes <strong>while</strong>, el <strong>for</strong> es fácil:
                es lo mismo, pero con los 3 pasos colocados en una sola línea.
              </p>
            </div>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🔄</span> WHILE vs FOR (mismo ejemplo)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: ".75rem"
                  }}
                >
                  <div className="callout callout--warning">
                    <h4 style={{ marginTop: 0 }}>🔄 Con WHILE</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--ok">
                    <h4 style={{ marginTop: 0 }}>⚡ Con FOR</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    El <code>for</code> se lee así:
                    <br />
                    <strong>inicio</strong> → <strong>condición</strong> → ejecuta → <strong>incremento</strong> → repite.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📝</span> Las 3 partes del FOR (separadas por ;)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`for (inicio; condición; incremento) {
  // código que se repite
}`}</code>
                  </pre>
                </div>

                <ul>
                  <li>
                    <strong>1) 🏁 Inicio</strong> (<code>let i = 0</code>) → se ejecuta <strong>una vez</strong>
                  </li>
                  <li>
                    <strong>2) ❓ Condición</strong> (<code>i &lt; 5</code>) → se pregunta antes de cada vuelta
                  </li>
                  <li>
                    <strong>3) ⬆️ Incremento</strong> (<code>i++</code>) → ocurre después de cada vuelta
                  </li>
                </ul>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🤔</span> ¿Por qué FOR puede tener la variable dentro?
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <p>
                  Porque <code>for</code> fue diseñado con un espacio específico para declarar la variable:
                </p>

                <div className="code-example">
                  <pre>
                    <code>{`for (let i = 0; i < 3; i++) { ... }`}</code>
                  </pre>
                </div>

                <div className="callout callout--tip">
                  <p style={{ marginTop: 0 }}>
                    <strong>¿Cuál usar?</strong>
                  </p>
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      ✅ Variable <strong>dentro</strong>: más limpio, no “contamina” el resto del código.
                    </li>
                    <li>
                      ✅ Variable <strong>fuera</strong>: solo si necesitas usar <code>i</code> después del bucle.
                    </li>
                  </ul>
                </div>

                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: ".75rem",
                    marginTop: ".75rem"
                  }}
                >
                  <div className="callout callout--ok">
                    <h5 style={{ marginTop: 0 }}>Opción 1: dentro (más común)</h5>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 'i' solo existe dentro del for`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--warning">
                    <h5 style={{ marginTop: 0 }}>Opción 2: fuera (si necesitas i después)</h5>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let i = 0;

for (i = 0; i < 3; i++) {
  console.log(i);
}

console.log("i final:", i);`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Tabla rápida: diferencias FOR vs WHILE
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="callout callout--info">
                  <table className="table" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th>Aspecto</th>
                        <th>WHILE</th>
                        <th>FOR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Variable</strong>
                        </td>
                        <td>Siempre fuera</td>
                        <td>Dentro o fuera</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Incremento</strong>
                        </td>
                        <td>Manual dentro</td>
                        <td>Automático al final</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Después del bucle</strong>
                        </td>
                        <td>Variable disponible</td>
                        <td>Variable no disponible*</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    *Si declaras la variable dentro del <code>for</code>.
                  </p>
                </div>
              </div>
            </details>

            <div className="divider" style={{ marginTop: "1rem" }} />

            <details className="topic-details"  style={{ marginTop: "1rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📖</span> Ejemplo 1: Saludar 5 veces
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
  <pre>
    <code>{`// OPCIÓN 1: Concatenación (más sencilla para empezar)
for (let i = 0; i < 5; i++) {
  console.log("¡Hola! Esta es la vez número " + (i + 1));
}

// OPCIÓN 2: Template literal (forma moderna)
for (let i = 0; i < 5; i++) {
  console.log(\`¡Hola! Esta es la vez número \${i + 1}\`);
}`}</code>
  </pre>
</div>


                <div className="callout callout--warning">
                  <p style={{ margin: 0 }}>
                    ¿Por qué empezamos en 0? Porque en arrays, la primera posición es <code>0</code>.
                    Te acostumbrarás rápido 😊
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📋</span> Ejemplo 2: Recorrer un array de frutas
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
               <div className="code-example">
  <pre>
    <code>{`let frutas = ["manzana", "plátano", "naranja", "fresa"];

// OPCIÓN 1: Concatenación (más sencilla para empezar)
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}

// OPCIÓN 2: Template literal (forma moderna)
for (let i = 0; i < frutas.length; i++) {
  console.log(\`Fruta \${i + 1}: \${frutas[i]}\`);
}`}</code>
  </pre>
</div>


                <div className="callout callout--info">
                  <p style={{ margin: 0 }}>
                    <strong>Importante:</strong> <code>frutas.length</code> te dice cuántos elementos hay.
                    Si hay 4, <code>length</code> vale 4.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧮</span> Ejemplo 3: Sumar del 1 al 5
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma = suma + i; // también: suma += i
  console.log(\`Llevamos sumado: \${suma}\`);
}

console.log(\`El resultado final es: \${suma}\`);`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section
  id="for-variantes"
  className="topic-section"
  style={{ marginTop: "1.25rem" }}
>
  <div className="topic-section__title">
    <h2>🔁 Variantes del bucle FOR</h2>
    <span className="topic-section__meta">for-in / for-of / forEach</span>
  </div>

  <div className="card" style={{ marginTop: ".75rem" }}>
    <div className="card-body">

      <p>
        Además del bucle <code>for</code> clásico, JavaScript ofrece otras
        variantes que facilitan el recorrido de <strong>arrays</strong> y
        <strong> objetos</strong>. Cada una está pensada para un tipo concreto
        de estructura de datos.
      </p>

      <div className="divider" />

      {/* FOR...IN */}
      <details className="topic-details" open>
        <summary>
          <span className="summary-left">
            <span className="badge">🔑</span>
            Bucle <code>for...in</code>
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p>
            El bucle <strong><code>for...in</code></strong> se utiliza para
            <strong> recorrer las propiedades (claves)</strong> de un objeto.
            No recorre los valores directamente, sino los
            <strong> nombres de las propiedades</strong>.
          </p>

          <div className="callout callout--info">
            <p style={{ margin: 0 }}>
              💡 Es ideal para trabajar con <strong>objetos</strong>, no con
              arrays.
            </p>
          </div>

          <pre>
            <code className="language-js">{`const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Sevilla"
};

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}`}</code>
          </pre>

          <div className="callout callout--warning">
            <p style={{ margin: 0 }}>
              ⚠️ No se recomienda usar <code>for...in</code> con arrays, ya que
              puede producir resultados inesperados.
            </p>
          </div>
        </div>
      </details>

      <div className="divider" />

    {/* FOR...OF */}
<details className="topic-details">
  <summary>
    <span className="summary-left">
      <span className="badge">📦</span>
      Bucle <code>for...of</code>
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p>
      El bucle <strong><code>for...of</code></strong> se utiliza para recorrer
      directamente <strong>los valores</strong> de estructuras iterables,
      como <strong>arrays</strong>, <strong>strings</strong> o listas.
    </p>

    <p>
      A diferencia del bucle <code>for</code> tradicional, no es necesario
      trabajar con índices ni con la longitud del array. JavaScript se encarga
      de ir entregando cada valor uno a uno.
    </p>

    <div className="callout callout--ok">
      <p style={{ margin: 0 }}>
        ✅ Es la forma más clara y moderna de recorrer un <strong>array</strong>
        cuando solo necesitamos acceder a sus valores.
      </p>
    </div>

    <pre>
      <code className="language-js">{`const frutas = ["manzana", "plátano", "naranja"];

for (let fruta of frutas) {
  console.log(fruta);
}`}</code>
    </pre>

    <p>
      En este caso, la variable <code>fruta</code> toma directamente cada valor
      del array, sin necesidad de usar posiciones como
      <code>frutas[0]</code>, <code>frutas[1]</code>, etc.
    </p>

    <p>
      Al ser un <strong>bucle real</strong>, <code>for...of</code> permite
      controlar el flujo del programa usando instrucciones como
      <code>break</code> y <code>continue</code>.
    </p>

    <div className="callout callout--info">
      <p style={{ margin: 0 }}>
        🧠 Esto permite detener el recorrido antes de llegar al final del array.
      </p>
    </div>

    <pre>
      <code className="language-js">{`const numeros = [2, 4, 6, 7, 8, 10];

for (let numero of numeros) {
  if (numero % 2 !== 0) {
    console.log("Número impar encontrado:", numero);
    break;
  }

  console.log("Número par:", numero);
}`}</code>
    </pre>

    <p>
      En este ejemplo, el bucle se detiene en el momento en que encuentra el
      primer número impar (<code>7</code>). Los elementos posteriores del array
      ya no se recorren gracias a la instrucción <code>break</code>.
    </p>
  </div>
</details>

<div className="divider" />

{/* FOREACH */}
<details className="topic-details">
  <summary>
    <span className="summary-left">
      <span className="badge">🔄</span>
      Método <code>forEach()</code>
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p>
      <strong><code>forEach()</code></strong> no es un bucle tradicional,
      sino un <strong>método propio de los arrays</strong>. Ejecuta una función
      una vez por cada elemento del array, siempre de principio a fin.
    </p>

    <div className="callout callout--info">
      <p style={{ margin: 0 }}>
        🧠 <code>forEach</code> es muy usado en JavaScript moderno y en React,
        pero ofrece menos control que un bucle.
      </p>
    </div>

    <pre>
      <code className="language-js">{`const numeros = [1, 2, 3];

numeros.forEach((numero, index) => {
  console.log(\`Posición \${index}: \${numero}\`);
});`}</code>
    </pre>

    <div className="callout callout--warning">
      <p style={{ margin: 0 }}>
        ⚠️ <code>forEach</code> no se puede detener con <code>break</code>
        ni <code>continue</code>. Siempre recorre todos los elementos del array.
      </p>
    </div>
  </div>
</details>

<div className="divider" />

{/* RESUMEN */}
<div className="callout callout--tip">
  <p style={{ margin: 0 }}>
    📌 <strong>Resumen rápido:</strong><br />
    • <code>for...in</code> → recorrer propiedades de objetos<br />
    • <code>for...of</code> → recorrer valores de arrays (con control del flujo)<br />
    • <code>forEach()</code> → recorrer arrays ejecutando una función
  </p>
</div>

    </div>
  </div>
</section>

<section
  id="map-intro"
  className="topic-section"
  style={{ marginTop: "1.25rem" }}
>
  <div className="topic-section__title">
    <h2>🧩 ¿Cuándo aparece <code>map()</code>?</h2>
    <span className="topic-section__meta">arrays-avanzado</span>
  </div>

  <div className="card" style={{ marginTop: ".75rem" }}>
    <div className="card-body">

      <p>
        Hasta ahora hemos usado bucles y <code>forEach</code> para 
        <strong>recorrer arrays</strong>. En todos los casos, el objetivo era
        mostrar información o ejecutar una acción. De momento seguiremos usando for each y nos valdrá para los ejercicios que vamso a hacer
        pero quiero que te vaya sonando el método map (no es un bucle es una función). Por eso la dejo iniciada en este punto del manual. 
      </p>

      <div className="callout callout--info">
        <p style={{ margin: 0 }}>
          💡 Pero a veces no queremos solo recorrer un array…  
          queremos <strong>transformarlo</strong>.
        </p>
      </div>

      <p>
        El método <strong><code>map()</code></strong> lo vamos a introducir cuando ya
        sepamos trabajar con:
      </p>

      <ul>
        <li>✔ Arrays</li>
        <li>✔ Bucles</li>
        <li>✔ Funciones</li>
      </ul>

      <div className="divider" />

      <p>
        <code>map()</code> recorre un array, igual que un bucle, pero con una
        diferencia fundamental:
      </p>

      <div className="callout callout--ok">
        <p style={{ margin: 0 }}>
          🔁 <strong><code>map()</code> SIEMPRE devuelve un array nuevo</strong>,  
          sin modificar el original.
        </p>
      </div>

      <pre>
        <code className="language-js">{`const numeros = [1, 2, 3];

const dobles = numeros.map(numero => {
  return numero * 2;
});

console.log(dobles); // [2, 4, 6]
console.log(numeros); // [1, 2, 3]`}</code>
      </pre>

      <div className="callout callout--tip">
        <p style={{ margin: 0 }}>
          📌 Usa <code>map()</code> cuando quieras:
          <br />• transformar datos
          <br />• generar nuevas listas
          <br />• mostrar contenido dinámico en React
          <br />• por ejemplo un carrito que forma un array modificando no sólo leyendo. 
        </p>
      </div>

    </div>
  </div>
</section>



      {/* =========================
          COMPARACIÓN
      ========================= */}
      <section id="comparacion" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚖️ ¿Cuál bucle usar y cuándo?</h2>
          <span className="topic-section__meta">elección</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--ok">
              <p style={{ margin: 0 }}>
                <strong>Guía rápida:</strong> cada bucle tiene su momento perfecto. No es “uno es mejor”,
                es “uno encaja mejor”.
              </p>
            </div>

            <div
              className="content-details"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: ".75rem",
                marginTop: ".9rem"
              }}
            >
              <div className="callout callout--info">
                <h3 style={{ marginTop: 0 }}>🔄 Usa WHILE cuando…</h3>
                <ul>
                  <li>✅ No sabes cuántas veces repetir</li>
                  <li>✅ Dependes de una condición que cambia</li>
                  <li>✅ Quieres control manual del final</li>
                </ul>

                <p style={{ marginBottom: ".35rem" }}>
                  <strong>Ejemplos:</strong>
                </p>
                <ul style={{ marginBottom: 0 }}>
                  <li>“Sigue preguntando hasta respuesta correcta”</li>
                  <li>“Genera números hasta conseguir un 6”</li>
                  <li>“Continúa mientras el usuario quiera”</li>
                </ul>
              </div>

              <div className="callout callout--ok">
                <h3 style={{ marginTop: 0 }}>⚡ Usa FOR cuando…</h3>
                <ul>
                  <li>✅ Sabes cuántas veces repetir</li>
                  <li>✅ Vas a recorrer un array completo</li>
                  <li>✅ Necesitas un contador</li>
                </ul>

                <p style={{ marginBottom: ".35rem" }}>
                  <strong>Ejemplos:</strong>
                </p>
                <ul style={{ marginBottom: 0 }}>
                  <li>“Muestra todos los elementos de una lista”</li>
                  <li>“Cuenta del 1 al 10”</li>
                  <li>“Repite algo 5 veces”</li>
                </ul>
              </div>
            </div>

            <details className="topic-details"  style={{ marginTop: ".9rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧩</span> El mismo ejemplo con FOR y con WHILE
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div
                  className="content-details"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: ".75rem"
                  }}
                >
                  <div className="callout callout--ok">
                    <h4 style={{ marginTop: 0 }}>⚡ Con FOR</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let numeros = [10, 20, 30, 40, 50];

console.log("=== CON FOR ===");
for (let i = 0; i < numeros.length; i++) {
  console.log(\`Número \${i + 1}: \${numeros[i]}\`);
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--info">
                    <h4 style={{ marginTop: 0 }}>🔄 Con WHILE</h4>
                    <div className="code-example" style={{ margin: 0 }}>
                      <pre>
                        <code>{`let numeros = [10, 20, 30, 40, 50];

console.log("=== CON WHILE ===");
let posicion = 0;
while (posicion < numeros.length) {
  console.log(\`Número \${posicion + 1}: \${numeros[posicion]}\`);
  posicion++;
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
                  <p style={{ margin: 0 }}>
                    Ambos dan el mismo resultado. Elige el que te resulte más claro según el caso.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          ERRORES COMUNES
      ========================= */}
      <section id="errores" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚠️ Errores comunes (¡y cómo evitarlos!)</h2>
          <span className="topic-section__meta">errores</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--warning">
              <p style={{ margin: 0 }}>
                No te preocupes: estos fallos son normales al empezar. Lo importante es detectarlos rápido.
              </p>
            </div>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🚫</span> Error 1: bucle infinito
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`// ❌ MAL - ¡Nunca termina!
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  // ¡Olvidé aumentar el contador!
}

// ✅ BIEN - Termina correctamente
let contador2 = 1;
while (contador2 <= 5) {
  console.log(contador2);
  contador2++; // ¡No olvides esto!
}`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🚫</span> Error 2: confundir &lt; con &lt;=
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let lista = ["a", "b", "c"];

// ❌ MAL - se sale del array
for (let i = 0; i <= lista.length; i++) {
  console.log(lista[i]); // en i=3 → undefined
}

// ✅ BIEN
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]); // i=0,1,2
}`}</code>
                  </pre>
                </div>

                <div className="callout callout--tip">
                  <p style={{ margin: 0 }}>
                    Regla: si recorres un array, casi siempre es <code>i &lt; array.length</code>.
                  </p>
                </div>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🚫</span> Error 3: empezar en 1 en lugar de 0 (en arrays)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>

              <div className="topic-details__content">
                <div className="code-example">
                  <pre>
                    <code>{`let frutas = ["manzana", "plátano", "naranja"];

// ❌ MAL - se salta el primer elemento
for (let i = 1; i < frutas.length; i++) {
  console.log(frutas[i]); // "plátano", "naranja"
}

// ✅ BIEN - muestra todos
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // "manzana", "plátano", "naranja"
}`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          EJERCICIOS
      ========================= */}
      <section id="practica" className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🎯 Ejercicios para practicar</h2>
          <span className="topic-section__meta">práctica</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--ok">
              <p style={{ margin: 0 }}>
                Intenta hacerlos primero sin mirar. Luego abre la solución y compárala con la tuya.
              </p>
            </div>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📝</span> Ejercicio 1: tu primer FOR (1 al 3)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  <strong>Objetivo:</strong> mostrar los números del 1 al 3 con un bucle <code>for</code>.
                </p>
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">👀</span> Ver solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`for (let i = 1; i <= 3; i++) {
  console.log(\`Número: \${i}\`);
}
// Resultado: 1, 2, 3`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📝</span> Ejercicio 2: tu primer WHILE (5 al 1)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  <strong>Objetivo:</strong> contar del 5 al 1 (hacia atrás) con <code>while</code>.
                </p>
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">👀</span> Ver solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`let numero = 5;

while (numero >= 1) {
  console.log(\`Número: \${numero}\`);
  numero--; // restamos 1
}

// Resultado: 5, 4, 3, 2, 1`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </div>
            </details>

            <details className="topic-details"  style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">📝</span> Ejercicio 3: recorrer un array (FOR y WHILE)
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  <strong>Objetivo:</strong> mostrar todos los nombres: <code>["Ana","Luis","María"]</code> con{" "}
                  <code>for</code> y con <code>while</code>.
                </p>

                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">👀</span> Ver solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`let nombres = ["Ana", "Luis", "María"];

// CON FOR
for (let i = 0; i < nombres.length; i++) {
  console.log(\`Nombre: \${nombres[i]}\`);
}

// CON WHILE
let posicion = 0;
while (posicion < nombres.length) {
  console.log(\`Nombre: \${nombres[posicion]}\`);
  posicion++;
}`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          RESUMEN
      ========================= */}
      <section id="resumen" className="topic-section" style={{ marginTop: "1.25rem", marginBottom: "2rem" }}>
        <div className="topic-section__title">
          <h2>📋 Resumen de bucles</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <div className="card" style={{ marginTop: ".75rem" }}>
          <div className="card-body">
            <div className="callout callout--info">
              <h4 style={{ marginTop: 0 }}>🎉 ¡Felicidades! Ya sabes usar bucles</h4>
              <p style={{ marginBottom: ".5rem" }}>
                En esta lección has aprendido:
              </p>
              <ul style={{ marginBottom: 0 }}>
                <li>Qué son los bucles: estructuras que repiten código automáticamente</li>
                <li>Bucle <strong>WHILE</strong>: “mientras que…”</li>
                <li>Bucle <strong>FOR</strong>: versión compacta para contadores</li>
                <li>Bucle <strong>DO-WHILE</strong>: se ejecuta al menos una vez</li>
                <li>Recorrer arrays: el uso más común</li>
                <li>Evitar errores: bucles infinitos e índices fuera de rango</li>
                <li>Cuándo usar cada uno: según la situación</li>
              </ul>
              <p className="muted" style={{ marginTop: ".75rem", marginBottom: 0 }}>
                Los bucles son fundamentales. Con práctica se vuelven naturales.
              </p>
            </div>

            <div className="divider" style={{ marginTop: "1rem" }} />

            <h3 style={{ marginTop: "1rem" }}>🚀 Siguiente paso</h3>
            <p>
              Ahora puedes combinarlos con <strong>variables</strong>, <strong>arrays</strong> y{" "}
              <strong>condicionales</strong> para crear programas más interesantes.
            </p>

              {/* =========================
          ENLACES
      ========================= */}
      <section className="resources-box">
        <div className="resources-box__header">
          <h3 className="resources-box__title">🔗 Enlaces relacionados</h3>
          <p className="resources-box__hint">
            Revisa el resto del módulo
          </p>
        </div>

        <ul className="resources-list">
          <li>
            <a href="/5.3">➜ M5.3 · Saltos</a>
          </li>
          <li>
            <a href="/5.1">➜ M5.1 · Condicionales</a>
          </li>
          <li>
            <a href="/tema5">➜ Volver a M5 · Estructuras de control</a>
          </li>
        </ul>
      </section>
          </div>
        </div>
      </section>
    </article>
  );
}
