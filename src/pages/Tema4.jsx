// src/pages/Operadores.jsx
import { Link } from "react-router-dom";

export default function Operadores() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M4</span>
          <h1>Operadores en JavaScript</h1>
          <p className="muted">
            Aprende a usar los “símbolos-herramienta” del lenguaje para hacer cálculos, comparar valores y
            construir lógica paso a paso.
          </p>
        </div>
      </header>

      {/* NAV / ACCIONES */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        
        {/* VIDEO */}
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video Explicativo sobre Operadores</h2>
          <p className="muted">
            En este video aprenderás de manera visual cómo funcionan los <strong>operadores en JavaScript</strong>.
            Te ayudará a consolidar lo visto en la lección con ejemplos prácticos y fáciles de seguir.
          </p>

          <div className="video-container" style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: "16px", overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/A9TBH7tKwVk?si=h_VLPq-CQLyyi-Sy"
              title="Video: Operadores en JavaScript"
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* =========================
          CONTENIDO EN DETAILS
      ========================= */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        {/* 1) INTRO */}
        <details className="topic-details" >
          <summary>
            <span className="summary-left">
              <span className="badge">🧮</span> ¿Qué son los Operadores?
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los <strong>operadores</strong> son como herramientas que nos permiten hacer diferentes operaciones con nuestros datos en
              JavaScript. Son símbolos especiales que le dicen al programa qué hacer con los valores.
            </p>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Piénsalo así</p>
              <p className="muted">
                Si las variables son como cajas que guardan cosas, los operadores son como las herramientas que usamos para trabajar con esas cajas:
              </p>
              <ul className="muted">
                <li>➕ <strong>Sumar</strong> el contenido de dos cajas</li>
                <li>📏 <strong>Comparar</strong> qué caja es más grande</li>
                <li>🔄 <strong>Cambiar</strong> lo que hay dentro de una caja</li>
                <li>🔍 <strong>Verificar</strong> si algo es verdadero o falso</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 2) ARITMÉTICOS */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">➕</span> Operadores Aritméticos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los operadores aritméticos son los que usamos para hacer <strong>matemáticas básicas</strong>. Son como usar una calculadora, pero en código.
            </p>
<figure className="media">
          <img
            src="/operadores.png"
            alt="Operadores Aritméticos en Atención Telefónica"
          />
          <figcaption>
          Operadores aritméticos en JavaScript. 
          </figcaption>
        </figure>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué hace</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>+</code></td>
                    <td>Suma</td>
                    <td>Suma dos números</td>
                    <td><code>5 + 3 = 8</code></td>
                  </tr>
                  <tr>
                    <td><code>-</code></td>
                    <td>Resta</td>
                    <td>Resta dos números</td>
                    <td><code>10 - 4 = 6</code></td>
                  </tr>
                  <tr>
                    <td><code>*</code></td>
                    <td>Multiplicación</td>
                    <td>Multiplica dos números</td>
                    <td><code>6 * 7 = 42</code></td>
                  </tr>
                  <tr>
                    <td><code>/</code></td>
                    <td>División</td>
                    <td>Divide dos números</td>
                    <td><code>15 / 3 = 5</code></td>
                  </tr>
                  <tr>
                    <td><code>%</code></td>
                    <td>Resto (Módulo)</td>
                    <td>El sobrante de una división</td>
                    <td><code>17 % 5 = 2</code></td>
                  </tr>
                  <tr>
                    <td><code>**</code></td>
                    <td>Potencia</td>
                    <td>Eleva un número a una potencia</td>
                    <td><code>2 ** 3 = 8</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplos Prácticos con Código</h4>
              <pre><code className="language-js">{`// 🧮 Operaciones básicas
let precio = 25;
let cantidad = 3;
let descuento = 5;

// Suma - Calcular total sin descuento
let totalSinDescuento = precio + descuento;
console.log("Total sin descuento:", totalSinDescuento); // 30

// Resta - Aplicar descuento
let precioConDescuento = precio - descuento;
console.log("Precio con descuento:", precioConDescuento); // 20

// Multiplicación - Total a pagar
let totalAPagar = precioConDescuento * cantidad;
console.log("Total a pagar:", totalAPagar); // 60

// División - Precio por persona si se divide entre 2
let precioPorPersona = totalAPagar / 2;
console.log("Precio por persona:", precioPorPersona); // 30

// Módulo - ¿Es par o impar?
let numero = 17;
let resto = numero % 2;
console.log("17 dividido entre 2 da resto:", resto); // 1 (es impar)

// Potencia - Calcular área de un cuadrado
let lado = 4;
let area = lado ** 2;
console.log("Área del cuadrado:", area); // 16`}</code></pre>
            </div>
            <div className="card" style={{ marginTop: "1rem" }}>
  <h4 style={{ marginTop: 0 }}>🧪 Ejercicio guiado: Operadores en acción</h4>

  

  <h5 style={{ marginTop: "1rem" }}>📘 Enunciado</h5>
  <ul className="muted">
    <li>Declara una variable numérica.</li>
    <li>Muestra su valor inicial en un párrafo.</li>
    <li>Modifica su valor usando un operador aritmético.</li>
    <li>Muestra el nuevo valor en otro párrafo.</li>
  </ul>

  <h5 style={{ marginTop: ".75rem" }}>🧩 Código base</h5>

  <pre>
    <code className="language-html">{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio operadores</title>
</head>
<body>

  <p id="resultado1"></p>
  <p id="resultado2"></p>

  <script>
    // 1. Declara una variable con un valor inicial


    // 2. Muestra el valor inicial en el primer párrafo


    // 3. Modifica la variable usando un operador aritmético


    // 4. Muestra el nuevo valor en el segundo párrafo
  </script>

</body>
</html>`}</code>
  </pre>

  <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
    <p className="callout__title">🎯 ¿Qué estás practicando aquí?</p>
    <ul className="muted">
      <li>Variables</li>
      <li>Operadores aritméticos (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>)</li>
      <li>Concatenación de texto y variables</li>
      <li>Manipulación básica del DOM</li>
    </ul>
  </div>
</div>


            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 ¡Importante sobre el Módulo (%)!</p>
              <p className="muted">
                El operador <code>%</code> no es un porcentaje. Te da el <strong>resto</strong> de una división:
              </p>
              <ul className="muted">
                <li><code>10 % 3 = 1</code> (porque 10 ÷ 3 = 3 y sobra 1)</li>
                <li><code>15 % 4 = 3</code> (porque 15 ÷ 4 = 3 y sobran 3)</li>
                <li>Es muy útil para saber si un número es par: <code>numero % 2 === 0</code></li>
              </ul>
            </div>
          </div>
        </details>

        {/* 3) ASIGNACIÓN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Operadores de Asignación
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los operadores de asignación nos permiten <strong>guardar valores en variables</strong> y hacer operaciones al mismo tiempo.
              Son como escribir en una libreta de forma más rápida.
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué hace</th>
                    <th>Ejemplo</th>
                    <th>Es igual a...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>=</code></td>
                    <td>Asignación</td>
                    <td>Guarda un valor</td>
                    <td><code>x = 5</code></td>
                    <td>x vale 5</td>
                  </tr>
                  <tr>
                    <td><code>+=</code></td>
                    <td>Suma y asigna</td>
                    <td>Suma y luego guarda</td>
                    <td><code>x += 3</code></td>
                    <td><code>x = x + 3</code></td>
                  </tr>
                  <tr>
                    <td><code>-=</code></td>
                    <td>Resta y asigna</td>
                    <td>Resta y luego guarda</td>
                    <td><code>x -= 2</code></td>
                    <td><code>x = x - 2</code></td>
                  </tr>
                  <tr>
                    <td><code>*=</code></td>
                    <td>Multiplica y asigna</td>
                    <td>Multiplica y luego guarda</td>
                    <td><code>x *= 4</code></td>
                    <td><code>x = x * 4</code></td>
                  </tr>
                  <tr>
                    <td><code>/=</code></td>
                    <td>Divide y asigna</td>
                    <td>Divide y luego guarda</td>
                    <td><code>x /= 2</code></td>
                    <td><code>x = x / 2</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplos Prácticos - Contador de Puntos</h4>
              <pre><code className="language-js">{`// 🎮 Simulemos un videojuego con puntos
let puntos = 0;
console.log("Puntos iniciales:", puntos); // 0

// El jugador mata un enemigo pequeño (+10 puntos)
puntos += 10;
console.log("Después de enemigo pequeño:", puntos); // 10

// El jugador mata un jefe (+50 puntos)
puntos += 50;
console.log("Después del jefe:", puntos); // 60

// El jugador pierde una vida (-15 puntos)
puntos -= 15;
console.log("Después de perder vida:", puntos); // 45

// Bonus doble por combo
puntos *= 2;
console.log("Con bonus doble:", puntos); // 90

// Se divide los puntos entre el equipo (3 personas)
puntos /= 3;
console.log("Puntos por persona:", puntos); // 30`}</code></pre>
            </div>
          </div>
        </details>

        {/* 4) STRINGS */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Operadores para Texto (Strings)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Cuando trabajamos con <strong>texto</strong>, también tenemos operadores especiales. El más importante es la{" "}
              <strong>concatenación</strong>, que significa "unir textos".
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué hace</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>+</code></td>
                    <td>Concatenación</td>
                    <td>Une dos textos</td>
                    <td><code>"Hola" + " " + "mundo"</code></td>
                  </tr>
                  <tr>
                    <td><code>+=</code></td>
                    <td>Concatenar y asignar</td>
                    <td>Agrega texto al final</td>
                    <td><code>texto += "más texto"</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplos Básicos de Concatenación</h4>
              <pre><code className="language-js">{`// 👋 Construcción de mensajes
let nombre = "Ana";
let apellido = "García";
let edad = 16;

// Método 1: Concatenación con +
let mensaje1 = "Hola, soy " + nombre + " " + apellido;
console.log(mensaje1); // "Hola, soy Ana García"

// Método 2: Concatenación con +=
let mensaje2 = "Mi nombre es ";
mensaje2 += nombre;
mensaje2 += " y tengo ";
mensaje2 += edad;
mensaje2 += " años";
console.log(mensaje2); // "Mi nombre es Ana y tengo 16 años"`}</code></pre>
            </div>
          </div>
        </details>

        {/* 5) COMPARACIÓN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">⚖️</span> Operadores de Comparación
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los operadores de comparación nos permiten <strong>comparar valores</strong> y obtener una respuesta de{" "}
              <strong>verdadero (true) o falso (false)</strong>. Son como hacer preguntas: "¿Es esto mayor que aquello?"
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué pregunta</th>
                    <th>Ejemplo</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>==</code></td>
                    <td>Igualdad</td>
                    <td>¿Son iguales?</td>
                    <td><code>5 == "5"</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>===</code></td>
                    <td>Igualdad estricta</td>
                    <td>¿Son exactamente iguales?</td>
                    <td><code>5 === "5"</code></td>
                    <td><code>false</code></td>
                  </tr>
                  <tr>
                    <td><code>!=</code></td>
                    <td>Desigualdad</td>
                    <td>¿Son diferentes?</td>
                    <td><code>10 != 5</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>!==</code></td>
                    <td>Desigualdad estricta</td>
                    <td>¿Son completamente diferentes?</td>
                    <td><code>10 !== "10"</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>&gt;</code></td>
                    <td>Mayor que</td>
                    <td>¿Es mayor?</td>
                    <td><code>8 &gt; 3</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>&lt;</code></td>
                    <td>Menor que</td>
                    <td>¿Es menor?</td>
                    <td><code>2 &lt; 7</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>&gt;=</code></td>
                    <td>Mayor o igual</td>
                    <td>¿Es mayor o igual?</td>
                    <td><code>5 &gt;= 5</code></td>
                    <td><code>true</code></td>
                  </tr>
                  <tr>
                    <td><code>&lt;=</code></td>
                    <td>Menor o igual</td>
                    <td>¿Es menor o igual?</td>
                    <td><code>4 &lt;= 9</code></td>
                    <td><code>true</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplos Prácticos - Sistema de Edades</h4>
              <pre><code className="language-js">{`// 🎂 Verificar edades para diferentes actividades
let edad = 17;
let edadMinimaNoche = 18;
let edadMinimaConducir = 16;
let edadMaximaDescuento = 12;

// ¿Puede ir a la discoteca?
let puedeIrDiscoteca = edad >= edadMinimaNoche;
console.log("¿Puede ir a la discoteca?", puedeIrDiscoteca); // false

// ¿Puede conducir?
let puedeConducir = edad >= edadMinimaConducir;
console.log("¿Puede conducir?", puedeConducir); // true

// ¿Tiene descuento de niño?
let tieneDescuentoNino = edad <= edadMaximaDescuento;
console.log("¿Tiene descuento de niño?", tieneDescuentoNino); // false

// ¿Es exactamente menor de edad?
let esMenorDeEdad = edad < 18;
console.log("¿Es menor de edad?", esMenorDeEdad); // true`}</code></pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ ¡CUIDADO con == vs ===!</p>
              <div className="grid grid-2" style={{ gap: "1rem" }}>
                <div className="card">
                  <h5 style={{ marginTop: 0 }}>== (Igualdad simple)</h5>
                  <pre><code className="language-js">{`5 == "5"    // true ✅
0 == false  // true ✅
"" == false // true ✅`}</code></pre>
                  <p className="muted">Convierte tipos automáticamente</p>
                </div>
                <div className="card">
                  <h5 style={{ marginTop: 0 }}>=== (Igualdad estricta)</h5>
                  <pre><code className="language-js">{`5 === "5"    // false ❌
0 === false  // false ❌
"" === false // false ❌`}</code></pre>
                  <p className="muted">NO convierte tipos</p>
                </div>
              </div>
              <p className="muted" style={{ marginTop: ".75rem" }}>
                <strong>💡 Recomendación:</strong> Siempre usa <code>===</code> y <code>!==</code>. ¡Es más seguro!
              </p>
            </div>
          </div>
        </details>

        {/* 6) LÓGICOS */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Operadores Lógicos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los operadores lógicos nos permiten <strong>combinar condiciones</strong> y crear lógica más compleja.
              Son como hacer preguntas con "Y", "O" y "NO".
            </p>
             {/* VIDEO */}
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video Explicativo sobre Operadores</h2>
          <p className="muted">
            En este video aprenderás de manera visual cómo funcionan los <strong>operadores en JavaScript</strong>.
            Te ayudará a consolidar lo visto en la lección con ejemplos prácticos y fáciles de seguir.
          </p>

          <div className="video-container" style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: "16px", overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/S6qx7TCM4hU"
              title="Video: Operadores en JavaScript"
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué hace</th>
                    <th>Cuándo es true</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>&&</code></td>
                    <td>AND (Y)</td>
                    <td>Ambas condiciones deben ser verdaderas</td>
                    <td>Cuando AMBAS son true</td>
                    <td><code>true && true</code></td>
                  </tr>
                  <tr>
                    <td><code>||</code></td>
                    <td>OR (O)</td>
                    <td>Al menos una condición debe ser verdadera</td>
                    <td>Cuando AL MENOS UNA es true</td>
                    <td><code>true || false</code></td>
                  </tr>
                  <tr>
                    <td><code>!</code></td>
                    <td>NOT (NO)</td>
                    <td>Invierte el valor lógico</td>
                    <td>Devuelve siempre el contrario al valor inicial</td>
                    <td><code>!false // true</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🔍 Tablas de Verdad Visuales</h4>

              <div className="grid grid-3" style={{ gap: "1rem" }}>
                <div className="card">
                  <h5 style={{ marginTop: 0 }}>AND (&&) - "Y"</h5>
                  <div style={{ overflowX: "auto" }}>
                    <table className="table">
                      <thead>
                        <tr><th>A</th><th>B</th><th>A && B</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>true</td><td>true</td><td>true</td></tr>
                        <tr><td>true</td><td>false</td><td>false</td></tr>
                        <tr><td>false</td><td>true</td><td>false</td></tr>
                        <tr><td>false</td><td>false</td><td>false</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="muted"><strong>Solo es true cuando AMBOS son true</strong></p>
                </div>

                <div className="card">
                  <h5 style={{ marginTop: 0 }}>OR (||) - "O"</h5>
                  <div style={{ overflowX: "auto" }}>
                    <table className="table">
                      <thead>
                        <tr><th>A</th><th>B</th><th>A || B</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>true</td><td>true</td><td>true</td></tr>
                        <tr><td>true</td><td>false</td><td>true</td></tr>
                        <tr><td>false</td><td>true</td><td>true</td></tr>
                        <tr><td>false</td><td>false</td><td>false</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="muted"><strong>Es true cuando AL MENOS UNO es true</strong></p>
                </div>

                <div className="card">
                  <h5 style={{ marginTop: 0 }}>NOT (!) - "NO"</h5>
                  <div style={{ overflowX: "auto" }}>
                    <table className="table">
                      <thead>
                        <tr><th>A</th><th>!A</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>true</td><td>false</td></tr>
                        <tr><td>false</td><td>true</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="muted"><strong>Invierte el valor</strong></p>
                </div>
              </div>

              <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
                <p className="callout__title">📌 ¿Cómo se evalúan? (Prioridad)</p>
                <p className="muted">
                  En JavaScript, <strong>la prioridad importa</strong> porque no todos los operadores se calculan a la vez. El orden es:
                </p>
                <ol className="muted">
                  <li><code>!</code> (NOT) → primero se niega la condición.</li>
                  <li><code>&&</code> (AND) → después se comprueba el "Y".</li>
                  <li><code>||</code> (OR) → al final se comprueba el "O".</li>
                </ol>
                <p className="muted">
                  Esto significa que <code>&&</code> siempre se evalúa antes que <code>||</code>. Si quieres cambiar el orden, usa <code>()</code>.
                </p>
              </div>

              <div className="card" style={{ marginTop: "1rem" }}>
                <h4 style={{ marginTop: 0 }}>📌 Ejemplo claro de prioridad y paréntesis</h4>
                <p className="muted">
                  Recuerda: primero se evalúa <code>&&</code> y después <code>||</code>.  
                  Si quieres cambiar ese orden, usa paréntesis.
                </p>
                <pre><code className="language-js">{`// Ejemplo: decidir si puedo jugar a la consola
let tengoTiempo = true;
let tengoExamen = false;
let permisoPadres = false;

// 🔹 Sin paréntesis
let resultado1 = tengoTiempo || tengoExamen && permisoPadres;
// Se evalúa como: tengoTiempo || (tengoExamen && permisoPadres)
// = true || (false && false)
// = true || false
// = true ✅

// 🔹 Con paréntesis
let resultado2 = (tengoTiempo || tengoExamen) && permisoPadres;
// Se evalúa como: (true || false) && false
// = true && false
// = false ❌`}</code></pre>
                <p className="muted">
                  👉 Con el mismo código, el resultado cambia. Usar paréntesis <strong>aclara la lógica</strong> y evita errores.
                </p>
              </div>

              <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
                <p className="callout__title">🎯 Trucos para Recordar</p>
                <ul className="muted">
                  <li><strong>&&</strong> (AND): “Ambos deben estar bien” — como necesitar llave <em>y</em> código para abrir</li>
                  <li><strong>||</strong> (OR): “Al menos uno debe estar bien” — como pagar con efectivo <em>o</em> tarjeta</li>
                  <li><strong>!</strong> (NOT): “Lo contrario” — como encender/apagar un interruptor</li>
                </ul>

                <div style={{ marginTop: ".75rem" }}>
                  <p className="muted"><strong>🌍 Ejemplos de la Vida Real</strong></p>
                  <ul className="muted">
                    <li><code>tieneDinero && estaAbierta</code> → “Puedo comprar si tengo dinero Y la tienda está abierta”</li>
                    <li><code>esFinDeSemana || estoyEnVacaciones</code> → “Puedo dormir tarde si es fin de semana O estoy de vacaciones”</li>
                    <li><code>!estaLloviendo</code> → “Si NO está lloviendo, puedo salir sin paraguas”</li>
                  </ul>
                </div>
              </div>
            </div>
            <figure className="media">
          <img
            src="/logicos.png"
            alt="Operadores Lógicos en JavaScript"
          />
          <figcaption>
           Operadores lógicos en JavaScript.
          </figcaption>
        </figure>

          </div>
        </details>

        {/* 7) TIPO */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> Operadores de Tipo
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <p>
              Los operadores de tipo nos ayudan a <strong>identificar qué tipo de dato</strong> estamos manejando.
              Es como preguntar: “¿Qué tipo de cosa es esto?”
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Operador</th>
                    <th>Nombre</th>
                    <th>Qué hace</th>
                    <th>Ejemplo</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>typeof</code></td>
                    <td>Tipo de dato</td>
                    <td>Dice qué tipo de dato es</td>
                    <td><code>typeof 42</code></td>
                    <td><code>"number"</code></td>
                  </tr>
                  <tr>
                    <td><code>instanceof</code></td>
                    <td>Instancia de</td>
                    <td>Verifica si es de cierto tipo</td>
                    <td><code>[] instanceof Array</code></td>
                    <td><code>true</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplo sencillo con typeof</h4>
              <pre><code className="language-js">{`// Ejemplo básico de typeof
let edad = 18;
let nombre = "Juan";
let esEstudiante = true;

console.log(typeof edad);         // number
console.log(typeof nombre);       // string
console.log(typeof esEstudiante); // boolean`}</code></pre>
            </div>
          </div>
        </details>
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
  <summary>
    <span className="summary-left">
      <span className="badge">🔄</span> Conversión implícita y explícita en JavaScript
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p>
      En JavaScript, los valores pueden cambiar de tipo.  
      Esto ocurre porque JavaScript es un lenguaje de <strong>tipado dinámico</strong>.
    </p>

    <p className="muted">
      A veces JavaScript cambia el tipo <strong>automáticamente</strong> y otras veces
      somos nosotros quienes debemos hacerlo.  
      A estos dos casos los llamamos <strong>conversión implícita</strong> y
      <strong>conversión explícita</strong>.
    </p>

    {/* ===================== QUÉ ES ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>📌 ¿Qué es convertir un tipo?</h4>
      <p className="muted">
        Convertir un tipo significa transformar un valor de un tipo a otro, por ejemplo:
      </p>
      <ul className="muted">
        <li>de <code>string</code> a <code>number</code></li>
        <li>de <code>number</code> a <code>string</code></li>
        <li>de <code>string</code> a <code>boolean</code></li>
      </ul>

      <pre>
        <code className="language-js">{`let edadTexto = "18";
let edadNumero = Number(edadTexto); // 18`}</code>
      </pre>
    </div>

    {/* ===================== IMPLÍCITA ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>🔁 Conversión implícita (automática)</h4>

      <p className="muted">
        La <strong>conversión implícita</strong> ocurre cuando JavaScript cambia el tipo
        de un valor <strong>sin que se lo pidamos</strong>.
      </p>

      <pre>
        <code className="language-js">{`let a = 7;
let b = "5";

a + b; // "75"`}</code>
      </pre>

      <p className="muted">
        El operador <code>+</code> detecta un texto y convierte el número en string.
      </p>

      <pre>
        <code className="language-js">{`"5" - 2; // 3
"5" * 2; // 10`}</code>
      </pre>

      <p className="muted">
        En estos casos, JavaScript convierte el texto en número automáticamente.
      </p>
    </div>

    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">⚠️ Problema de la conversión implícita</p>
      <p className="muted">
        El resultado depende del operador.  
        Esto puede provocar errores difíciles de detectar.
      </p>
    </div>

    {/* ===================== POR QUÉ EVITARLA ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>❌ ¿Por qué no debemos confiar en ella?</h4>
      <ul className="muted">
        <li>El código parece correcto, pero el resultado no lo es.</li>
        <li>El error no siempre se ve a simple vista.</li>
        <li>En proyectos grandes, estos errores son muy peligrosos.</li>
      </ul>
    </div>

    {/* ===================== EXPLÍCITA ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>✅ Conversión explícita (la correcta)</h4>

      <p className="muted">
        La <strong>conversión explícita</strong> ocurre cuando el programador decide
        convertir el tipo de forma clara y controlada.
      </p>

      <pre>
        <code className="language-js">{`let a = 7;
let b = "5";

let resultado = a + Number(b); // 12`}</code>
      </pre>

      <p className="muted">
        Aquí usamos <code>Number()</code> para asegurarnos de que <code>b</code>
        sea un número antes de sumar.
      </p>
    </div>

    {/* ===================== FORMULARIOS ===================== */}
    <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🧠 Caso real: formularios</p>
      <p className="muted">
        Los valores que vienen de un formulario siempre son texto.  
        Por eso es obligatorio convertirlos antes de hacer cálculos.
      </p>
    </div>

    {/* ===================== NaN ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>❓ ¿Qué pasa si la conversión falla?</h4>

      <pre>
        <code className="language-js">{`Number("hola"); // NaN`}</code>
      </pre>

      <p className="muted">
        <code>NaN</code> significa <strong>Not a Number</strong> y nos avisa de que
        la conversión no ha sido posible.
      </p>
    </div>

    {/* ===================== RESUMEN ===================== */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">📌 Resumen final</p>
      <ul className="muted">
        <li>JavaScript convierte tipos automáticamente (implícita).</li>
        <li>Eso puede provocar errores.</li>
        <li>La conversión explícita nos da control.</li>
        <li>Para números, la mejor opción es <code>Number()</code>.</li>
        <li>Si la conversión falla, aparece <code>NaN</code>.</li>
      </ul>
    </div>

    {/* ===================== PRACTICA ===================== */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>🧪 Práctica recomendada</h4>
      <ul className="muted">
        <li>Prueba <code>"10" + 5</code> y luego <code>Number("10") + 5</code>.</li>
        <li>Prueba <code>"10" - 5</code>.</li>
        <li>Comprueba el tipo de cada resultado con <code>typeof</code>.</li>
      </ul>
    </div>
  </div>
</details>


        {/* 8) RESUMEN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} >
          <summary>
            <span className="summary-left">
              <span className="badge">📚</span> Resumen de Operadores
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="grid grid-3" style={{ gap: "1rem" }}>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>➕ Aritméticos</h3>
                <p className="muted">Para hacer matemáticas</p>
                <code>+ - * / % **</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>📝 Asignación</h3>
                <p className="muted">Para guardar valores</p>
                <code>= += -= *= /=</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>📝 Strings</h3>
                <p className="muted">Para trabajar con texto</p>
                <code>+ += {`${"${}"} `}</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>⚖️ Comparación</h3>
                <p className="muted">Para comparar valores</p>
                <code>== === != !== &lt; &gt; &lt;= &gt;=</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>🧠 Lógicos</h3>
                <p className="muted">Para combinar condiciones</p>
                <code>&& || !</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>🔍 Tipo</h3>
                <p className="muted">Para identificar tipos</p>
                <code>typeof instanceof</code>
              </div>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Consejos Finales</p>
              <ul className="muted">
                <li><strong>Practica mucho:</strong> la única forma de dominar los operadores es usándolos.</li>
                <li><strong>Usa === en lugar de ==:</strong> es más seguro y predecible.</li>
                <li><strong>Los paréntesis son tus amigos:</strong> <code>(a && b) || c</code> es más claro que <code>a && b || c</code>.</li>
                <li><strong>typeof te salvará:</strong> úsalo para verificar tipos antes de hacer operaciones.</li>
              </ul>
            </div>
          </div>
        </details>

        {/* NAV FINAL */}
        <div className="card" style={{ marginTop: "1rem", display: "flex", gap: ".75rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/variables" className="btn btn-ghost">
            ← Variables
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡Excelente trabajo! 🎉</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Ahora conoces todos los operadores básicos.
            </p>
          </div>

          <Link to="/ejercicios/ejercicios-operadores" className="btn btn-primary">
            🎯 ¡Practiquemos! →
          </Link>
        </div>
      </section>
    </article>
  );
}
