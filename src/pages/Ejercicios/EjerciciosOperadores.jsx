// src/pages/Ejercicios/EjerciciosOperadores.jsx
import { Link } from "react-router-dom";

export default function EjerciciosOperadores() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">🧩</span>
          <h1>Ejercicio: Operadores en JavaScript</h1>
          <p className="muted">Aprende a usar operadores aritméticos y lógicos</p>
        </div>
      </header>

      {/* MIGAS + CTA */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="card" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <div className="muted">
            <span>Inicio</span> <span aria-hidden="true">›</span>{" "}
            <span>Fundamentos</span> <span aria-hidden="true">›</span>{" "}
            <span>Operadores</span> <span aria-hidden="true">›</span>{" "}
            <strong>Ejercicio Operadores</strong>
          </div>

          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
            <Link to="/operadores" className="btn btn-ghost">
              ← Volver a Operadores
            </Link>
            <Link to="/tema2" className="btn btn-ghost">
              🔧 Volver a Fundamentos
            </Link>
          </div>
        </div>

        {/* INTRO */}
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎯 Ejercicios Básicos de Operadores</h2>
          <p className="muted">
            Primeros pasos con operadores en JavaScript. Lee cada enunciado y despliega para ver la solución.
          </p>
        </div>
      </section>

      {/* =========================
          10 EJERCICIOS MUY SIMPLES
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>🔢 10 Ejercicios muy simples</h2>
          <span className="topic-section__meta">1–10</span>
        </div>

        {/* 1 */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">1</span> Suma simple
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Suma 3 + 7 y muestra el resultado.</p>
            <pre><code className="language-js">{`let resultado = 3 + 7;
console.log("Resultado:", resultado); // 10`}</code></pre>
          </div>
        </details>

        {/* 2 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">2</span> Resta simple
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Resta 10 - 4 y muestra el resultado.</p>
            <pre><code className="language-js">{`let resultado = 10 - 4;
console.log("Resultado:", resultado); // 6`}</code></pre>
          </div>
        </details>

        {/* 3 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">3</span> Multiplicación
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Multiplica 5 × 6 y muestra el resultado.</p>
            <pre><code className="language-js">{`let resultado = 5 * 6;
console.log("Resultado:", resultado); // 30`}</code></pre>
          </div>
        </details>

        {/* 4 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">4</span> División
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Divide 20 ÷ 4 y muestra el resultado.</p>
            <pre><code className="language-js">{`let resultado = 20 / 4;
console.log("Resultado:", resultado); // 5`}</code></pre>
          </div>
        </details>

        {/* 5 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">5</span> Resto de una división
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>El resto o modulo nos da el numero que sobra en una división.</p>
            <p>Calcula el resto de 17 ÷ 5.</p>
            <pre><code className="language-js">{`let resultado = 17 % 5;
console.log("Resultado:", resultado); // 2`}</code></pre>
          </div>
        </details>

        {/* 6 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">6</span> Potencia
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Calcula 2 elevado a 4.</p>
            <pre><code className="language-js">{`let resultado = 2 ** 4;
console.log("Resultado:", resultado); // 16`}</code></pre>
          </div>
        </details>

        {/* 7 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">7</span> Concatenación de texto
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Une "Hola" y "Mundo".</p>
            <pre><code className="language-js">{`let resultado = "Hola" + " " + "Mundo";
console.log(resultado); // "Hola Mundo"`}</code></pre>
          </div>
        </details>

        {/* 8 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">8</span> Comparación simple
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Sólo compara el valor de dos variables</p>
            <p>Comprueba si 5 es mayor que 2.</p>
            <pre><code className="language-js">{`let resultado = 5 > 2;
console.log(resultado); // true`}</code></pre>
          </div>
        </details>

        {/* 9 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">9</span> Igualdad estricta
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Compara el valor y el tipo de dos variables. Un <strong>ejemplo</strong> sería:
            </p>
            <p>Comprueba si "5" === 5.</p>
            <p>Observa que uno es un string por eso va entre comillas y el otro un número.</p>
            <pre><code className="language-js">{`let resultado = "5" === 5;
console.log(resultado); // false`}</code></pre>
          </div>
        </details>

        {/* 10 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">10</span> Negación lógica
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>La negación lógica invierte el valor de verdad de una expresión.</p>
            <p>Usa !true y muestra el resultado.</p>
            <pre><code className="language-js">{`let resultado = !true;
console.log(resultado); // false`}</code></pre>
          </div>
        </details>
      </section>

      {/* =========================
          11–20 COMPARACIÓN Y LÓGICA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>⚖️ 10 Ejercicios de comparación y lógica</h2>
          <span className="topic-section__meta">11–20</span>
        </div>

        {/* 11 */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">11</span> Mayor que / Menor que
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Comprueba si 8 &gt; 3 y si 2 &lt; 1. Muestra ambos resultados.</p>
            <pre><code className="language-js">{`let a = 8 > 3;   // true
let b = 2 < 1;   // false
console.log(a, b);`}</code></pre>
          </div>
        </details>

        {/* 12 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">12</span> Mayor o igual / Menor o igual
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Evalúa 5 &gt;= 5 y 4 &lt;= 3. Muestra los resultados.</p>
            <pre><code className="language-js">{`let r1 = 5 >= 5; // true
let r2 = 4 <= 3; // false
console.log(r1, r2);`}</code></pre>
          </div>
        </details>

        {/* 13 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">13</span> Igualdad suelta vs estricta
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Compara "10" == 10 y "10" === 10. Observa la diferencia.</p>
            <pre><code className="language-js">{`let eqSuelta = "10" == 10;   // true
let eqEstricta = "10" === 10; // false
console.log(eqSuelta, eqEstricta);`}</code></pre>
          </div>
        </details>

        {/* 14 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">14</span> Distinto (!=) vs estrictamente distinto (!==)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Compara 7 != "7" y 7 !== "7".</p>
            <pre><code className="language-js">{`let neSuelto = 7 != "7";    // false
let neEstricto = 7 !== "7"; // true
console.log(neSuelto, neEstricto);`}</code></pre>
          </div>
        </details>

        {/* 15 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">15</span> Comparando números del mundo real
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Compara dos precios: 12.5 y 12.99. ¿Es el primero menor?</p>
            <pre><code className="language-js">{`let precio1 = 12.5;
let precio2 = 12.99;
let masBarato = precio1 < precio2; // true
console.log(masBarato);`}</code></pre>
          </div>
        </details>

        {/* 16 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">16</span> AND (&&) básico
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Evalúa si tieneDni y tieneCita son ambos true.</p>
            <pre><code className="language-js">{`let tieneDni = true;
let tieneCita = false;
let puedeEntrar = tieneDni && tieneCita; // false
console.log(puedeEntrar);`}</code></pre>
          </div>
        </details>

        {/* 17 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">17</span> OR (||) básico
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Evalúa si esFestivo o esDomingo (al menos uno true).</p>
            <pre><code className="language-js">{`let esFestivo = false;
let esDomingo = true;
let descanso = esFestivo || esDomingo; // true
console.log(descanso);`}</code></pre>
          </div>
        </details>

        {/* 18 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">18</span> NOT (!)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Aplica negación a una variable booleana.</p>
            <pre><code className="language-js">{`let encendido = true;
let apagado = !encendido; // false
console.log(apagado);`}</code></pre>
          </div>
        </details>

        {/* 19 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">19</span> Mezcla: comparación + AND
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Con nota=70 y asistencia=80, evalúa si aprueba: (nota ≥ 50) y (asistencia ≥ 75).
            </p>
            <pre><code className="language-js">{`let nota = 70;
let asistencia = 80;
let aprueba = (nota >= 50) && (asistencia >= 75); // true
console.log(aprueba);`}</code></pre>
          </div>
        </details>

        {/* 20 */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">20</span> Mezcla: OR + NOT
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Con saldo=0, tieneCredito=true y bloqueado=false, evalúa: (saldo &gt; 0 || tieneCredito) && !bloqueado.
            </p>
            <pre><code className="language-js">{`let saldo = 0;
let tieneCredito = true;
let bloqueado = false;

let puedeComprar = (saldo > 0 || tieneCredito) && !bloqueado; // true
console.log(puedeComprar);`}</code></pre>
          </div>
        </details>
      </section>

      {/* =========================
          EXTRA: CALCULADORA
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧮 Ejercicio Extra: Calculadora básica</h2>
          <span className="topic-section__meta">extra</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Enunciado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>Crea una pequeña calculadora que sume, reste, multiplique y divida dos números.</p>

            <pre><code className="language-js">{`let a = 12;
let b = 4;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);`}</code></pre>
          </div>
        </details>
      </section>

      {/* =========================
          EXTRA 1: E-commerce
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🛒 Ejercicio Extra: Envío gratis y cupón</h2>
          <span className="topic-section__meta">extra</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Enunciado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>En una tienda online:</p>
            <ul>
              <li>
                El <strong>envío es gratis</strong> si el cliente es <code>premium</code> <em>o</em> si el <code>total</code> ≥ 50€, y además{" "}
                <strong>no</strong> hay <code>bloqueoDireccion</code>.
              </li>
              <li>
                Un <strong>cupón</strong> se puede aplicar si <strong>no</strong> está <code>cuponExpirado</code> y (es{" "}
                <code>nuevoCliente</code> <em>o</em> el <code>total</code> ≥ 30€).
              </li>
            </ul>
            <p>Crea las expresiones lógicas y muestra los resultados por consola.</p>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">💡</span> Ver solución
                </span>
                <span className="chev" aria-hidden="true">⌄</span>
              </summary>
              <div className="topic-details__content">
                <pre><code className="language-js">{`let premium = false;
let total = 42;
let bloqueoDireccion = false;

let cuponExpirado = false;
let nuevoCliente = true;

// Envío gratis: (premium || total >= 50) && !bloqueoDireccion
let envioGratis = (premium || total >= 50) && !bloqueoDireccion;

// Cupón aplicable: !cuponExpirado && (nuevoCliente || total >= 30)
let cuponAplicable = !cuponExpirado && (nuevoCliente || total >= 30);

console.log("¿Envío gratis?", envioGratis);       // false con estos datos
console.log("¿Cupón aplicable?", cuponAplicable); // true con estos datos`}</code></pre>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* FOOTER NAV */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="card" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/operadores" className="btn btn-ghost">
            ← Volver a Operadores
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡A practicar! 💪</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Abre la consola y prueba cambiando los valores.
            </p>
          </div>

          <Link to="/ejercicios" className="btn btn-primary">
            Ver todos los ejercicios →
          </Link>
        </div>
      </section>
    </article>
  );
}
