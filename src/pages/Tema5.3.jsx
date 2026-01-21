export default function M5Saltos() {
  return (
    <article className="wrap">
      {/* =========================
          HERO
      ========================= */}
      <header className="hero">
        <span className="badge">M5.3</span>
        <h1>Saltos y control del flujo</h1>
        <p className="muted">
          Aprendemos a <strong>interrumpir, continuar o redirigir</strong> la ejecución
          del código cuando es necesario.
        </p>
      </header>

      {/* =========================
          INTRO
      ========================= */}
      <section className="card">
        <h2>¿Qué son los saltos?</h2>

        <p>
          Normalmente, JavaScript ejecuta el código de forma
          <strong>secuencial</strong>: línea a línea.
        </p>

        <p>
          Los <strong>saltos</strong> permiten alterar ese recorrido normal:
        </p>

        <ul>
          <li>Salir de un bucle antes de tiempo.</li>
          <li>Saltar una iteración concreta.</li>
          <li>Terminar una función.</li>
          <li>Gestionar errores.</li>
        </ul>

        <div className="callout callout--warning">
          Los saltos son muy potentes, pero deben usarse con criterio.
          Un abuso puede hacer el código difícil de entender.
        </div>
      </section>

      {/* =========================
          BREAK
      ========================= */}
      <section className="card">
        <h2>El salto <code>break</code></h2>

        <p>
          <code>break</code> se utiliza para <strong>salir inmediatamente</strong>
          de un bucle o de un <code>switch</code>.
        </p>

        <pre>
          <code>{`for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}`}</code>
        </pre>

        <p>
          En este ejemplo, el bucle se detiene cuando <code>i</code> vale 5.
        </p>

        <div className="callout callout--tip">
          Usa <code>break</code> cuando ya has encontrado lo que buscabas
          y no necesitas seguir iterando.
        </div>
      </section>

      {/* =========================
          CONTINUE
      ========================= */}
      <section className="card">
        <h2>El salto <code>continue</code></h2>

        <p>
          <code>continue</code> <strong>no termina el bucle</strong>,
          solo salta la iteración actual y continúa con la siguiente.
        </p>

        <pre>
          <code>{`for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}`}</code>
        </pre>

        <p>
          En este caso, se muestran solo los números impares.
        </p>

        <div className="callout callout--tip">
          <code>continue</code> es útil para <strong>ignorar casos concretos</strong>
          sin romper todo el bucle.
        </div>
      </section>

      {/* =========================
          RETURN
      ========================= */}
      <section className="card">
        <h2>El salto <code>return</code></h2>

        <p>
          <code>return</code> se utiliza dentro de una función para:
        </p>

        <ul>
          <li>Devolver un valor.</li>
          <li>Terminar la ejecución de la función.</li>
        </ul>

        <pre>
          <code>{`function esMayorDeEdad(edad) {
  if (edad < 18) {
    return false;
  }
  return true;
}

console.log(esMayorDeEdad(20));`}</code>
        </pre>

        <div className="callout callout--tip">
          En cuanto se ejecuta un <code>return</code>, la función termina,
          aunque haya más código debajo.
        </div>
      </section>

      {/* =========================
          THROW
      ========================= */}
      <section className="card">
        <h2>El salto <code>throw</code></h2>

        <p>
          <code>throw</code> permite <strong>lanzar un error</strong> de forma manual
          cuando ocurre una situación que no debería suceder.
        </p>

        <pre>
          <code>{`function dividir(a, b) {
  if (b === 0) {
    throw "No se puede dividir entre cero";
  }
  return a / b;
}`}</code>
        </pre>

        <div className="callout callout--warning">
          <code>throw</code> interrumpe la ejecución del código si no se gestiona.
        </div>
      </section>

      {/* =========================
          TRY / CATCH / FINALLY
      ========================= */}
      <section className="card">
        <h2><code>try</code> / <code>catch</code> / <code>finally</code></h2>

        <p>
          Estas estructuras permiten <strong>gestionar errores</strong>
          sin que el programa se rompa.
        </p>

        <pre>
          <code>{`try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.log("Ha ocurrido un error:", error);
} finally {
  console.log("Fin del proceso");
}`}</code>
        </pre>

        <p>
          <code>finally</code> se ejecuta siempre, haya error o no.
        </p>

        <div className="callout callout--tip">
          Usar <code>try/catch</code> mejora la estabilidad y la experiencia de usuario.
        </div>
      </section>

      
      {/* =========================
          CUÁNDO USAR
      ========================= */}
      <section className="card">
        <h2>¿Cuándo usar cada salto?</h2>

        <ul>
          <li><strong>break</strong>: salir de un bucle o switch.</li>
          <li><strong>continue</strong>: saltar una iteración concreta.</li>
          <li><strong>return</strong>: terminar una función.</li>
          <li><strong>throw</strong>: indicar un error grave.</li>
          <li><strong>try/catch</strong>: gestionar errores sin romper el programa.</li>
        </ul>

        <div className="callout callout--tip">
          Si dudas, prioriza claridad frente a “atajos” de código.
        </div>
      </section>

      {/* =========================
          VÍDEO
      ========================= */}
      <section className="video-block">
        <div className="video-title">Saltos y control del flujo</div>
        <p className="video-meta muted">
          Cómo y cuándo interrumpir la ejecución del código
        </p>

        <div className="embed">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Saltos en JavaScript"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* =========================
          EJERCICIOS
      ========================= */}
      <section className="card">
        <h2>🧪 Ejercicios prácticos</h2>

        <ol>
          <li>
            Crea un bucle que se detenga cuando el contador llegue a 7 usando <code>break</code>.
          </li>
          <li>
            Muestra solo los números impares del 1 al 15 usando <code>continue</code>.
          </li>
          <li>
            Crea una función que devuelva <code>true</code> si un número es positivo
            y <code>false</code> si no lo es.
          </li>
          <li>
            Lanza un error con <code>throw</code> si una función recibe un valor incorrecto.
          </li>
        </ol>

        <div className="callout callout--tip">
          No memorices los saltos: entiéndelos con ejemplos.
        </div>
      </section>

      {/* =========================
          ENLACES
      ========================= */}
      <section className="resources-box">
        <div className="resources-box__header">
          <h3 className="resources-box__title">🔗 Enlaces relacionados</h3>
          <p className="resources-box__hint">
            Revisa el resto del módulo
          </p>
        </div>

        <ul className="resources-list">
          <li>
            <a href="/m5-bucles">➜ M5.2 · Bucles</a>
          </li>
          <li>
            <a href="/m5-condicionales">➜ M5.1 · Condicionales</a>
          </li>
          <li>
            <a href="/m5">➜ Volver a M5 · Estructuras de control</a>
          </li>
        </ul>
      </section>
    </article>
  );
}
