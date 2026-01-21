// src/pages/Ejercicios/EjercicioArraysRetos.jsx
// M6 · Arrays · Retos guiados + Comparativa de recorridos
// Incluye: métodos básicos + primer map/filter + comparativa for vs forEach vs map

export default function EjercicioArraysRetos() {
  // ==========================================
  // RETO A · MÉTODOS BÁSICOS (muy guiado)
  // ==========================================
  const retoMetodosBasicos = () => {
    console.clear();

    // 0) Array inicial
    let lista = ["manzana", "plátano", "naranja"];
    console.log("✅ Estado inicial:", lista);

    // 1) push() → añade al FINAL
    lista.push("kiwi");
    console.log("1) push('kiwi') →", lista);

    // 2) pop() → elimina el ÚLTIMO
    const eliminadoFinal = lista.pop();
    console.log("2) pop() → eliminado:", eliminadoFinal, " | ahora:", lista);

    // 3) unshift() → añade al INICIO
    lista.unshift("fresa");
    console.log("3) unshift('fresa') →", lista);

    // 4) shift() → elimina el PRIMERO
    const eliminadoInicio = lista.shift();
    console.log("4) shift() → eliminado:", eliminadoInicio, " | ahora:", lista);

    // 5) length → cantidad de elementos
    console.log("5) length → total elementos:", lista.length);

    alert("✅ Reto A terminado. Abre consola (F12) para ver el paso a paso.");
  };

  // ==========================================
  // RETO B · PRIMER MAP + FILTER (muy guiado)
  // ==========================================
  const retoTransformar = () => {
    console.clear();

    const precios = [10, 25, 8, 40, 15];
    console.log("✅ Precios originales:", precios);

    // 1) map → transformar cada elemento (sin cambiar el original)
    // Ejemplo: aplicar 21% IVA
    const preciosConIVA = precios.map((p) => p * 1.21);
    console.log("1) map → precios con IVA:", preciosConIVA);

    // 2) filter → quedarnos SOLO con los que cumplen condición
    // Ejemplo: precios >= 15
    const preciosFiltrados = precios.filter((p) => p >= 15);
    console.log("2) filter → precios >= 15:", preciosFiltrados);

    // 3) combinación: filter + map
    // “Solo los >=15 y además con IVA”
    const filtradosConIVA = precios.filter((p) => p >= 15).map((p) => p * 1.21);
    console.log("3) filter + map → >=15 con IVA:", filtradosConIVA);

    alert("✅ Reto B terminado. Abre consola (F12) para ver resultados.");
  };

  // ==========================================
  // EJERCICIO COMPARATIVO · MISMA TAREA, 4 FORMAS
  // ==========================================
  const comparativaRecorridos = () => {
    console.clear();

    const nombres = ["Ana", "Luis", "María", "Pepe"];

    console.log("✅ Array original:", nombres);
    console.log("======================================");
    console.log("OBJETIVO: crear un array nuevo en MAYÚSCULAS");
    console.log("======================================");

    // A) for clásico
    const mayusFor = [];
    for (let i = 0; i < nombres.length; i++) {
      mayusFor.push(nombres[i].toUpperCase());
    }
    console.log("A) for clásico →", mayusFor);

    // B) for...of
    const mayusForOf = [];
    for (let nombre of nombres) {
      mayusForOf.push(nombre.toUpperCase());
    }
    console.log("B) for...of →", mayusForOf);

    // C) forEach (recorre, pero no devuelve array)
    const mayusForEach = [];
    nombres.forEach((nombre) => {
      mayusForEach.push(nombre.toUpperCase());
    });
    console.log("C) forEach →", mayusForEach);

    // D) map (la forma “moderna” cuando quieres crear un array nuevo)
    const mayusMap = nombres.map((nombre) => nombre.toUpperCase());
    console.log("D) map →", mayusMap);

    alert("✅ Comparativa lista. Abre consola (F12).");
  };

  // ==========================================
  // UI
  // ==========================================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M6 · Práctica</span>
        <h1>Arrays: retos guiados + comparativa</h1>
        <p className="muted">
          Hoy vas a practicar arrays con <strong>retos guiados</strong> y verás{" "}
          <strong>4 formas de recorrer</strong> un array (for, for...of, forEach, map).
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={retoMetodosBasicos}>
            ▶ Reto A · Métodos básicos
          </button>
          <button className="btn btn-ghost" onClick={retoTransformar}>
            ▶ Reto B · map / filter
          </button>
          <button className="btn btn-ghost" onClick={comparativaRecorridos}>
            ⚖️ Comparativa · 4 formas
          </button>
          <span className="muted small">
            Consejo: cada botón imprime un “paso a paso” en consola.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* RETO A */}
      <section className="card">
        <h2>Reto A · Métodos básicos (muy guiado)</h2>
        <p className="muted">
          Vas a ver cómo se modifica un array con los métodos más importantes.
          El objetivo es que entiendas: <strong>inicio</strong> vs <strong>final</strong>.
        </p>

        <ul>
          <li>
            <code>push()</code> añade al <strong>final</strong>
          </li>
          <li>
            <code>pop()</code> quita del <strong>final</strong>
          </li>
          <li>
            <code>unshift()</code> añade al <strong>inicio</strong>
          </li>
          <li>
            <code>shift()</code> quita del <strong>inicio</strong>
          </li>
          <li>
            <code>length</code> indica cuántos elementos hay
          </li>
        </ul>

        <pre>
          <code>{`let lista = ["manzana", "plátano", "naranja"];

lista.push("kiwi");     // + final
lista.pop();            // - final
lista.unshift("fresa"); // + inicio
lista.shift();          // - inicio

console.log(lista.length); // total`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            Si tu array funciona como una pila (stack), piensa en <code>push/pop</code>.
            Si funciona como una cola (queue), piensa en <code>push/shift</code>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* RETO B */}
      <section className="card">
        <h2>Reto B · Transformar arrays: map / filter (muy guiado)</h2>
        <p className="muted">
          Aquí aparece la parte “moderna” de arrays. La regla es:
        </p>

        <ul>
          <li>
            <strong>map</strong> → transforma cada elemento y devuelve un array nuevo.
          </li>
          <li>
            <strong>filter</strong> → se queda solo con los que cumplen una condición.
          </li>
        </ul>

        <pre>
          <code>{`const precios = [10, 25, 8, 40, 15];

// map: aplicar IVA
const conIVA = precios.map(p => p * 1.21);

// filter: quedarte con >= 15
const caros = precios.filter(p => p >= 15);

// combinar
const carosConIVA = precios.filter(p => p >= 15).map(p => p * 1.21);`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Ojo</div>
          <p>
            <code>map</code> y <code>filter</code> no cambian el array original: te devuelven otro.
            (Eso es bueno, evita errores).
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* COMPARATIVA */}
      <section className="card">
        <h2>Ejercicio comparativo: 4 formas de recorrer un array</h2>
        <p className="muted">
          Mismo objetivo en 4 estilos: crear un array nuevo con nombres en mayúsculas.
        </p>

        <pre>
          <code>{`const nombres = ["Ana", "Luis", "María", "Pepe"];

// A) for clásico
const a = [];
for (let i = 0; i < nombres.length; i++) {
  a.push(nombres[i].toUpperCase());
}

// B) for...of
const b = [];
for (let nombre of nombres) {
  b.push(nombre.toUpperCase());
}

// C) forEach
const c = [];
nombres.forEach((nombre) => {
  c.push(nombre.toUpperCase());
});

// D) map
const d = nombres.map((nombre) => nombre.toUpperCase());`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">✅ Conclusión práctica</div>
          <p>
            Si quieres <strong>crear un array nuevo</strong>, normalmente <code>map</code> es la mejor opción.
            Si solo quieres <strong>recorrer</strong> y hacer algo, <code>forEach</code> está bien.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* RETOS EXTRA */}
      <section className="topic-section links-section">
        <div className="topic-section__title">
          <h2>Retos extra</h2>
          <span className="topic-section__meta">Para practicar</span>
        </div>

        <div className="links-box">
          <h3 className="links-box__title">🚀 Sube el nivel</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Con <code>map</code>, crea un array que multiplique por 2 todos los números.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Con <code>filter</code>, crea un array solo con números pares.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Mezcla <code>filter</code> + <code>map</code>: quédate con los mayores de 10 y súmales 1.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
