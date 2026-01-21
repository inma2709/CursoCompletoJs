// src/pages/JugandoOperadores.jsx
export default function JugandoOperadores() {
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">Taller</span>
          <h1 style={{ marginTop: ".55rem" }}>🧪 Jugando con Operadores Lógicos</h1>
          <p className="muted">
            Esto no es “teoría”: es un mini laboratorio. Vas a escribir <strong>if()</strong> y a ver{" "}
            <strong>cómo cambian los mensajes y estilos</strong> según tus condiciones.  
            La idea es que <strong>toques</strong>, <strong>rompas</strong> y <strong>arregles</strong> el código
            hasta que entiendas de verdad <code>&&</code>, <code>||</code>, <code>!</code> y los{" "}
            <strong>paréntesis</strong>.
          </p>
        </div>
      </header>

      <div className="divider" />

      {/* INTRO */}
      <section className="card" style={{ marginTop: "1rem" }}>
        <h3 style={{ marginTop: 0 }}>🎮 Cómo “se juega” este ejercicio</h3>
        <ul className="muted" style={{ marginTop: ".5rem" }}>
          <li>
            Copia el archivo <strong>jugando-operadores.html</strong> y ábrelo en el navegador.
          </li>
          <li>
            Cambia los valores de <code>n1</code>, <code>n2</code>, <code>n3</code> y <code>n4</code>.
          </li>
          <li>
            Cambia los operadores (<code>&gt;</code>, <code>&lt;</code>, <code>&&</code>, <code>||</code>, <code>!</code>)
            y mira qué mensajes aparecen.
          </li>
          <li>
            Tu objetivo NO es memorizar: es <strong>predecir</strong> lo que va a pasar, probarlo y entenderlo.
          </li>
        </ul>

        <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
          <p className="callout__title">🧠 Truco para aprender</p>
          <p className="muted">
            Antes de ejecutar, di en voz alta:{" "}
            <strong>“Creo que se mostrará esto porque…”</strong>.  
            Si fallas, perfecto: ahí es donde aprendes.
          </p>
        </div>
      </section>

      {/* EJERCICIO */}
      <section className="topic-section" style={{ marginTop: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Ejercicio: Jugando con operadores lógicos</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Condiciones con if(), operadores y paréntesis
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              En este ejercicio vas a trabajar con <strong>if()</strong>, operadores de comparación
              (<code>&gt;</code>, <code>&lt;</code>), operadores lógicos
              (<code>&&</code>, <code>||</code>, <code>!</code>) y <strong>paréntesis</strong>.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">🎯 Objetivo</p>
              <ul className="muted">
                <li>Cada cajón contiene dos párrafos.</li>
                <li>Debes decidir cuándo se muestra cada mensaje.</li>
                <li>Las condiciones deben usar <strong>operadores lógicos</strong>.</li>
                <li>Al menos una condición debe usar <strong>paréntesis</strong>.</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📄 jugando-operadores.html</h4>

              <pre>
                <code className="language-html">{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jugando con operadores</title>
</head>

<style>
  #cajon1, #cajon2, #cajon3{
    border: 2px solid black;
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

<body>
  <div id="cajon1">
    <p id="parrafo1"></p>
    <p id="parrafo2"></p>
  </div>

  <div id="cajon2">
    <p id="parrafo3"></p>
    <p id="parrafo4"></p>
  </div>

  <div id="cajon3">
    <p id="parrafo5"></p>
    <p id="parrafo6"></p>
  </div>

  <script>
    let n1 = 10;
    if (n1 > 5){
      document.getElementById("parrafo1").innerHTML = "n1 es mayor que 5";
    }

    if (n1 < 5 || n1 > 8){
      document.getElementById("parrafo2").innerHTML = "n1 es menor que 5 o mayor que 8";
    }

    let n2 = 3;
    if (!(n2 > 5)){
      document.getElementById("parrafo3").innerHTML = "n2 no es mayor que 5";
      document.getElementById("parrafo3").style.color = "blue";
    }

    let n3 = 7;
    if (n3 > 5 && n3 < 10){
      document.getElementById("parrafo4").innerHTML = "n3 es mayor que 5 y menor que 10";
      document.getElementById("parrafo4").style.backgroundColor = "green";
    }

    let n4 = 4;
    if (n4 < 5 || n4 > 8){
      document.getElementById("parrafo5").innerHTML = "n4 es menor que 5 o mayor que 8";
      document.getElementById("parrafo5").style.fontWeight = "bold";
    }
  </script>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">✅ Reglas del ejercicio</p>
              <ul className="muted">
                <li>Usa <strong>&gt;</strong> o <strong>&lt;</strong> en varias condiciones.</li>
                <li>Utiliza <strong>&&</strong> y <strong>||</strong> al menos una vez cada uno.</li>
                <li>Usa <strong>!</strong> al menos una vez.</li>
                <li>Usa <strong>paréntesis</strong> en alguna condición.</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🕹️ Modo juego: misiones</h4>
              <p className="muted" style={{ marginTop: ".25rem" }}>
                Haz estas misiones en orden. Si te atascas, cambia solo una cosa cada vez.
              </p>
              <ol className="muted" style={{ marginTop: ".5rem" }}>
                <li>
                  <strong>Misión 1:</strong> cambia <code>n1</code> a <code>4</code>. ¿Qué mensajes aparecen ahora?
                </li>
                <li>
                  <strong>Misión 2:</strong> cambia la segunda condición de <code>n1</code> para que use{" "}
                  <strong>paréntesis</strong>, por ejemplo: <code>(...) || (...)</code>.
                </li>
                <li>
                  <strong>Misión 3:</strong> haz que el mensaje de <code>n2</code> solo aparezca cuando{" "}
                  <code>n2</code> <strong>NO</strong> esté en un rango.
                </li>
                <li>
                  <strong>Misión 4:</strong> modifica la condición de <code>n3</code> para que el fondo verde
                  solo aparezca si cumple <strong>dos cosas a la vez</strong> (obligatorio <code>&&</code>).
                </li>
                <li>
                  <strong>Misión 5:</strong> consigue que <code>parrafo6</code> muestre un mensaje nuevo usando{" "}
                  <code>||</code> y <strong>paréntesis</strong>.
                </li>
              </ol>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🧩 Pistas rápidas</h4>
              <ul className="muted" style={{ marginTop: ".5rem" }}>
                <li>
                  <code>&&</code> significa “se cumplen las dos”.
                </li>
                <li>
                  <code>||</code> significa “se cumple una u otra”.
                </li>
                <li>
                  <code>!</code> significa “lo contrario”.
                </li>
                <li>
                  Los <strong>paréntesis</strong> te permiten decidir qué se evalúa primero.
                </li>
              </ul>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Lo importante de este ejercicio</p>
              <p className="muted">
                Si entiendes por qué aparece un mensaje y por qué no aparece otro, ya estás haciendo
                lo más importante en programación: <strong>pensar en lógica</strong>.
              </p>
            </div>
          </div>
        </details>
      </section>
    </article>
  );
}
