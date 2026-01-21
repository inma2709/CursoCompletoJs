export default function Tema3() {
  return (
    <main className="wrap">
       <header className="hero">
        <div className="hero-content">
          <span className="badge">M3</span>
          <h1>Datos y variables en JavaScript</h1>
          <p className="muted">
            Aprende a guardar y trabajar con información usando variables y tipos de datos.
          </p>
        </div>
      </header>
      <article className="topic">
        

        {/* =========================
            TEMA 3 — CONTENIDO
           ========================= */}
        <section className="topic-section" style={{ marginTop: "1rem" }}>
        
<figure className="card" style={{ marginTop: ".2rem" }}>
                <img
                  src="/variables.png"
                  alt="Ilustración: una variable como una caja con etiqueta"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption className="muted small" style={{ marginTop: ".6rem" }}>
                  Una variable es como una caja con etiqueta donde guardas información.
                </figcaption>
              </figure>
          {/* 1) ¿QUÉ ES UNA VARIABLE? */}
          <details className="topic-details" style={{ marginTop: ".2rem" }} >
            <summary>
              <span className="summary-left">
                <span className="badge">1</span> 🧩 ¿Qué es una variable?
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              

              <p style={{ marginTop: ".9rem" }}>
                Una <strong>variable</strong> es un “contenedor con nombre” donde guardas un valor
                para usarlo después. El <strong>nombre</strong> es la etiqueta; el{" "}
                <strong>valor</strong> es lo que hay dentro.
              </p>

              <pre>
                <code>{`let nombre = "Ana";
let edad = 25;
let activo = true;

console.log(nombre); // "Ana"
console.log(edad);   // 25
console.log(activo); // true`}</code>
              </pre>

              <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🔍 Reglas para nombres de variables</p>
                <ul className="muted">
                  <li>
                    Empieza con letra, <code>_</code> o <code>$</code>
                  </li>
                  <li>
                    Puede contener letras, números, <code>_</code> y <code>$</code>
                  </li>
                  <li>
                    Distingue mayúsculas: <code>nombre</code> ≠ <code>Nombre</code>
                  </li>
                  <li>
                    No uses palabras reservadas (<code>let</code>, <code>if</code>,{" "}
                    <code>function</code>…)
                  </li>
                </ul>
              </div>

              <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".9rem" }}>
                <div className="callout callout--example">
                  <p className="callout__title">✅ Buenos nombres</p>
                  <pre>
                    <code>{`let nombreUsuario = "María";
let precioTotal = 29.99;
let emailValido = true;
const PI = 3.14159;`}</code>
                  </pre>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">❌ Nombres confusos</p>
                  <pre>
                    <code>{`let a = "María";
let x = 29.99;
let flag = true;
let numero = 3.14159;`}</code>
                  </pre>
                </div>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Práctica rápida</p>
                <p className="muted">
                  Crea variables para tu nombre, edad y ciudad. Muestra un mensaje:
                  <em>
                    {" "}
                    “Hola, soy [nombre], tengo [edad] años y vivo en [ciudad]”.
                  </em>
                </p>
              </div>
            </div>
          </details>

          {/* 2) DECLARAR: var / let / const */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">2</span> 🧱 Declarar variables: var / let / const
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">
                En proyectos modernos usamos <code>let</code> y <code>const</code>.{" "}
                <code>var</code> es antiguo y puede causar comportamientos confusos.
              </p>

              <pre>
                <code>{`var nombre = "Ana";     // antiguo (evitar)
let edad = 25;          // moderno
const pais = "España";  // constante (no reasignable)`}</code>
              </pre>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🎯 Regla práctica</p>
                <p className="muted">
                  <strong>1.</strong> Usa <code>const</code> por defecto <br />
                  <strong>2.</strong> Cambia a <code>let</code> solo si necesitas modificar el valor{" "}
                  <br />
                  <strong>3.</strong> Evita <code>var</code>
                </p>
              </div>

              <details className="topic-details" style={{ marginTop: ".9rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">+</span> ✅ Declarar vs asignar
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>

                <div className="topic-details__content">
                  <div className="grid grid-2" style={{ gap: "1rem" }}>
                    <div className="callout callout--example">
                      <p className="callout__title">Declarar + asignar</p>
                      <pre>
                        <code>{`let ciudad = "Sevilla";`}</code>
                      </pre>
                    </div>
                    <div className="callout callout--concept">
                      <p className="callout__title">Declarar sin asignar</p>
                      <pre>
                        <code>{`let ciudad;
console.log(ciudad); // undefined`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                    <p className="callout__title">Resumen</p>
                    <p className="muted">
                      <strong>Declarar</strong> = crear la variable.{" "}
                      <strong>Asignar</strong> = darle un valor.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </details>

          {/* 3) let vs const */}
          <details className="topic-details" style={{ marginTop: ".8rem" }} >
            <summary>
              <span className="summary-left">
                <span className="badge">3</span> ⚖️ let vs const: ¿cuál usar?
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <p>
                La diferencia es simple: <strong>¿el valor puede cambiar después?</strong>
              </p>

              <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".9rem" }}>
                <div className="callout callout--concept">
                  <p className="callout__title">let = puede cambiar</p>
                  <pre>
                    <code>{`let puntos = 10;
puntos = 20;   // ✅ OK
puntos += 5;   // ✅ OK
console.log(puntos); // 25`}</code>
                  </pre>
                  <p className="muted small">
                    Úsalo para contadores, estados que se actualizan, acumuladores…
                  </p>
                </div>

                <div className="callout callout--example">
                  <p className="callout__title">const = NO se reasigna</p>
                  <pre>
                    <code>{`const nombre = "Ana";
// nombre = "Luis"; // ❌ Error

const PI = 3.14159;
// PI = 3.14;       // ❌ Error`}</code>
                  </pre>
                  <p className="muted small">
                    Úsalo para valores fijos, configuraciones, referencias.
                  </p>
                </div>
              </div>

              <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">⚠️ Ojo con objetos y arrays</p>
                <p className="muted">
                  Con <code>const</code> no puedes reasignar, pero sí modificar su contenido:
                </p>
                <pre>
                  <code>{`const usuario = { nombre: "Ana", edad: 25 };
usuario.edad = 26; // ✅ OK (modificar)
// usuario = {};    // ❌ Error (reasignar)`}</code>
                </pre>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio</p>
                <p className="muted">
                  Crea <code>let contador = 0</code> y auméntalo 3 veces. Luego crea{" "}
                  <code>const mensaje = "Hola"</code> e intenta cambiarlo. ¿Qué pasa?
                </p>
              </div>
            </div>
          </details>

          {/* 4) TIPOS PRIMITIVOS + typeof */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">4</span> 📋 Tipos de datos primitivos (+ typeof)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <figure className="card" style={{ marginTop: ".2rem" }}>
                <img
                  src="/tt3.png"
                  alt="Esquema visual de los tipos de datos en JavaScript"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption className="muted small" style={{ marginTop: ".6rem" }}>
                  Los tipos de datos son como “cajones”: cada uno guarda una clase de información.
                </figcaption>
              </figure>

              <p style={{ marginTop: ".9rem" }}>
                JavaScript necesita saber <strong>qué tipo de información</strong> guardas para decidir{" "}
                <strong>qué operaciones</strong> puede hacer con ella.
              </p>

              <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">5 tipos primitivos esenciales</p>
                <div className="grid grid-2" style={{ gap: ".8rem", marginTop: ".6rem" }}>
                  <ul className="muted">
                    <li>
                      📝 <code>string</code> — texto
                    </li>
                    <li>
                      🔢 <code>number</code> — números
                    </li>
                    <li>
                      ✅ <code>boolean</code> — verdadero/falso
                    </li>
                  </ul>
                  <ul className="muted">
                    <li>
                      ❓ <code>undefined</code> — sin valor
                    </li>
                    <li>
                      ⭕ <code>null</code> — vacío intencional
                    </li>
                  </ul>
                </div>
              </div>

              <details className="topic-details" style={{ marginTop: ".9rem" }} >
                <summary>
                  <span className="summary-left">
                    <span className="badge">4.1</span> 📝 string (texto)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <p className="muted">Nombres, mensajes, URLs, descripciones…</p>
                  <pre>
                    <code>{`const nombre = "María";
const plantilla = \`Hola \${nombre}\`;

console.log(plantilla);
console.log(typeof nombre); // "string"`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">4.2</span> 🔢 number (números)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <p className="muted">Edades, precios, cálculos, contadores…</p>
                  <pre>
                    <code>{`let precio = 19.99;
let cantidad = 2;

let total = precio * cantidad;
console.log(total);
console.log(typeof total); // "number"`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">4.3</span> ✅ boolean (true/false)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <p className="muted">Perfecto para decisiones y validaciones.</p>
                  <pre>
                    <code>{`const edad = 20;
const esAdulto = edad >= 18;

console.log(esAdulto);        // true
console.log(typeof esAdulto); // "boolean"`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">4.4</span> ❓ undefined y null
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <div className="grid grid-2" style={{ gap: "1rem" }}>
                    <div className="callout callout--concept">
                      <p className="callout__title">undefined</p>
                      <p className="muted">Declarada, pero aún sin valor.</p>
                      <pre>
                        <code>{`let sinValor;
console.log(sinValor); // undefined`}</code>
                      </pre>
                    </div>

                    <div className="callout callout--example">
                      <p className="callout__title">null</p>
                      <p className="muted">Vacío intencional (lo decides tú).</p>
                      <pre>
                        <code>{`let avatar = null;
console.log(avatar); // null`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
                    <p className="callout__title">⚠️ Ojo con typeof null</p>
                    <p className="muted">
                      <code>typeof null</code> devuelve <code>"object"</code> (bug histórico). Para comprobar{" "}
                      <code>null</code>, usa comparación directa:
                    </p>
                    <pre>
                      <code>{`const valor = null;
console.log(valor === null); // true`}</code>
                    </pre>
                  </div>
                </div>
              </details>

              <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🔍 typeof: tu herramienta para comprobar tipos</p>
                <pre>
                  <code>{`console.log(typeof "Hola");      // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (bug histórico)`}</code>
                </pre>
              </div>

              <details className="topic-details" style={{ marginTop: ".9rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">+</span> 🔄 Conversiones (cuando se lían los tipos)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <div className="callout callout--warning">
                    <p className="callout__title">Ejemplo clásico</p>
                    <pre>
                      <code>{`console.log("5" + 2); // "52" (concatena)
console.log("5" - 2); // 3    (convierte a número)`}</code>
                    </pre>
                  </div>

                  <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
                    <p className="callout__title">Conversiones explícitas (recomendadas)</p>
                    <pre>
                      <code>{`const textoNumero = "25";
const numero = Number(textoNumero); // 25

const edad = 30;
const edadTexto = String(edad); // "30"

const resultado = Number("hola"); // NaN
console.log(isNaN(resultado)); // true`}</code>
                    </pre>
                  </div>

                  <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
                    <p className="callout__title">Regla del curso</p>
                    <pre>
                      <code>{`console.log("5" == 5);  // true  (convierte)
console.log("5" === 5); // false (no convierte)`}</code>
                    </pre>
                    <p className="muted">
                      En este curso: <strong>siempre</strong> usa <code>===</code>.
                    </p>
                  </div>
                </div>
              </details>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Práctica</p>
                <p className="muted">
                  Crea variables de cada tipo primitivo y usa <code>typeof</code> para verificar sus tipos.
                </p>
              </div>
            </div>
          </details>

          {/* 5) STRINGS */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">5</span> 📝 Strings: métodos esenciales
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
            

             <p style={{ marginTop: ".9rem" }}>
  Los <strong>strings</strong> son el tipo de dato que más vas a usar. Aunque a primera vista parecen
  simples textos, en JavaScript tienen <strong>métodos</strong> porque el lenguaje los trata
  internamente como <strong>objetos temporales</strong> cuando necesitas operar con ellos
  (por ejemplo, contar caracteres, convertir a mayúsculas o buscar texto).
  Esto significa que puedes escribir código como{" "}
  <code className="inline-code">texto.length</code> o{" "}
  <code className="inline-code">texto.toUpperCase()</code>{" "}
  sin crear nada extra.  
  Este comportamiento <strong>no es exclusivo de JavaScript</strong>: muchos lenguajes modernos
  (como Java, Python o C#) también ofrecen métodos asociados a los strings, aunque internamente
  lo implementen de formas distintas. Lo importante para ti es entender que los strings
  <strong>se comportan como valores simples</strong>, pero con <strong>herramientas incorporadas</strong>
  para trabajar con ellos de forma cómoda y segura.
</p>


              <details className="topic-details" style={{ marginTop: ".9rem" }} >
                <summary>
                  <span className="summary-left">
                    <span className="badge">5.1</span> 🚀 Template literals (la forma moderna)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <pre>
                    <code>{`const nombre = "Ana";
const edad = 25;

const mensaje = \`Hola \${nombre}, tienes \${edad} años\`;
console.log(mensaje);`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }} >
                <summary>
                  <span className="summary-left">
                    <span className="badge">5.2</span> 📏 .length (contar caracteres)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <pre>
                    <code>{`const password = "miPassword123";

if (password.length >= 8) {
  console.log("✅ Contraseña válida");
} else {
  console.log("❌ Muy corta");
}`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">5.3</span> ✅ .includes() (comprobar si contiene)
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <pre>
                    <code>{`const email = "maria@gmail.com";

if (email.includes("@") && email.includes(".")) {
  console.log("✅ Formato válido");
} else {
  console.log("❌ Formato inválido");
}`}</code>
                  </pre>
                </div>
              </details>

              <details className="topic-details" style={{ marginTop: ".8rem" }}>
                <summary>
                  <span className="summary-left">
                    <span className="badge">5.4</span> 🔠 .toUpperCase() / .toLowerCase()
                  </span>
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="topic-details__content">
                  <pre>
                    <code>{`const usuario = "Ana";
const input = "ana";

if (usuario.toLowerCase() === input.toLowerCase()) {
  console.log("✅ Usuario coincide (sin importar mayúsculas)");
}`}</code>
                  </pre>
                </div>
              </details>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Ejercicio práctico</p>
                <p className="muted">
                  Generador de saludo: crea <code>nombre</code> y <code>edad</code>, valida que{" "}
                  <code>nombre.length &gt; 2</code> y muestra un mensaje con template literals.
                </p>
              </div>
            </div>
          </details>

          {/* 6) BUENAS PRÁCTICAS */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">6</span> 🎯 Buenas prácticas y errores típicos
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <div className="callout callout--summary" style={{ marginTop: ".2rem" }}>
                <p className="callout__title">✅ Reglas de oro</p>
                <ul className="muted">
                  <li>
                    Usa <code>const</code> por defecto; <code>let</code> solo si vas a cambiar el
                    valor
                  </li>
                  <li>
                    Nombres descriptivos: <code>totalCarrito</code> mejor que <code>t</code>
                  </li>
                  <li>Declara antes de usar</li>
                  <li>
                    Para texto con variables: template literals
                  </li>
                  <li>
                    Para comparar: <strong>
                      <code>===</code>
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="grid" style={{ gap: ".8rem", marginTop: ".9rem" }}>
                <div className="callout callout--warning">
                  <p className="callout__title">1) Reasignar const</p>
                  <pre>
                    <code>{`const precio = 10;
precio = 15;  // ❌ TypeError`}</code>
                  </pre>
                  <p className="muted small">
                    <strong>Solución:</strong> usa <code>let</code> si el valor debe cambiar.
                  </p>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">2) Variables sin declarar</p>
                  <pre>
                    <code>{`nombre = "Ana"; // ❌ variable implícita
console.log(nombre);`}</code>
                  </pre>
                  <p className="muted small">
                    <strong>Solución:</strong> siempre <code>let</code> o <code>const</code>.
                  </p>
                </div>

                <div className="callout callout--warning">
                  <p className="callout__title">3) Confundir tipos en operaciones</p>
                  <pre>
                    <code>{`const numero = "5";     // string
const suma = numero + 3; // "53" (concatena)
console.log(suma);`}</code>
                  </pre>
                  <p className="muted small">
                    <strong>Solución:</strong> convierte: <code>Number(numero) + 3</code> →{" "}
                    <code>8</code>
                  </p>
                </div>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Reto final</p>
                <p className="muted">
                  Encuentra y corrige los errores:
                  <br />
                  <code>const nome = "Ana";</code>
                  <br />
                  <code>nome = "Luis";</code>
                  <br />
                  <code>console.log(Nome);</code>
                  <br />
                  <code>let suma = "10" + 5;</code>
                </p>
              </div>
            </div>
          </details>

          {/* 7) TIPOS COMPLEJOS */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">7</span> 📦 Extra: tipos complejos (array y object)
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">
                Los primitivos guardan “una cosa”. Los complejos guardan muchas cosas juntas.
              </p>

              <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".9rem" }}>
                <div className="callout callout--example">
                  <p className="callout__title">📋 Array (lista)</p>
                  <pre>
                    <code>{`const frutas = ["manzana", "naranja", "uva"];
console.log(frutas);`}</code>
                  </pre>
                </div>

                <div className="callout callout--concept">
                  <p className="callout__title">🏠 Object (ficha)</p>
                  <pre>
                    <code>{`const persona = { nombre: "María", edad: 28, ciudad: "Madrid" };
console.log(persona);`}</code>
                  </pre>
                </div>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
                <p className="callout__title">🛠️ Mini práctica</p>
                <p className="muted">
                  Crea un <code>array</code> con 3 hobbies y un <code>object</code> alumno con{" "}
                  <code>nombre</code> y <code>edad</code>. Muestra ambos en consola.
                </p>
              </div>
            </div>
          </details>

          {/* 8) VÍDEOS */}
          <details className="topic-details" style={{ marginTop: ".8rem" }}>
            <summary>
              <span className="summary-left">
                <span className="badge">8</span> 🎥 Vídeos recomendados
              </span>
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>

            <div className="topic-details__content">
              <p className="muted">Explicaciones guiadas para reforzar lo visto en este módulo.</p>

              <div className="grid grid-2" style={{ gap: "1rem", marginTop: ".9rem" }}>
                <article className="card">
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: ".8rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/baDdsQ4aw4o"
                      title="Variables en JavaScript"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <p className="small">
                      <strong>Variables y tipos de datos</strong>
                    </p>
                    <p className="muted small">
                      let vs const, tipos primitivos y base para empezar sólido.
                    </p>
                  </div>
                </article>

                <article className="card">
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: ".8rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/kXMpu07zjN4"
                      title="Errores típicos con variables"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <p className="small">
                      <strong>Errores típicos con variables</strong>
                    </p>
                    <p className="muted small">
                      Fallos comunes al declarar y usar variables, y cómo evitarlos.
                    </p>
                  </div>
                </article>
              </div>

              <div className="callout callout--exercise" style={{ marginTop: "1rem" }}>
                <p className="callout__title">📚 Mini tarea con los vídeos</p>
                <p className="muted">
                  Elige un vídeo, apunta 3 ideas clave y 1 duda. La resolvemos en clase.
                </p>
              </div>
            </div>
          </details>

          {/* CIERRE */}
          <div className="callout callout--summary" style={{ marginTop: "1rem" }}>
            <p className="callout__title">✅ Qué deberías dominar al terminar</p>
            <ul className="muted" style={{ marginTop: ".4rem" }}>
              <li>
                Declarar variables con <code>let</code> y <code>const</code>.
              </li>
              <li>
                Elegir <code>const</code> por defecto y pasar a <code>let</code> cuando toque.
              </li>
              <li>
                Distinguir <code>string</code>, <code>number</code>, <code>boolean</code>,{" "}
                <code>undefined</code> y <code>null</code>.
              </li>
              <li>
                Usar <code>typeof</code> y hacer conversiones explícitas cuando sea necesario.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
