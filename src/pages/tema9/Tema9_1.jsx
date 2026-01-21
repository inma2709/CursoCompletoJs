// src/pages/tema9/Tema9_1.jsx
export default function Tema9_1() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M9.1</span>
          <h1>Tema 9.1 · Métodos de Strings (texto)</h1>
          <p className="muted">
            Limpiar, buscar y transformar texto como lo harías en una app real: formularios, validaciones,
            buscadores y mensajes.
          </p>
        </div>
      </header>

      {/* =========================
          OBJETIVO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Qué vas a aprender aquí</h2>
          <span className="topic-section__meta">objetivo</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Lo que te hará ir más rápido
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Entender qué es un <strong>string</strong> y por qué los strings son{" "}
                <strong>inmutables</strong>.
              </li>
              <li>
                Limpiar texto con <code>trim()</code> y variantes.
              </li>
              <li>
                Cambiar formato con <code>toUpperCase()</code>, <code>toLowerCase()</code>.
              </li>
              <li>
                Buscar y comprobar con <code>includes()</code>, <code>startsWith()</code>,{" "}
                <code>endsWith()</code>, <code>indexOf()</code>.
              </li>
              <li>
                Cortar y extraer con <code>slice()</code> y <code>substring()</code>.
              </li>
              <li>
                Reemplazar con <code>replace()</code> / <code>replaceAll()</code>.
              </li>
              <li>
                Convertir texto en lista con <code>split()</code> y volver a unir con <code>join()</code>{" "}
                (veremos el <code>join</code> más en arrays, pero aquí te lo conecto).
              </li>
            </ul>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Meta práctica:</strong> que puedas coger lo que escribe un usuario y dejarlo “bonito”
                y “usable”: sin espacios raros, con mayúsculas/minúsculas correctas, y con comprobaciones
                (¿incluye algo?, ¿empieza por…?).
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          INMUTABILIDAD
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧊 Regla nº1: los strings NO se modifican</h2>
          <span className="topic-section__meta">inmutables</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⚠️</span> Esto explica muchos errores
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Los strings son <strong>inmutables</strong>. Eso significa que si haces:
              <br />
              <code>texto.trim()</code> o <code>texto.toUpperCase()</code>, el string original{" "}
              <strong>no cambia</strong>. Obtienes un <strong>nuevo</strong> string.
            </p>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`let texto = "  hola  ";

// Esto NO cambia "texto"
texto.trim();

console.log(texto); // "  hola  " (sigue igual)

// Para quedarte el resultado, lo guardas:
let limpio = texto.trim();
console.log(limpio); // "hola"`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Truco:</strong> si el método es de string, casi siempre “devuelve” algo.
                <br />
                Por eso: <strong>guárdalo</strong> en una variable si lo necesitas.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          LIMPIAR TEXTO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧼 1) Limpiar texto: trim, trimStart, trimEnd</h2>
          <span className="topic-section__meta">limpiar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧽</span> El método nº1 en formularios
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Cuando un usuario escribe, suele meter espacios sin querer:
              <br />
              <code>" Inma "</code>, <code>" hola mundo "</code>…
              <br />
              Para limpiar espacios al principio y al final usamos:
            </p>

            <ul>
              <li>
                <code>trim()</code> → quita espacios al inicio y al final
              </li>
              <li>
                <code>trimStart()</code> → quita solo al inicio
              </li>
              <li>
                <code>trimEnd()</code> → quita solo al final
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const a = "   Hola   ";
console.log(a.trim());      // "Hola"
console.log(a.trimStart()); // "Hola   "
console.log(a.trimEnd());   // "   Hola"`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Tienes este nombre: <code>"   María Inmaculada   "</code>. Déjalo sin espacios extra.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const nombre = "   María Inmaculada   ";
const limpio = nombre.trim();
console.log(limpio);`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          MAYUS/MINUS
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔤 2) Cambiar formato: toUpperCase y toLowerCase</h2>
          <span className="topic-section__meta">formato</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">Aa</span> Normalizar para comparar
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Muy útil cuando quieres comparar texto sin que importen mayúsculas/minúsculas.
              <br />
              Ejemplo típico: el usuario escribe “SeViLLa” y tú quieres tratarlo como “sevilla”.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const ciudad = "SeViLLa";

console.log(ciudad.toLowerCase()); // "sevilla"
console.log(ciudad.toUpperCase()); // "SEVILLA"`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Regla práctica:</strong> para comparar texto escrito por usuarios, suele ser buena
                idea hacer:
                <br />
                <code>texto.trim().toLowerCase()</code>
              </p>
            </div>

            <div className="code-example" style={{ marginTop: ".75rem" }}>
              <pre>
                <code>{`const entrada = "  SeViLLa  ";
const normalizado = entrada.trim().toLowerCase();

if (normalizado === "sevilla") {
  console.log("✅ Ciudad reconocida");
}`}</code>
              </pre>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          BUSCAR Y COMPROBAR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔎 3) Buscar y comprobar: includes, startsWith, endsWith</h2>
          <span className="topic-section__meta">buscar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🔍</span> Preguntas típicas de app
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>Estas funciones responden preguntas rápidas:</p>
            <ul>
              <li>
                <code>includes("...")</code> → ¿contiene esto?
              </li>
              <li>
                <code>startsWith("...")</code> → ¿empieza por esto?
              </li>
              <li>
                <code>endsWith("...")</code> → ¿termina en esto?
              </li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const frase = "Aprender JavaScript es divertido";

console.log(frase.includes("JavaScript"));   // true
console.log(frase.startsWith("Aprender"));   // true
console.log(frase.endsWith("divertido"));    // true
console.log(frase.includes("python"));       // false`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica real
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Valida un email “muy básico”: que incluya <code>@</code> y termine en <code>.com</code>.
                  (Ojo: no es validación profesional, es práctica de métodos).
                </p>

                <div className="code-example">
                  <pre>
                    <code>{`const email = "  alumno@gmail.com ";
const e = email.trim().toLowerCase();

const ok = e.includes("@") && e.endsWith(".com");

console.log(ok ? "✅ Pasa la validación básica" : "❌ No válida");`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Tip:</strong> si buscas sin importar mayúsculas/minúsculas:
                <br />
                usa <code>toLowerCase()</code> antes de hacer <code>includes()</code>.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          INDEXOF
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📍 4) indexOf: encontrar la posición</h2>
          <span className="topic-section__meta">indexof</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">#</span> ¿En qué posición aparece?
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>indexOf()</code> te devuelve la posición (índice) donde aparece un texto:
            </p>
            <ul>
              <li>Si lo encuentra, devuelve un número: 0, 1, 2…</li>
              <li>Si NO lo encuentra, devuelve <code>-1</code></li>
            </ul>

            <div className="code-example">
              <pre>
                <code>{`const frase = "Hola mundo";

console.log(frase.indexOf("Hola"));   // 0
console.log(frase.indexOf("mundo"));  // 5
console.log(frase.indexOf("JS"));     // -1`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>¿Entonces para qué existe includes?</strong> <br />
                Porque <code>includes()</code> es más directo cuando solo quieres true/false. <br />
                Usa <code>indexOf()</code> cuando te interesa la posición.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          CORTAR TEXTO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>✂️ 5) Cortar texto: slice y substring</h2>
          <span className="topic-section__meta">cortar</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">✂️</span> “Quiero un trocito de texto”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Para extraer una parte de un texto usamos sobre todo <code>slice(inicio, fin)</code>.
              <br />
              El <strong>fin no se incluye</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const palabra = "JavaScript";

console.log(palabra.slice(0, 4));  // "Java"
console.log(palabra.slice(4));     // "Script"
console.log(palabra.slice(-6));    // "Script" (desde el final)`}</code>
              </pre>
            </div>

            <p style={{ marginTop: ".75rem" }}>
              <code>substring()</code> se parece, pero no admite negativos igual de cómodo. Si estás
              empezando: <strong>quédate con slice</strong>.
            </p>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Tienes <code>"JS-2026"</code>. Quiero quedarme solo con el año <code>"2026"</code>.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const codigo = "JS-2026";
const year = codigo.slice(3);
console.log(year); // "2026"`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          REEMPLAZAR
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔁 6) Reemplazar: replace y replaceAll</h2>
          <span className="topic-section__meta">reemplazar</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔁</span> Cambiar partes del texto
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>replace()</code> reemplaza la <strong>primera</strong> coincidencia.
              <br />
              <code>replaceAll()</code> reemplaza <strong>todas</strong>.
            </p>

            <div className="code-example">
              <pre>
                <code>{`const frase = "hola hola hola";

console.log(frase.replace("hola", "adiós"));     // "adiós hola hola"
console.log(frase.replaceAll("hola", "adiós"));  // "adiós adiós adiós"`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica: “limpiar” guiones
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Convierte <code>"hola-mundo-javascript"</code> en <code>"hola mundo javascript"</code>.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const slug = "hola-mundo-javascript";
const normal = slug.replaceAll("-", " ");
console.log(normal);`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Ojo:</strong> igual que antes, esto devuelve un string nuevo. El original no cambia.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SPLIT (Y CONEXIÓN CON ARRAYS)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧩 7) split: convertir texto en lista</h2>
          <span className="topic-section__meta">split</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧱</span> Cuando quieres “trocear”
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              <code>split()</code> rompe un string en partes y te devuelve un <strong>array</strong>.
              <br />
              Tú le dices por qué carácter separar: espacio, coma, guion…
            </p>

            <div className="code-example">
              <pre>
                <code>{`const frase = "HTML,CSS,JS";
const partes = frase.split(",");
console.log(partes); // ["HTML","CSS","JS"]`}</code>
              </pre>
            </div>

            <details className="topic-details" style={{ marginTop: ".75rem" }}>
              <summary>
                <span className="summary-left">
                  <span className="badge">🧪</span> Mini práctica: palabras
                </span>
                <span className="chev" aria-hidden="true">
                  ⌄
                </span>
              </summary>
              <div className="topic-details__content">
                <p>
                  Cuenta cuántas palabras tiene <code>"aprendo js desde cero"</code>.
                </p>
                <div className="code-example">
                  <pre>
                    <code>{`const txt = "aprendo js desde cero";
const palabras = txt.split(" ");
console.log(palabras.length); // 4`}</code>
                  </pre>
                </div>

                <p className="muted">
                  (En textos “reales” habría dobles espacios, puntuación, etc. Ya lo afinaremos más adelante.)
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* =========================
          EJEMPLO DE VIDA REAL (SIN DOM AÚN)
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>✅ Mini ejemplo real: normalizar un nombre</h2>
          <span className="topic-section__meta">mini-real</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">⭐</span> Esto lo usarás mil veces
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <p>
              Imagina que un usuario escribe su nombre así:
              <code> "  iNMa   "</code>
              <br />
              Tú quieres guardarlo como: <code>"Inma"</code>
            </p>

            <div className="code-example">
              <pre>
                <code>{`const entrada = "  iNMa   ";

// 1) limpiamos espacios
const limpio = entrada.trim().toLowerCase(); // "inma"

// 2) ponemos la primera letra en mayúscula y el resto igual
const normalizado = limpio.slice(0, 1).toUpperCase() + limpio.slice(1);

console.log(normalizado); // "Inma"`}</code>
              </pre>
            </div>

            <div className="friendly-box" style={{ marginTop: ".75rem" }}>
              <p style={{ margin: 0 }}>
                <strong>Fíjate:</strong> aquí estamos encadenando métodos (uno detrás de otro) porque cada uno
                devuelve un string nuevo.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          EJERCICIOS (CON SOLUCIÓN)
      ========================= */}
      <section className="topic-section" style={{ marginBottom: "1.25rem" }}>
        <div className="topic-section__title">
          <h2>🧪 Ejercicios rápidos (con solución)</h2>
          <span className="topic-section__meta">practica</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧩</span> Hazlos en consola primero
            </span>
            <span className="chev" aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className="topic-details__content">
            <ol>
              <li>
                Dado <code>"  Hola   "</code>, deja el texto limpio y en minúsculas.
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">✅</span> Solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`const txt = "  Hola   ";
const r = txt.trim().toLowerCase();
console.log(r);`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </li>

              <li style={{ marginTop: ".75rem" }}>
                Comprueba si <code>"JavaScript"</code> incluye <code>"Script"</code>.
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">✅</span> Solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`const w = "JavaScript";
console.log(w.includes("Script")); // true`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </li>

              <li style={{ marginTop: ".75rem" }}>
                Dado <code>"foto.png"</code>, comprueba si termina en <code>".png"</code>.
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">✅</span> Solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`const f = "foto.png";
console.log(f.endsWith(".png")); // true`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </li>

              <li style={{ marginTop: ".75rem" }}>
                Convierte <code>"a-b-c"</code> en <code>"a b c"</code>.
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">✅</span> Solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`const s = "a-b-c";
console.log(s.replaceAll("-", " ")); // "a b c"`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </li>

              <li style={{ marginTop: ".75rem" }}>
                Extrae <code>"JS"</code> de <code>"JS-2026"</code>.
                <details className="topic-details" style={{ marginTop: ".5rem" }}>
                  <summary>
                    <span className="summary-left">
                      <span className="badge">✅</span> Solución
                    </span>
                    <span className="chev" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <div className="topic-details__content">
                    <div className="code-example">
                      <pre>
                        <code>{`const c = "JS-2026";
console.log(c.slice(0, 2)); // "JS"`}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              </li>
            </ol>

            <div className="divider" />

            <p style={{ margin: 0 }}>
              Siguiente: <strong>Tema 9.2</strong> — arrays básicos (push/pop, includes, slice/splice, join).
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
