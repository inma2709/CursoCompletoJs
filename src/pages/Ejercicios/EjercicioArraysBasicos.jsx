// src/pages/Ejercicios/EjercicioArraysBasicos.jsx
// Ejercicios de Arrays · nivel básico → medio
// M6 · Arrays

export default function EjercicioArraysBasicos() {
  // =========================
  // EJERCICIO 1 · NIVEL BÁSICO
  // =========================
  const ejercicioBasico = () => {
    const frutas = ["manzana", "plátano", "naranja", "cereza"];

    alert("Mira la consola (F12)");
    console.log("Array completo:", frutas);
    console.log("Primera fruta:", frutas[0]);
    console.log("Última fruta:", frutas[frutas.length - 1]);
  };

  // =========================
  // EJERCICIO 2 · NIVEL MEDIO
  // =========================
  const ejercicioMedio = () => {
    const numeros = [3, 7, 2, 9, 5];
    let suma = 0;

    for (let numero of numeros) {
      suma = suma + numero;
    }

    alert("La suma total es: " + suma);
    console.log("Array:", numeros);
    console.log("Suma:", suma);
  };

  // =========================
  // EJERCICIO 3 · NIVEL RETO
  // =========================
  const ejercicioReto = () => {
    const edades = [12, 18, 25, 9, 30, 15];
    let mayores = [];

    for (let edad of edades) {
      if (edad >= 18) {
        mayores.push(edad);
      }
    }

    alert("Edades mayores de edad: " + mayores.join(", "));
    console.log("Edades:", edades);
    console.log("Mayores de edad:", mayores);
  };

  // =========================
  // UI / EXPLICACIÓN
  // =========================
  return (
    <article className="wrap">
      {/* HERO */}
      <header className="hero">
        <span className="badge">M6 · Práctica</span>
        <h1>Ejercicios: Arrays en JavaScript</h1>
        <p className="muted">
          Vas a practicar <strong>arrays</strong> con ejercicios progresivos: desde acceder
          a datos hasta trabajar con lógica y condiciones.
        </p>

        <div className="row" style={{ marginTop: ".75rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={ejercicioBasico}>
            ▶ Ejercicio 1 · Básico
          </button>
          <button className="btn btn-ghost" onClick={ejercicioMedio}>
            ▶ Ejercicio 2 · Medio
          </button>
          <button className="btn btn-ghost" onClick={ejercicioReto}>
            ▶ Ejercicio 3 · Reto
          </button>
          <span className="muted small">
            Consejo: usa la consola para ver claramente qué ocurre.
          </span>
        </div>
      </header>

      <div className="divider" />

      {/* EJERCICIO 1 */}
      <section className="card">
        <h2>Ejercicio 1 · Nivel básico</h2>
        <p className="muted">
          Trabajamos con un array de frutas. El objetivo es entender:
        </p>

        <ul>
          <li>Qué es un array</li>
          <li>Cómo acceder a una posición</li>
          <li>Qué significa <code>length</code></li>
        </ul>

        <pre>
          <code>{`const frutas = ["manzana", "plátano", "naranja", "cereza"];

console.log(frutas[0]); // primera
console.log(frutas[frutas.length - 1]); // última`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧠 Idea clave</div>
          <p>
            Los arrays empiezan en la posición <strong>0</strong>, no en 1.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EJERCICIO 2 */}
      <section className="card">
        <h2>Ejercicio 2 · Nivel medio</h2>
        <p className="muted">
          Ahora recorremos un array de números y calculamos la suma total.
        </p>

        <pre>
          <code>{`const numeros = [3, 7, 2, 9, 5];
let suma = 0;

for (let numero of numeros) {
  suma = suma + numero;
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <div className="callout__title">⚠️ Error típico</div>
          <p>
            Si no inicializas <code>suma</code> a 0, el resultado será incorrecto.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* EJERCICIO 3 */}
      <section className="card">
        <h2>Ejercicio 3 · Reto</h2>
        <p className="muted">
          Filtramos datos: creamos un nuevo array solo con los valores que cumplen
          una condición.
        </p>

        <pre>
          <code>{`const edades = [12, 18, 25, 9, 30, 15];
let mayores = [];

for (let edad of edades) {
  if (edad >= 18) {
    mayores.push(edad);
  }
}`}</code>
        </pre>

        <div className="callout callout--tip">
          <div className="callout__title">🧩 Lo importante</div>
          <p>
            No modificamos el array original. Creamos uno nuevo con{" "}
            <code>push()</code>.
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
          <h3 className="links-box__title">🚀 Mejora los ejercicios</h3>

          <ul className="links-list">
            <li className="links-item">
              <strong>Reto 1:</strong>
              <p className="links-desc">
                Calcula la media del array de números.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 2:</strong>
              <p className="links-desc">
                Crea un array con nombres y muestra solo los que tengan más de 4 letras.
              </p>
            </li>

            <li className="links-item">
              <strong>Reto 3:</strong>
              <p className="links-desc">
                Pide números al usuario y guárdalos en un array hasta que escriba “fin”.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
