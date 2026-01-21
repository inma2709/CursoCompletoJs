// src/pages/tema6/Tema6.jsx
export default function Tema6() {
  return (
    <article className="topic">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">M6</span>
          <h1>Objetos y Programación Orientada a Objetos</h1>
          <p className="muted">
            En este módulo aprenderás a trabajar con <strong>objetos</strong>, una de las
            piezas más importantes de JavaScript. Gracias a ellos podrás representar
            información compleja de forma clara, ordenada y reutilizable.
          </p>
        </div>
      </header>

      {/* =========================
          ¿POR QUÉ ESTE MÓDULO?
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Por qué aprender objetos?</h2>
          <span className="topic-section__meta">Portada</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🧠</span> Un paso clave en JavaScript
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              Hasta ahora has trabajado con variables, arrays, condicionales y bucles.
              Todo eso te ha permitido resolver problemas sencillos, pero cuando los
              datos empiezan a crecer, necesitas una forma mejor de organizarlos.
            </p>

            <p>
              Los <strong>objetos</strong> permiten agrupar información relacionada y
              describir cosas del mundo real: personas, productos, cursos, usuarios,
              coches, pedidos…
            </p>

            <p className="muted">
              Entender bien los objetos es imprescindible para seguir avanzando en
              JavaScript, trabajar con APIs y aprender frameworks como React.
            </p>
          </div>
        </details>
      </section>
{/* VIDEO */}
<section className="topic-section" style={{ marginTop: "1rem" }}>
  <div className="topic-box" style={{ marginTop: "1rem" }}>
    <h2 className="section-title">🎥 Video: ¿Qué son los objetos en JavaScript?</h2>
    <p className="muted">
      Antes de entrar en detalle, este vídeo te da una visión general de qué son los
      objetos y por qué son una pieza clave en JavaScript.
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
        src="https://www.youtube.com/embed/5DaZXXbHI_U"
        title="Objetos en JavaScript"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "0",
        }}
      />
    </div>
  </div>
</section>

      {/* =========================
          OBJETOS VS LO QUE YA SABES
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Cómo encajan los objetos con lo que ya sabes</h2>
          <span className="topic-section__meta">conexion</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🔗</span> No empiezas desde cero
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>
                Ya sabes usar <strong>arrays</strong> para listas de datos.
              </li>
              <li>
                Ya sabes usar <strong>funciones</strong> para ejecutar acciones.
              </li>
              <li>
                Los <strong>objetos</strong> combinan ambas cosas: datos + acciones.
              </li>
            </ul>

            <p className="muted">
              En este módulo no vas a desaprender nada, sino a <strong>organizar mejor</strong>
              lo que ya sabes hacer.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          QUÉ VAS A APRENDER
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Qué vas a aprender en el Módulo 6</h2>
          <span className="topic-section__meta">contenidos</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">📚</span> Recorrido del módulo
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>Qué es un objeto y en qué se diferencia de un array.</li>
              <li>Vocabulario clave: propiedad, método e instancia.</li>
              <li>Diferentes formas de crear objetos.</li>
              <li>Cómo acceder, modificar y recorrer objetos.</li>
              <li>Copias, referencias y errores típicos.</li>
              <li>JSON y su uso en la vida real.</li>
              <li>Una introducción clara a prototipos y clases.</li>
            </ul>

            <p className="muted">
              Todo explicado paso a paso, con ejemplos claros y ejercicios cortos.
            </p>
          </div>
        </details>
      </section>

      {/* =========================
          CÓMO AFRONTAR ESTE MÓDULO
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Cómo debes afrontar este módulo</h2>
          <span className="topic-section__meta">consejos</span>
        </div>

        <details className="topic-details">
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Consejos importantes
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <ul>
              <li>No intentes memorizar sintaxis.</li>
              <li>Prioriza entender <strong>qué representa cada objeto</strong>.</li>
              <li>Lee el código despacio y fíjate en los nombres.</li>
              <li>Equivocarte aquí es normal (y parte del aprendizaje).</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =========================
          CTA FINAL
      ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Listo para empezar?</h2>
          <span className="topic-section__meta">inicio</span>
        </div>

        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🚀</span> Comenzamos con la introducción
            </span>
            <span className="chev">⌄</span>
          </summary>

          <div className="topic-details__content">
            <p>
              En el siguiente tema empezarás a trabajar directamente con objetos y a
              diferenciarlos claramente de los arrays.
            </p>

            <p className="muted">
              👉 Continúa con <strong>Tema 6.1 – Introducción a los objetos</strong>.
            </p>
          </div>
        </details>
      </section>
    </article>
  );
}
