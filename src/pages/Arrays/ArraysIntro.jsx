// src/pages/Arrays/ArraysIntro.jsx
import { Link } from "react-router-dom";

export default function ArraysIntro() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Arrays · Intro</h1>
          <p className="muted">
            Un array es la forma más práctica de guardar <strong>listas</strong>: nombres, notas, tareas, productos…
            Hoy vas a aprender lo básico para poder usarlos sin miedo: <strong>crear</strong>, <strong>acceder</strong>,
            <strong>length</strong> y <strong>modificar</strong>.
          </p>
        </div>
      </header>

     {/* VIDEO 1 */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box" style={{ marginTop: "1rem" }}>
    <h2 className="section-title">🎥 Video: Arrays desde cero (Parte 1)</h2>
    <p className="muted">
      Introducción a los arrays en JavaScript: qué son, índices y longitud.
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
        src="https://www.youtube.com/embed/hTeFMke6F6Q"
        title="Arrays desde cero - Parte 1"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </div>
</section>

{/* VIDEO 2 */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box" style={{ marginTop: "1rem" }}>
    <h2 className="section-title">🎥 Video: Arrays desde cero (Parte 2)</h2>
    <p className="muted">
      Continuación: recorrido de arrays y primeros métodos básicos.
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
        src="https://www.youtube.com/embed/yn-o0rxXW0o"
        title="Arrays desde cero - Parte 2"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
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
        {/* 1) QUÉ SON */}
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🤔</span> ¿Qué es un array?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Un <strong>array</strong> es una “lista” que guarda <strong>varios valores</strong> dentro de una sola variable,
              en un orden concreto. En vez de crear muchas variables sueltas, guardamos todo junto en una lista.
            </p>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">📝 Imagina una lista de la compra</p>
              <ul className="muted">
                <li>Puedes escribir varios elementos: <strong>leche</strong>, <strong>pan</strong>, <strong>fruta</strong>…</li>
                <li>Cada elemento tiene una posición (un número): <strong>índice</strong>.</li>
                <li>Puedes saber cuántos hay en total con <code>.length</code>.</li>
                <li>Puedes agregar, quitar o cambiar elementos cuando quieras.</li>
              </ul>
            </div>

            <p className="muted" style={{ marginTop: ".75rem" }}>
              Los arrays te sirven para:
            </p>
            <ul className="muted">
              <li>📋 Guardar múltiples elementos relacionados (nombres, productos, notas…)</li>
              <li>🔄 Procesar datos de forma organizada</li>
              <li>📊 Manejar colecciones de información</li>
              <li>🎯 Trabajar con conjuntos de datos (listas) de forma profesional</li>
            </ul>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplo rápido</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas);      // ["manzana", "naranja", "plátano"]
console.log(frutas[0]);   // "manzana"`}</code>
              </pre>
            </div>
          </div>
        </details>

        {/* 1.5) CARACTERÍSTICAS DE LOS ARRAYS EN JAVASCRIPT */}
<details className="topic-details" style={{ marginTop: ".75rem" }} open>
  <summary>
    <span className="summary-left">
      <span className="badge">🧠</span> Características clave de los arrays en JavaScript
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p>
      Si vienes de otros lenguajes como <strong>Java</strong>, <strong>C</strong> o <strong>C#</strong>,
      los arrays en JavaScript te van a llamar la atención.  
      Son mucho más <strong>flexibles</strong> y menos estrictos.
    </p>

    {/* DINÁMICOS */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🔄 1) Son dinámicos</p>
      <p className="muted">
        En JavaScript <strong>NO tienes que indicar el tamaño</strong> del array al crearlo.
        El array crece o se reduce automáticamente.
      </p>
      <pre>
        <code className="language-js">{`let numeros = [7, 9, 12];

numeros.push(55);
numeros.push(15);

console.log(numeros); // [7, 9, 12, 55, 15]
console.log(numeros.length); // 5`}</code>
      </pre>
    </div>

    {/* SIN TIPO */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🧩 2) No se declara el tipo de datos</p>
      <p className="muted">
        En JavaScript no existe <code>int[]</code>, <code>String[]</code> ni similares.
        El array <strong>no tiene tipo fijo</strong>.
      </p>
      <pre>
        <code className="language-js">{`let datos = [1.5, true, "Juan"];

console.log(datos);`}</code>
      </pre>
    </div>

    {/* TIPOS MEZCLADOS */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🎭 3) Pueden mezclar distintos tipos</p>
      <p className="muted">
        Un mismo array puede contener números, booleanos, textos,
        objetos e incluso otros arrays.
      </p>
      <pre>
        <code className="language-js">{`let datos = [
  1.5,
  true,
  "Juan",
  { alto: 100, ancho: 300 }
];

console.log(datos[3].alto); // 100`}</code>
      </pre>
    </div>

    {/* ARRAYS CALCULADOS */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">➕ 4) Pueden crearse a partir de variables</p>
      <p className="muted">
        Los valores pueden venir de cálculos o variables previas.
      </p>
      <pre>
        <code className="language-js">{`let valor = 500;

let masNumeros = [
  valor,
  valor + 100,
  valor + 200
];

console.log(masNumeros); // [500, 600, 700]`}</code>
      </pre>
    </div>

    {/* ARRAYS COMPLEJOS */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">📦 5) Pueden contener objetos y estructuras complejas</p>
      <p className="muted">
        Esto es muy habitual en JavaScript moderno (datos, APIs, JSON…).
      </p>
      <pre>
        <code className="language-js">{`let masDatos = [
  [7, { color: "rojo", potencia: 350 }],
  [15, { nombre: "Juan", apellido: "Díaz" }]
];

console.log(masDatos[0][1].color); // "rojo"
console.log(masDatos[1][1].apellido); // "Díaz"`}</code>
      </pre>
    </div>

    {/* COMPARATIVA */}
    <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🆚 Comparación rápida con otros lenguajes</p>
      <ul className="muted">
        <li>❌ No declaras tamaño inicial</li>
        <li>❌ No declaras tipo de datos</li>
        <li>✅ Puedes mezclar tipos</li>
        <li>✅ Puedes guardar objetos y arrays dentro</li>
        <li>✅ Ideal para datos dinámicos y reales</li>
      </ul>
    </div>

    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🎯 Idea clave</p>
      <p className="muted">
        En JavaScript, un array es más parecido a una <strong>lista flexible</strong>
        que a un array rígido de lenguajes tradicionales.
      </p>
    </div>
  </div>
</details>


   {/* 2) CREAR ARRAYS */}
<details className="topic-details" style={{ marginTop: ".75rem" }} open>
  <summary>
    <span className="summary-left">
      <span className="badge">📝</span> 1) Crear arrays en JavaScript
    </span>
    <span className="chev" aria-hidden="true">⌄</span>
  </summary>

  <div className="topic-details__content">
    <p>
      En JavaScript existen <strong>varias formas de crear arrays</strong>.  
      Algunas son básicas y otras más avanzadas, pero todas son importantes para
      entender código real.
    </p>

    <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
      <p className="callout__title">📌 Las 4 formas principales</p>
      <ol className="muted">
        <li>Arrays literales <code>[]</code></li>
        <li>Con el operador <strong>spread</strong> <code>...</code></li>
        <li>Con el constructor <code>Array()</code></li>
        <li>Con métodos <code>Array.of()</code> y <code>Array.from()</code></li>
      </ol>
    </div>

    {/* 1. ARRAY LITERAL */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>✅ 1) Arrays literales (la forma recomendada)</h4>
      <p className="muted">
        Es la forma más común, clara y utilizada en JavaScript.
        Usarás esta opción en la mayoría de los casos.
      </p>
      <pre>
        <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

let numeros = [1, 2, 3, 4, 5];

let mixto = ["Ana", 25, true, { rol: "dev" }];

let vacio = [];`}</code>
      </pre>
    </div>

    <div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
      <p className="callout__title">🎯 Regla práctica</p>
      <p className="muted">
        Si dudas, usa siempre <code>[]</code>. Es la opción más segura y legible.
      </p>
    </div>

    {/* 2. SPREAD */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>⭐ 2) Crear arrays con el operador spread <code>...</code></h4>
      <p className="muted">
        El operador <strong>spread</strong> permite <strong>copiar</strong>,
        <strong>combinar</strong> o <strong>expandir</strong> arrays existentes.
        Es fundamental en JavaScript moderno y en React.
      </p>

      <pre>
        <code className="language-js">{`let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

// Combinar arrays
let todos = [...numeros1, ...numeros2];
console.log(todos); // [1, 2, 3, 4, 5, 6]

// Copiar un array
let copia = [...numeros1];
console.log(copia); // [1, 2, 3]

// Añadir elementos
let extendido = [0, ...numeros1, 4];
console.log(extendido); // [0, 1, 2, 3, 4]`}</code>
      </pre>
    </div>

    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">🧠 Idea clave del spread</p>
      <p className="muted">
        <code>...</code> significa literalmente:  
        <strong>“saca los elementos de este array y colócalos aquí”</strong>.
      </p>
    </div>

    <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
      <p className="callout__title">⚠️ Muy importante (copias)</p>
      <p className="muted">
        <code>let copia = numeros1</code> <strong>NO</strong> crea una copia.  
        Ambos apuntan al mismo array.
      </p>
      <pre>
        <code className="language-js">{`let a = [1, 2, 3];
let b = a;
let c = [...a];

b.push(4);

console.log(a); // [1,2,3,4]
console.log(c); // [1,2,3]`}</code>
      </pre>
    </div>

    {/* 3. CONSTRUCTOR */}
    <div className="card" style={{ marginTop: "1rem" }}>
      <h4 style={{ marginTop: 0 }}>⚠️ 3) Constructor <code>new Array()</code></h4>
      <p className="muted">
        Existe, pero se usa poco y puede causar confusión.
      </p>
      <pre>
        <code className="language-js">{`let a = new Array(3);
console.log(a); // [ <3 empty items> ]

let b = new Array("pera", "uva");
console.log(b); // ["pera", "uva"]`}</code>
      </pre>
    </div>

    <div className="callout callout--danger" style={{ marginTop: ".75rem" }}>
      <p className="callout__title">❌ Recomendación</p>
      <p className="muted">
        Evita <code>new Array()</code> al empezar.  
        Usa arrays literales o spread.
      </p>
    </div>

    {/* 4. OF Y FROM */}
   {/* 4) MÉTODOS Array.of() y Array.from() */}
<div className="card" style={{ marginTop: "1rem" }}>
  <h4 style={{ marginTop: 0 }}>
    🔧 4) Crear arrays con <code>Array.of()</code> y <code>Array.from()</code>
  </h4>

  <p className="muted">
    Además de usar <code>[]</code> o el operador <code>...</code>, JavaScript ofrece
    <strong> métodos especiales</strong> para crear arrays en situaciones concretas.
  </p>

  <p className="muted">
    No son los más usados al principio, pero es importante que sepas
    <strong>qué hacen</strong> y <strong>cuándo tienen sentido</strong>.
  </p>
</div>

{/* ARRAY.OF */}
<div className="callout callout--concept" style={{ marginTop: "1rem" }}>
  <p className="callout__title">🅰️ <code>Array.of()</code> — crear un array “tal cual”</p>

  <p className="muted">
    <code>Array.of()</code> crea un array usando <strong>exactamente los valores que le pasas</strong>.
    No hace interpretaciones raras.
  </p>

  <pre>
    <code className="language-js">{`let a = Array.of(3);
console.log(a); // [3]

let b = Array.of(1, 2, 3);
console.log(b); // [1, 2, 3]`}</code>
  </pre>

  <p className="muted">
    Esto es especialmente útil para evitar un problema clásico del constructor <code>Array()</code>.
  </p>
</div>

<div className="callout callout--danger" style={{ marginTop: ".75rem" }}>
  <p className="callout__title">⚠️ Comparación importante</p>
  <pre>
    <code className="language-js">{`new Array(3);     // ❌ crea 3 huecos vacíos
Array.of(3);      // ✅ crea [3]`}</code>
  </pre>

  <p className="muted">
    👉 <strong>Regla sencilla:</strong>  
    Si quieres un array con un número dentro, usa <code>Array.of()</code> o <code>[]</code>.
  </p>
</div>

<div className="callout callout--tip" style={{ marginTop: ".75rem" }}>
  <p className="callout__title">🎯 Cuándo usar Array.of()</p>
  <ul className="muted">
    <li>Cuando quieres crear un array a partir de valores sueltos</li>
    <li>Cuando quieres evitar errores con <code>new Array()</code></li>
    <li>Cuando lees código moderno y quieres entenderlo</li>
  </ul>
</div>

{/* ARRAY.FROM */}
<div className="callout callout--concept" style={{ marginTop: "1rem" }}>
  <p className="callout__title">🅱️ <code>Array.from()</code> — convertir algo en un array</p>

  <p className="muted">
    <code>Array.from()</code> se usa cuando <strong>NO tienes un array</strong>,
    pero tienes algo que <strong>se parece a una lista</strong>.
  </p>

  <p className="muted">
    Su función principal es:  
    <strong>“crear un array a partir de otra cosa”</strong>.
  </p>
</div>

<div className="card" style={{ marginTop: ".75rem" }}>
  <h5 style={{ marginTop: 0 }}>📌 Ejemplo 1: convertir un texto en array</h5>
  <pre>
    <code className="language-js">{`let texto = "Hola";
let letras = Array.from(texto);

console.log(letras);
// ["H", "o", "l", "a"]`}</code>
  </pre>

  <p className="muted">
    Cada carácter del texto se convierte en un elemento del array.
  </p>
</div>

<div className="card" style={{ marginTop: ".75rem" }}>
  <h5 style={{ marginTop: 0 }}>📌 Ejemplo 2: listas del DOM (más adelante)</h5>
  <pre>
    <code className="language-js">{`let parrafos = document.querySelectorAll("p");

// No es un array real
console.log(parrafos.length);

// Lo convertimos en array
let lista = Array.from(parrafos);

// Ahora sí es un array
lista.forEach(p => {
  console.log(p.textContent);
});`}</code>
  </pre>

  <p className="muted">
    Esto lo entenderás mejor cuando empieces a trabajar con HTML y DOM,
    pero es uno de los usos más comunes de <code>Array.from()</code>.
  </p>
</div>

<div className="callout callout--tip" style={{ marginTop: "1rem" }}>
  <p className="callout__title">🧠 Idea clave para principiantes</p>
  <ul className="muted">
    <li><code>Array.of()</code> 👉 crea un array con los valores que le das</li>
    <li><code>Array.from()</code> 👉 convierte algo en un array</li>
    <li>Si ya tienes <code>[]</code>, no necesitas ninguno de los dos</li>
  </ul>
</div>

<div className="callout callout--concept" style={{ marginTop: "1rem" }}>
  <p className="callout__title">📌 Tranquilidad</p>
  <p className="muted">
    Al empezar, usarás casi siempre <code>[]</code> y <code>...</code>.  
    <code>Array.of()</code> y <code>Array.from()</code> son herramientas que
    <strong>irán cobrando sentido poco a poco</strong>.
  </p>
</div>


    {/* RESUMEN */}
    <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
      <p className="callout__title">📝 Resumen rápido</p>
      <ul className="muted">
        <li>✅ Usa <code>[]</code> para crear arrays</li>
        <li>⭐ Usa <code>...</code> para copiar y combinar</li>
        <li>⚠️ Evita <code>new Array()</code></li>
        <li>🔧 <code>Array.from()</code> es clave con DOM y strings</li>
      </ul>
    </div>
  </div>
</details>


        {/* 3) ÍNDICES */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> 2) Acceder a elementos (índices)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Los arrays son como casilleros numerados. Para entrar a un casillero usamos <code>[índice]</code>.
              Lo importante: <strong>empiezan en 0</strong>.
            </p>

            <div className="callout callout--concept" style={{ marginTop: ".75rem" }}>
              <p className="callout__title">📦 Casilleros numerados</p>
              <ul className="muted">
                <li>El primer elemento está en <code>[0]</code></li>
                <li>El segundo en <code>[1]</code></li>
                <li>Si pides un índice que no existe → <code>undefined</code></li>
              </ul>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>💡 Ejemplos de acceso</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas[0]); // "manzana"
console.log(frutas[1]); // "naranja"
console.log(frutas[2]); // "plátano"

console.log(frutas[5]); // undefined (no existe)

// Último elemento: length - 1
console.log(frutas[frutas.length - 1]); // "plátano"`}</code>
              </pre>
            </div>

            <div className="callout callout--danger" style={{ marginTop: "1rem" }}>
              <p className="callout__title">⚠️ Error típico</p>
              <p className="muted">
                <code>frutas[frutas.length]</code> se sale del array.  
                El último elemento siempre es <code>length - 1</code>.
              </p>
            </div>
          </div>
        </details>

        {/* 4) LENGTH */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📏</span> 3) ¿Cuántos elementos hay? (length)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>.length</code> te dice cuántos elementos hay en el array.  
              Es una <strong>propiedad</strong>, no un método: no lleva paréntesis.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📌 Ejemplo con length</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas.length); // 3

let vacio = [];
console.log(vacio.length); // 0

if (frutas.length > 0) {
  console.log("✅ El array tiene elementos");
} else {
  console.log("❌ El array está vacío");
}

// Último elemento
let ultima = frutas[frutas.length - 1];
console.log("Última fruta:", ultima);`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">💡 ¿Por qué length - 1?</p>
              <p className="muted">
                Si hay 3 elementos, los índices son <code>0</code>, <code>1</code>, <code>2</code>.  
                Por eso el último es <code>length - 1</code> (3 - 1 = 2).
              </p>
            </div>
          </div>
        </details>

        {/* 5) MODIFICAR ELEMENTOS */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">✏️</span> 4) Cambiar un elemento del array
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Puedes modificar un elemento accediendo a su índice y asignando un nuevo valor.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>✍️ Cambiar valores por índice</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas); // ["manzana", "naranja", "plátano"]

// Cambiamos el elemento de la posición 1
frutas[1] = "mandarina";

console.log(frutas); // ["manzana", "mandarina", "plátano"]`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 Truco para aprender</p>
              <p className="muted">
                Piensa: <strong>“Abro el cajón [1] y meto otra cosa dentro”</strong>.  
                No cambia el tamaño del array, solo cambia ese valor.
              </p>
            </div>
          </div>
        </details>

        {/* 6) VERIFICAR SI ES ARRAY */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">❓</span> 5) ¿Esto es un array? (Array.isArray)
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              A veces quieres comprobar si una variable es un array antes de usar métodos como{" "}
              <code>push()</code> o <code>forEach()</code>. Para eso usamos <code>Array.isArray()</code>.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>🔍 Detectando arrays</h4>
              <pre>
                <code className="language-js">{`let frutas = ["manzana", "naranja"];
let texto = "Hola";
let numero = 42;
let objeto = { nombre: "Ana" };

console.log(Array.isArray(frutas)); // true
console.log(Array.isArray(texto));  // false
console.log(Array.isArray(numero)); // false
console.log(Array.isArray(objeto)); // false`}</code>
              </pre>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🧠 ¿Por qué no usar typeof?</p>
              <p className="muted">
                <code>typeof []</code> devuelve <code>"object"</code>.  
                Por eso, para arrays, lo correcto es <code>Array.isArray()</code>.
              </p>
            </div>
          </div>
        </details>

        {/* 7) EJERCICIO (DOM SIMPLE) */}
        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧪</span> Ejercicio guiado: “Lista rápida”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p className="muted">
              Vas a crear un array y mostrar en pantalla: el primer elemento, el último y el total.
              Es un ejercicio perfecto para que se te quede grabado <code>[0]</code> y <code>length - 1</code>.
            </p>

            <div className="card" style={{ marginTop: "1rem" }}>
              <h4 style={{ marginTop: 0 }}>📘 Enunciado</h4>
              <ul className="muted">
                <li>Crea un array con 4 elementos (por ejemplo: frutas, nombres, asignaturas…)</li>
                <li>Muestra el <strong>primero</strong>, el <strong>último</strong> y el <strong>total</strong> en pantalla</li>
                <li>Extra: cambia el segundo elemento por otro distinto</li>
              </ul>

              <h5 style={{ marginTop: ".75rem" }}>🧩 Código base (HTML + JS)</h5>
              <pre>
                <code className="language-html">{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejercicio Arrays Intro</title>
</head>
<body>
  <h2>🧪 Arrays · Intro</h2>

  <p id="primero"></p>
  <p id="ultimo"></p>
  <p id="total"></p>
  <p id="modificado"></p>

  <script>
    // 1) Crea un array con 4 elementos (cambia los valores a tu gusto)
    let lista = ["manzana", "naranja", "plátano", "fresa"];

    // 2) Muestra el primer elemento
    document.getElementById("primero").textContent =
      "Primero: " + lista[0];

    // 3) Muestra el último elemento (length - 1)
    document.getElementById("ultimo").textContent =
      "Último: " + lista[lista.length - 1];

    // 4) Muestra el total
    document.getElementById("total").textContent =
      "Total: " + lista.length;

    // 5) Extra: cambia el segundo elemento (posición 1)
    lista[1] = "mandarina";
    document.getElementById("modificado").textContent =
      "Lista tras cambiar el segundo: " + lista;
  </script>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="callout callout--tip" style={{ marginTop: "1rem" }}>
              <p className="callout__title">🎯 ¿Qué estás practicando aquí?</p>
              <ul className="muted">
                <li>Crear arrays (<code>[]</code>)</li>
                <li>Acceso por índice (<code>[0]</code>, <code>[1]</code>)</li>
                <li>Propiedad <code>.length</code></li>
                <li>Último elemento con <code>length - 1</code></li>
                <li>Modificar valores por índice</li>
              </ul>
            </div>
          </div>
        </details>

        {/* 8) RESUMEN */}
        <details className="topic-details" style={{ marginTop: ".75rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Resumen rápido de Intro
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <div className="grid grid-3" style={{ gap: "1rem" }}>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>📋 Crear</h3>
                <p className="muted">Forma literal</p>
                <code>let arr = [1, 2, 3]</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>🔍 Acceder</h3>
                <p className="muted">Por índice</p>
                <code>arr[0]</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>📏 Contar</h3>
                <p className="muted">Propiedad</p>
                <code>arr.length</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>🎯 Último</h3>
                <p className="muted">length - 1</p>
                <code>arr[arr.length - 1]</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>✏️ Modificar</h3>
                <p className="muted">Por índice</p>
                <code>arr[1] = "nuevo"</code>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>❓ Verificar</h3>
                <p className="muted">Tipo correcto</p>
                <code>Array.isArray(arr)</code>
              </div>
            </div>

            <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
              <p className="callout__title">📌 Meta de esta lección</p>
              <p className="muted">
                Si ya sabes crear arrays, entrar con índices y usar <code>length</code>, estás listo para la siguiente:
                <strong> recorrer arrays</strong>.
              </p>
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
          <Link to="/arrays" className="btn btn-ghost">
            ← Índice Arrays
          </Link>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>¡Perfecto! 👏</h3>
            <p className="muted" style={{ margin: ".35rem 0 0 0" }}>
              Ya entiendes qué es un array y cómo se accede a sus datos.
            </p>
          </div>

          <Link to="/arrays/recorrer" className="btn btn-primary">
            Siguiente: Recorrer →
          </Link>
        </div>
      </section>
    </article>
  );
}
