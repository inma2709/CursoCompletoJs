// src/pages/Arrays/ArraysTransformar.jsx
import { Link } from "react-router-dom";

export default function ArraysTransformar() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Arrays · Transformar</h1>
          <p className="muted">
            Transformar un array significa crear un <strong>nuevo resultado</strong> a partir de una lista:
            convertir valores, filtrar elementos, calcular totales… Aquí entran los “métodos pro”:
            <strong> map, filter, find, reduce</strong>.
          </p>
        </div>
      </header>

      {/* VIDEO */}
      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-box" style={{ marginTop: "1rem" }}>
          <h2 className="section-title">🎥 Video: map / filter / reduce (arrays)</h2>
          <p className="muted">
            Recomendación para verlos en acción antes de practicar.
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
              src="https://www.youtube.com/embed/J9vUZu6edBA"
              title="Video: map, filter, reduce en JavaScript"
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
        {/* 1) IDEA GENERAL */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✨</span> ¿Qué es “transformar” un array?
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cuando transformas un array normalmente quieres obtener <strong>otro array</strong> o un{" "}
              <strong>resultado final</strong> (un número, un objeto, un true/false…).
            </p>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Regla mental (muy útil)</p>
              <ul className="muted">
                <li><strong>map</strong> → “lo mismo de siempre, pero cambiado” (devuelve array)</li>
                <li><strong>filter</strong> → “me quedo con algunos” (devuelve array)</li>
                <li><strong>find</strong> → “encuéntrame uno” (devuelve 1 elemento)</li>
                <li><strong>reduce</strong> → “resúmeme todo en 1 cosa” (devuelve 1 resultado)</li>
              </ul>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Importante</p>
              <p className="muted">
                Estos métodos normalmente <strong>NO modifican</strong> el array original (se crea un resultado nuevo).
                Esto es oro en React (lo verás clarísimo más adelante).
              </p>
            </div>
          </div>
        </details>

        {/* 2) MAP */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🗺️</span> 1) map() — transformar cada elemento
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>map()</code> recorre el array y crea <strong>un nuevo array</strong> con el resultado de aplicar
              una función a cada elemento.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: duplicar números</h4>
              <pre>
                <code className="language-js">{`let numeros = [1, 2, 3, 4];

let dobles = numeros.map(function (n) {
  return n * 2;
});

console.log(numeros); // [1,2,3,4] (original)
console.log(dobles);  // [2,4,6,8] (nuevo)`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: poner emojis a nombres</h4>
              <pre>
                <code className="language-js">{`let nombres = ["Ana", "Juan", "Sara"];

let saludos = nombres.map(function (nombre) {
  return "👋 Hola, " + nombre;
});

console.log(saludos);
// ["👋 Hola, Ana", "👋 Hola, Juan", "👋 Hola, Sara"]`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Cuándo usar map()</p>
              <ul className="muted">
                <li>Cuando quieres un array del <strong>mismo tamaño</strong>, pero con valores transformados.</li>
                <li>Cuando necesitas crear “tarjetas” o “componentes” a partir de datos (en React: 🔥).</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 3) FILTER */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧹</span> 2) filter() — quedarte con algunos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>filter()</code> crea un <strong>nuevo array</strong> solo con los elementos que cumplan una
              condición (true/false).
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: solo mayores o iguales a 18</h4>
              <pre>
                <code className="language-js">{`let edades = [12, 18, 21, 16, 30];

let mayores = edades.filter(function (edad) {
  return edad >= 18;
});

console.log(mayores); // [18, 21, 30]`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: productos baratos</h4>
              <pre>
                <code className="language-js">{`let precios = [9.99, 19.5, 3.5, 42];

let baratos = precios.filter(function (p) {
  return p < 10;
});

console.log(baratos); // [9.99, 3.5]`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Cuándo usar filter()</p>
              <ul className="muted">
                <li>Cuando quieres un array “más pequeño” con solo lo que cumpla la condición.</li>
                <li>Ej: aprobados, tareas pendientes, productos en oferta, alumnos con asistencia…</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 4) FIND */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔎</span> 3) find() — encontrar uno (el primero)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>find()</code> devuelve el <strong>primer elemento</strong> que cumpla la condición.  
              Si no encuentra ninguno, devuelve <code>undefined</code>.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: encontrar la primera nota suspensa</h4>
              <pre>
                <code className="language-js">{`let notas = [7, 8, 4, 9, 3];

let primeraSuspensa = notas.find(function (n) {
  return n < 5;
});

console.log(primeraSuspensa); // 4`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: buscar un usuario por nombre</h4>
              <pre>
                <code className="language-js">{`let usuarios = ["Ana", "Luis", "Sara"];

let buscado = usuarios.find(function (u) {
  return u === "Sara";
});

console.log(buscado); // "Sara"`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🧠 Diferencia con filter()</p>
              <p className="muted">
                <strong>filter</strong> devuelve un array (pueden ser muchos).  
                <strong>find</strong> devuelve un elemento (solo uno, el primero que cumpla).
              </p>
            </div>
          </div>
        </details>

        {/* 5) REDUCE */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧮</span> 4) reduce() — resumir todo en un resultado
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>reduce()</code> recorre el array y lo convierte en <strong>un único resultado</strong>
              (un número, un string, un objeto…).
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">📌 Idea sencilla</p>
              <p className="muted">
                Tiene un <strong>acumulador</strong> que va guardando el resultado parcial, paso a paso.
              </p>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: sumar todos los números</h4>
              <pre>
                <code className="language-js">{`let numeros = [10, 5, 8];

// acumulador empieza en 0
let total = numeros.reduce(function (acum, n) {
  return acum + n;
}, 0);

console.log(total); // 23`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo: contar aprobados</h4>
              <pre>
                <code className="language-js">{`let notas = [7, 4, 8, 3, 10];

let aprobados = notas.reduce(function (acum, n) {
  if (n >= 5) {
    return acum + 1;
  }
  return acum;
}, 0);

console.log(aprobados); // 3`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Cuándo usar reduce()</p>
              <ul className="muted">
                <li>Sumas y totales (carrito, puntos, notas…)</li>
                <li>Contar elementos que cumplen algo</li>
                <li>Convertir un array en un objeto (más adelante)</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 6) EJERCICIOS */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Ejercicios (map + filter + reduce)
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>Ejercicio 1 · map()</h4>
              <p className="muted">
                Crea un array de precios y genera otro array con el IVA aplicado (por ejemplo, 21%).
              </p>
              <pre>
                <code className="language-js">{`let precios = [10, 20, 7];

let conIva = precios.map(function (p) {
  return p * 1.21;
});

console.log(conIva);`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>Ejercicio 2 · filter()</h4>
              <p className="muted">
                Dado un array de edades, crea uno nuevo solo con mayores de edad.
              </p>
              <pre>
                <code className="language-js">{`let edades = [12, 18, 21, 16, 30];

let mayores = edades.filter(function (e) {
  return e >= 18;
});

console.log(mayores);`}</code>
              </pre>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>Ejercicio 3 · reduce()</h4>
              <p className="muted">
                Dado un array de puntos, calcula el total.
              </p>
              <pre>
                <code className="language-js">{`let puntos = [5, 10, 7, 3];

let total = puntos.reduce(function (acum, p) {
  return acum + p;
}, 0);

console.log(total);`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Reto final</p>
              <p className="muted">
                Con un array de notas:  
                <strong>filtra aprobados</strong> (filter) y luego calcula la <strong>media</strong> (reduce).
              </p>
            </div>
          </div>
        </details>

        {/* 7) RESUMEN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Resumen rápido
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>

          <div className="topic-details__content">
            <div className="grid grid-3" style={{ gap: "1rem" }}>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>map()</h3>
                <p className="muted">Transforma cada elemento</p>
                <code>devuelve array</code>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>filter()</h3>
                <p className="muted">Se queda con algunos</p>
                <code>devuelve array</code>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>find()</h3>
                <p className="muted">Encuentra uno</p>
                <code>devuelve elemento</code>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>reduce()</h3>
                <p className="muted">Resumen final</p>
                <code>devuelve 1 resultado</code>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>Clave</h3>
                <p className="muted">no modifican el original</p>
                <code>resultado nuevo</code>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>Regla</h3>
                <p className="muted">“map/filter” primero</p>
                <code>reduce al final</code>
              </div>
            </div>
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
          <Link to="/arrays/metodos-basicos" className="btn btn-ghost">
            ← Métodos básicos
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡Ya estás en modo pro! 🔥</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Con map/filter/reduce puedes hacer muchísimo.
            </p>
          </div>

          <Link to="/arrays/ejercicios" className="btn btn-primary">
            Siguiente: Ejercicios →
          </Link>
        </div>
      </section>
    </article>
  );
}
