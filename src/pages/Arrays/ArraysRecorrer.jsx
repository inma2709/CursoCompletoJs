// src/pages/Arrays/ArraysRecorrer.jsx
import { Link } from "react-router-dom";

export default function ArraysRecorrer() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Arrays · Recorrer</h1>
          <p className="muted">
            Recorrer un array significa “pasar por todos sus elementos” para mostrarlos, contarlos o hacer algo con
            cada uno. Hoy vas a dominar <strong>for</strong>, <strong>for..of</strong> y <strong>forEach</strong>.
          </p>
        </div>
      </header>

      {/* VIDEO */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video: Recorrer arrays (for, for..of, forEach)</h2>
          <p className="muted">
            Recomendación para ver ejemplos en acción y reforzar lo que vas a practicar aquí.
          </p>

          <div
            className="video-container"
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/FJy8xgEdkNc"
              title="Video: Recorrer arrays en JavaScript"
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
        {/* 1) QUÉ SIGNIFICA RECORRER */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔄</span> ¿Qué significa “recorrer” un array?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Recorrer un array es ejecutar el mismo bloque de código <strong>para cada elemento</strong> de la lista.
              Por ejemplo: mostrar cada fruta, sumar precios, contar aprobados, crear tarjetas…
            </p>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">📌 Idea clave</p>
              <p className="muted">
                Si tienes 5 elementos, quieres que tu código “pase” por 5 posiciones: <code>0</code>, <code>1</code>,
                <code>2</code>, <code>3</code>, <code>4</code>.
              </p>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>✅ Ejemplo mínimo</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

// Recorrer = hacer algo con cada fruta
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}`}</code>
              </pre>
            </div>
          </div>
        </details>

        {/* 2) FOR CLÁSICO */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔢</span> 1) for (el clásico con i)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              El <strong>for</strong> clásico es el más importante porque te da control total: índice, saltos,
              condiciones, etc.
            </p>

            <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">🎯 Cuándo usarlo</p>
              <ul className="muted">
                <li>Cuando necesitas el <strong>índice</strong> (<code>i</code>)</li>
                <li>Cuando quieres recorrer solo una parte (por ejemplo del 2 al 6)</li>
                <li>Cuando necesitas control extra (ir hacia atrás, saltar posiciones…)</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Plantilla típica</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

// i empieza en 0, termina cuando i < length, y sube de 1 en 1
for (let i = 0; i < frutas.length; i++) {
  console.log("Índice:", i, "→", frutas[i]);
}`}</code>
              </pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Error típico</p>
              <p className="muted">
                No uses <code>i &lt;= frutas.length</code>.  
                El último índice es <code>length - 1</code>, así que debe ser <code>i &lt; frutas.length</code>.
              </p>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplo “más real”: sumar precios</h4>
              <pre>
                <code className="language-js">{`let precios = [10, 5, 8];
let total = 0;

for (let i = 0; i < precios.length; i++) {
  total = total + precios[i];
}

console.log("Total:", total); // 23`}</code>
              </pre>
            </div>
          </div>
        </details>

        {/* 3) FOR..OF */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧺</span> 2) for..of (el más fácil)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <strong>for..of</strong> recorre la lista y te da directamente el <strong>valor</strong>.
              Es perfecto cuando solo quieres “ver cada elemento” sin preocuparte del índice.
            </p>

            <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">🎯 Cuándo usarlo</p>
              <ul className="muted">
                <li>Cuando quieres el <strong>valor</strong> y no te importa el índice</li>
                <li>Cuando quieres código sencillo y muy legible</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo básico</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🧠 Diferencia clave</p>
              <p className="muted">
                En <strong>for</strong> tú controlas el índice (<code>i</code>).  
                En <strong>for..of</strong> no necesitas índice: te da el valor directamente.
              </p>
            </div>
          </div>
        </details>

        {/* 4) FOREACH */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> 3) forEach (modo “función”)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>forEach()</code> es un método del array que ejecuta una función por cada elemento.
              Es muy usado porque es limpio y muy común en proyectos.
            </p>

            <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">🎯 Cuándo usarlo</p>
              <ul className="muted">
                <li>Cuando quieres recorrer y hacer algo con cada elemento</li>
                <li>Cuando te gusta el estilo “moderno” con funciones</li>
                <li>Cuando quieres valor y también (si quieres) el índice</li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo con valor</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

frutas.forEach(function (fruta) {
  console.log("Fruta:", fruta);
});`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo con valor + índice</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

frutas.forEach(function (fruta, index) {
  console.log(index + 1 + ".", fruta);
});`}</code>
              </pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Importante</p>
              <p className="muted">
                <code>forEach()</code> es para recorrer. No está pensado para <strong>parar</strong> a mitad.
                Si necesitas “parar cuando encuentres algo”, suele ir mejor un <code>for</code> clásico.
              </p>
            </div>
          </div>
        </details>

        {/* 5) COMPARATIVA */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚖️</span> ¿Cuál uso? (regla rápida)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              ¿Qué tienes que hacer? Aquí tienes una guía rápida para elegir el mejor método de recorrido según lo que necesites:
            </p>

            <div className="table-wrap" style={{ overflowX: "auto", marginTop: ".75rem" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Necesito…</th>
                    <th>Mejor opción</th>
                    <th>Por qué</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Índice y control total</td>
                    <td>
                      <code>for</code>
                    </td>
                    <td>Controlas <code>i</code>, puedes parar, saltar, ir hacia atrás…</td>
                  </tr>
                  <tr>
                    <td>Solo el valor (simple)</td>
                    <td>
                      <code>for..of</code>
                    </td>
                    <td>Más legible: te da el elemento directamente</td>
                  </tr>
                  <tr>
                    <td>Recorrer con estilo “método”</td>
                    <td>
                      <code>forEach</code>
                    </td>
                    <td>Muy usado, limpio, y puedes obtener índice también</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Regla de oro</p>
              <p className="muted">
                Si dudas, usa <code>for</code>.  
                Cuando ya te sientas cómodo, <code>for..of</code> y <code>forEach</code> te darán más fluidez.
              </p>
            </div>
          </div>
        </details>

        {/* 6) EJERCICIO VISUAL (HTML + JS) */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Ejercicio: mostrar elementos en “cajitas”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Vas a recorrer un array y pintar cada elemento dentro de un <code>&lt;div&gt;</code> como si fueran tarjetas.
              Aquí no necesitas React: es DOM simple para practicar.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📘 Enunciado</h4>
              <ul className="muted">
                <li>Crea un array con 5 elementos (nombres, frutas, tareas…)</li>
                <li>Recórrelo con <strong>for..of</strong></li>
                <li>Por cada elemento, añade una “caja” a un contenedor con <code>innerHTML</code></li>
                <li>Extra: muestra también el total con <code>length</code></li>
              </ul>

              <h5 style={{ marginTop: ".75rem" }}>🧩 Código base (HTML + JS)</h5>
              <pre>
                <code className="language-html">{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Recorrer Arrays</title>
  <style>
    body { font-family: system-ui, Arial, sans-serif; padding: 16px; }
    .grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
    .box { padding: 12px; border: 1px solid #ddd; border-radius: 12px; }
    .muted { color: #666; }
  </style>
</head>
<body>
  <h2>🧪 Recorrer arrays (for..of)</h2>
  <p id="total" class="muted"></p>

  <div id="contenedor" class="grid"></div>

  <script>
    let lista = ["Manzana", "Naranja", "Plátano", "Fresa", "Uva"];

    // Mostramos el total
    document.getElementById("total").textContent = "Total de elementos: " + lista.length;

    // Recorremos y pintamos cajitas
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for (let item of lista) {
      contenedor.innerHTML += '<div class="box">🍓 ' + item + '</div>';
    }
  </script>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 ¿Qué estás practicando aquí?</p>
              <ul className="muted">
                <li>Recorrer arrays con <code>for..of</code></li>
                <li>Trabajar con <code>length</code></li>
                <li>Pintar contenido en HTML con <code>innerHTML +=</code></li>
                <li>Entender que “recorrer” = repetir para cada elemento</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 7) MINI RETO */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">🚀</span> Mini reto (para subir nivel)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Sin copiar/pegar: intenta hacerlo tú.
            </p>
            <ul className="muted">
              <li>Crea un array de <strong>notas</strong> (ej: <code>[5, 7, 9, 3]</code>)</li>
              <li>Recórrelo con <code>for</code> y suma el total</li>
              <li>Calcula la media: <code>total / length</code></li>
              <li>Muestra la media en consola</li>
            </ul>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🔍</span> Ver solución orientativa
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <pre>
                  <code className="language-js">{`let notas = [5, 7, 9, 3];
let total = 0;

for (let i = 0; i < notas.length; i++) {
  total = total + notas[i];
}

let media = total / notas.length;
console.log("Media:", media);`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>

        {/* NAV FINAL */}
        <div
          className="card"
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/arrays/intro" className="btn btn-ghost">
            ← Intro
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡Ya sabes recorrer arrays! 🎉</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Ahora toca aprender a modificar listas con métodos (push, pop, shift, unshift…).
            </p>
          </div>

          <Link to="/arrays/metodos-basicos" className="btn btn-primary">
            Siguiente: Métodos básicos →
          </Link>
        </div>
      </section>
    </article>
  );
}
