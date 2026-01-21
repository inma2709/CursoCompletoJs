// src/pages/ejercicios/EjercicioVariables.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function EjercicioVariables() {
  const [nombre, setNombre] = useState("");
  const [inputNombre, setInputNombre] = useState("");
  const [resultado, setResultado] = useState("👋 Escribe tu nombre y pulsa “Guardar nombre”");

  const codigo1 = useMemo(
    () => `// Mi primera variable
let miNombre = "Carlos";
console.log(miNombre); // Esto muestra: Carlos

// Cambio el valor
miNombre = "María";
console.log(miNombre); // Esto muestra: María

// Uso la variable
console.log("Hola " + miNombre); // Esto muestra: Hola María`,
    []
  );

  const codigo2 = useMemo(
    () => `// Variables con números
let miEdad = 15;
console.log(miEdad); // Muestra: 15

let miAltura = 1.65;
console.log(miAltura); // Muestra: 1.65

// Cambio los valores
miEdad = 16;
miAltura = 1.70;

console.log(miEdad); // Muestra: 16
console.log(miAltura); // Muestra: 1.70

// Junto texto y números
console.log("Tengo " + miEdad + " años"); // Muestra: Tengo 16 años`,
    []
  );

  const codigo3 = useMemo(
    () => `// Creamos variables y les damos valores
let miMascota = "Perro";
let miColor = "Azul";
let miNumero = 7;

// Mostramos los valores iniciales
console.log(miMascota); // Perro
console.log(miColor);   // Azul
console.log(miNumero);  // 7

// Cambiamos todos los valores
miMascota = "Gato";
miColor = "Rojo";
miNumero = 3;

// Mostramos los nuevos valores
console.log(miMascota); // Gato
console.log(miColor);   // Rojo
console.log(miNumero);  // 3

// Creamos un mensaje con todas las variables
console.log("Mi mascota favorita es un " + miMascota + " de color " + miColor + " y mi número favorito es " + miNumero);`,
    []
  );

  const codigoResumen = useMemo(
    () => `// crear
let miVariable = "algo";
const curso = "JavaScript";
// mostrar SIEMPRE con console.log:
console.log(miVariable); // "algo"
console.log(curso);      // "JavaScript"

// incorrecto (no muestra nada):
miVariable;

// correcto:
console.log(miVariable);

// reasignación (solo let)
let nombre = "Ana";
console.log(nombre); // Ana
nombre = "María";
console.log(nombre); // María

// concatenación y plantilla
let saludo = "Hola";
let persona = "Inma";
console.log(saludo + " " + persona);
console.log(\`\${saludo} \${persona}\`);

// números
let edad = 15;
edad = edad + 1;
console.log(edad);

let precio = 19.99;
let cantidad = 3;
let total = precio * cantidad;
console.log(total);

// booleanos
let esMayorDeEdad = edad >= 18;
console.log(esMayorDeEdad);`,
    []
  );

  function guardarNombre() {
    const v = inputNombre.trim();
    setNombre(v);
    setResultado(v ? `✅ Nombre guardado: ${v}` : "⚠️ Escribe un nombre antes de guardar.");
    console.log("Variable 'nombre' ahora contiene:", v);
  }

  function usarNombre() {
    setResultado(nombre ? `👋 ¡Hola ${nombre}!` : "⚠️ Primero guarda un nombre.");
    console.log("Usando la variable 'nombre':", nombre);
  }

  function reasignarNombre() {
    setNombre("Ana");
    setResultado("🔄 Ahora la variable vale: Ana");
    console.log("Variable 'nombre' reasignada a:", "Ana");
  }

  function limpiar() {
    setNombre("");
    setInputNombre("");
    setResultado("🗑️ Todo limpio, puedes empezar de nuevo");
    console.log("Variable y campo limpiados");
  }

  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">E1</span>
          <h1>Ejercicio: Variables en JavaScript</h1>
          <p className="muted">Aprende a guardar y cambiar valores en variables (lo más básico).</p>

          <div className="row" style={{ marginTop: ".9rem" }}>
            <Link className="btn btn-ghost" to="/ejercicios">
              ⟵ Volver a Ejercicios
            </Link>
            <span className="badge">Nivel: Básico</span>
          </div>
        </div>
      </header>

      {/* MIGAS (opcional, estilo simple) */}
      <nav className="breadcrumbs" aria-label="Migas de pan" style={{ marginTop: "1rem" }}>
        <ul className="breadcrumb-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <li className="breadcrumb-item">
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="breadcrumb-item">
            <Link className="link" to="/ejercicios">
              Ejercicios
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="breadcrumb-item active" aria-current="page">
            Variables
          </li>
        </ul>
      </nav>

      {/* EXPLICACIÓN */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Ejercicios: Variables</h2>
          <span className="topic-section__meta">variables</span>
        </div>

        <>
          <p>
            <strong>Lo que aprenderás:</strong> asignar y reasignar variables (lo más básico).
          </p>
          <p className="muted">
            Las variables son como “cajas” con nombre: guardas algo dentro y luego puedes cambiarlo.
          </p>

          <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">📋 Instalación rápida de Code Runner (VS Code)</p>
            <ol>
              <li>Abre VS Code</li>
              <li>Ve a Extensions (Ctrl + Shift + X)</li>
              <li>Busca “Code Runner”</li>
              <li>Instala la extensión de Jun Han</li>
              <li>Ejecuta JavaScript con Ctrl + Alt + N</li>
            </ol>
          </div>

          <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">⚠️ Problema común (Code Runner)</p>
            <p className="muted">
              Si no ves resultados en la terminal, recuerda:
            </p>
            <ul>
              <li>
                ❌ <strong>NO funciona:</strong> <code className="inline-code">miVariable;</code> (no muestra nada)
              </li>
              <li>
                ✅ <strong>SÍ funciona:</strong>{" "}
                <code className="inline-code">console.log(miVariable);</code> (muestra el valor)
              </li>
            </ul>
            <p className="muted">
              <strong>Solución:</strong> usa <code className="inline-code">console.log()</code> para ver resultados.
            </p>
          </div>
        </>
      </section>

      {/* EJERCICIO 1 */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🟢 Ejercicio 1: Mi primera variable</h2>
          <span className="topic-section__meta">e1</span>
        </div>

        <>
          <p>
            <strong>Objetivo:</strong> crear una variable y darle un valor.
          </p>

          <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">📝 Código para copiar en VS Code</p>
            <pre>
              <code>{codigo1}</code>
            </pre>

            <p>
              <strong>📋 Instrucciones:</strong>
            </p>
            <ol>
              <li>Copia el código</li>
              <li>Pégalo en un archivo nuevo <code className="inline-code">.js</code></li>
              <li>Ejecuta con <code className="inline-code">Ctrl + Alt + N</code></li>
              <li>Mira la terminal</li>
            </ol>
          </div>
        </>
      </section>

      {/* EJERCICIO 2 */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🟡 Ejercicio 2: Variables con números</h2>
          <span className="topic-section__meta">e2</span>
        </div>

        <>
          <p>
            <strong>Objetivo:</strong> guardar números en variables.
          </p>

          <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">📝 Código para copiar en VS Code</p>
            <pre>
              <code>{codigo2}</code>
            </pre>
          </div>
        </>
      </section>

      {/* EJERCICIO 3 */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>⚪ Ejercicio 3: Práctica de asignación simple</h2>
          <span className="topic-section__meta">e3</span>
        </div>

        <>
          <p>
            <strong>Objetivo:</strong> practicar asignar y reasignar sin complicaciones.
          </p>

          <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
            <p className="callout__title">📝 Código para copiar en VS Code</p>
            <pre>
              <code>{codigo3}</code>
            </pre>
          </div>
        </>
      </section>

      {/* RESUMEN */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📚 Resumen de variables</h2>
          <span className="topic-section__meta">resumen</span>
        </div>

        <>
          <div className="callout callout--concept">
            <p className="callout__title">Idea clave</p>
            <p className="muted">
              Una variable es una <em>caja con nombre</em> que guarda un valor. Para ver el contenido:
              <strong> siempre </strong>
              usa <code className="inline-code">console.log(...)</code>.
            </p>
          </div>

          <details className="topic-details" style={{ marginTop: ".9rem" }} open>
            <summary>
              <span className="summary-left">
                <span className="badge">+</span> Lo esencial (con ejemplos)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="topic-details__content">
              <pre>
                <code>{codigoResumen}</code>
              </pre>
            </div>
          </details>

          <details className="topic-details" style={{ marginTop: ".75rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">+</span> Mini-reto (predice la salida)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="topic-details__content">
              <pre>
                <code>{`let x = 5;
console.log(x);
x = x + 2;
console.log(x);
const lenguaje = "JS";
console.log(\`Estoy aprendiendo \${lenguaje}\`);`}</code>
              </pre>
              <p className="muted">
                ✔️ Si tu consola muestra <code className="inline-code">5</code>,{" "}
                <code className="inline-code">7</code> y{" "}
                <code className="inline-code">Estoy aprendiendo JS</code>, ¡perfecto!
              </p>
            </div>
          </details>
        </>
      </section>

      {/* MINI INTERACTIVO (lo que hacía el script del HTML) */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎮 Mini práctica interactiva </h2>
          <span className="topic-section__meta">interactivo</span>
        </div>

        <>
          <p className="muted">
            Aquí practicamos exactamente lo mismo que en tu HTML: una variable global (<code className="inline-code">nombre</code>)
            que se guarda, se usa, se reasigna y se limpia.
          </p>

          <div className="card" style={{ marginTop: ".9rem" }}>
            <label htmlFor="nombreIntroducido" className="small" style={{ display: "block", marginBottom: ".4rem" }}>
              Escribe un nombre
            </label>

            <input
              id="nombreIntroducido"
              value={inputNombre}
              onChange={(e) => setInputNombre(e.target.value)}
              placeholder="Ej: Alberto"
              style={{
                width: "100%",
                padding: ".7rem .8rem",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,.15)",
                outline: "none",
              }}
            />

            <div className="row" style={{ marginTop: ".8rem" }}>
              <button className="btn btn-primary" type="button" onClick={guardarNombre}>
                Guardar nombre
              </button>
              <button className="btn" type="button" onClick={usarNombre}>
                Usar nombre
              </button>
              <button className="btn" type="button" onClick={reasignarNombre}>
                Reasignar a “Ana”
              </button>
              <button className="btn btn-ghost" type="button" onClick={limpiar}>
                Limpiar
              </button>
            </div>

            <div className="callout callout--summary" style={{ marginTop: "1rem" }}>
              <p className="callout__title">Resultado</p>
              <p id="textoResultado" className="muted" style={{ margin: 0 }}>
                {resultado}
              </p>
            </div>

            <p className="muted small" style={{ marginTop: ".7rem" }}>
              Pista: abre la consola del navegador (F12) para ver los <code className="inline-code">console.log</code>.
            </p>
          </div>
        </>
      </section>
    </article>
  );
}
