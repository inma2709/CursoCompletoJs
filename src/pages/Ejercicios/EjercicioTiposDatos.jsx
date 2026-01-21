// src/pages/Ejercicios/EjercicioTiposDatos.jsx
import { Link } from "react-router-dom";

export default function EjercicioTiposDatos() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">E2</span>
          <h1>Ejercicios: Tipos de Datos</h1>
          <p className="muted">Practica con números, texto, booleanos y operadores</p>

          <div className="row" style={{ marginTop: ".9rem" }}>
            <Link className="btn btn-ghost" to="/ejercicios">
              ⟵ Volver a Ejercicios
            </Link>
            <span className="badge">Nivel: Básico</span>
          </div>
        </div>
      </header>

      {/* MIGAS DE PAN */}
      <nav className="breadcrumbs" aria-label="Migas de pan" style={{ marginTop: "1rem" }}>
        <ul className="breadcrumb-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <li className="breadcrumb-item">
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="breadcrumb-item">
            <Link className="link" to="/ejercicios">Ejercicios</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="breadcrumb-item active" aria-current="page">
            Tipos de Datos
          </li>
        </ul>
      </nav>

      {/* INTRODUCCIÓN */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎮 ¡Hora de practicar!</h2>
          <span className="topic-section__meta">tipos de datos</span>
        </div>

        <div className="callout callout--concept" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">¡Vamos a poner en práctica todo lo aprendido!</p>
          <p>En estos ejercicios vas a:</p>
          <ul>
            <li>🔢 Trabajar con números y hacer cálculos reales</li>
            <li>📝 Manipular texto y crear mensajes</li>
            <li>✅ Usar booleanos para tomar decisiones</li>
            <li>⚙️ Combinar operadores para resolver problemas</li>
          </ul>
        </div>

        <div className="callout callout--warning" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">💡 Cómo hacer los ejercicios</p>
          <ol>
            <li><strong>Lee el problema completo</strong></li>
            <li><strong>Mira el ejemplo de la gramática</strong></li>
            <li><strong>Intenta escribir tu solución</strong></li>
            <li><strong>Compara con la solución propuesta</strong></li>
            <li><strong>¡Experimenta cambiando valores!</strong></li>
          </ol>
        </div>
      </section>

      {/* EJERCICIO 1: CALCULADORA BÁSICA */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🧮 Ejercicio 1: Mi Primera Calculadora</h2>
          <span className="topic-section__meta">cálculos</span>
        </div>

        <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Objetivo:</p>
          <p>Crear variables con números y usar operadores aritméticos para hacer cálculos básicos, como en una calculadora.</p>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📖</span> Gramática que necesitas
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="callout callout--concept">
              <p className="callout__title">Operadores aritméticos básicos</p>
              <pre>
                <code>{`// ESTRUCTURA: variable = numero operador numero
let suma = 10 + 5;        // Suma
let resta = 20 - 8;       // Resta  
let multiplicacion = 4 * 6; // Multiplicación
let division = 15 / 3;    // División
let resto = 17 % 5;       // Módulo (resto de división)

// También puedes usar variables:
let precio = 25;
let descuento = 5;
let precioFinal = precio - descuento;`}</code>
              </pre>
            </div>
          </div>
        </details>

        <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Problema a resolver:</p>
          <p><strong>Eres el encargado de una tienda online.</strong> Tienes que calcular:</p>
          <ul>
            <li>📦 El precio de 3 camisetas que cuestan €15 cada una</li>
            <li>🎁 Aplicar un descuento de €10</li>
            <li>🚚 Sumar gastos de envío de €5</li>
            <li>💰 Calcular el precio final</li>
          </ul>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">💭</span> Intenta resolverlo primero tú
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`// Declara las variables y haz los cálculos
// Pista: necesitarás multiplicación, resta y suma

// Tu código:`}</code>
            </pre>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".9rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Solución explicada
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`// 1. Definir los datos base
let precioCamiseta = 15;
let cantidadCamisetas = 3;
let descuento = 10;
let gastosEnvio = 5;

// 2. Calcular precio de las camisetas
let subtotal = precioCamiseta * cantidadCamisetas;
console.log("Subtotal camisetas: €" + subtotal); // €45

// 3. Aplicar descuento
let conDescuento = subtotal - descuento;
console.log("Con descuento: €" + conDescuento); // €35

// 4. Añadir gastos de envío
let precioFinal = conDescuento + gastosEnvio;
console.log("Precio final: €" + precioFinal); // €40

// 5. Mostrar resumen completo
console.log("=== RESUMEN DE COMPRA ===");
console.log("Camisetas: " + cantidadCamisetas + " x €" + precioCamiseta + " = €" + subtotal);
console.log("Descuento: -€" + descuento);
console.log("Envío: +€" + gastosEnvio);
console.log("TOTAL: €" + precioFinal);`}</code>
            </pre>

            <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🚀 Desafíos adicionales:</p>
              <ul>
                <li><strong>Cambia los valores:</strong> ¿Qué pasa si compras 5 camisetas?</li>
                <li><strong>Añade IVA:</strong> Calcula el 21% de IVA sobre el precio final</li>
                <li><strong>Descuento porcentual:</strong> En lugar de €10, aplica un 15% de descuento</li>
                <li><strong>Envío gratis:</strong> Si gastas más de €50, el envío es gratis</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* EJERCICIO 2: INFORMACIÓN PERSONAL */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>👤 Ejercicio 2: Mi Perfil Personal</h2>
          <span className="topic-section__meta">strings y tipos</span>
        </div>

        <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Objetivo:</p>
          <p>Crear un perfil personal combinando diferentes tipos de datos (strings, números, booleanos) y usar operadores de comparación.</p>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📖</span> Gramática que necesitas
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="callout callout--concept">
              <p className="callout__title">Tipos de datos y concatenación</p>
              <pre>
                <code>{`// STRINGS (texto)
let nombre = "María";
let apellido = "García";

// NUMBERS (números)
let edad = 25;
let altura = 1.65; // en metros

// BOOLEANS (verdadero/falso)
let estaEstudiando = true;
let tieneCarnet = false;

// CONCATENACIÓN (unir texto)
let nombreCompleto = nombre + " " + apellido;
let presentacion = "Hola, soy " + nombre + " y tengo " + edad + " años";

// OPERADORES DE COMPARACIÓN
let esMayorDeEdad = edad >= 18;    // true o false
let esAlto = altura > 1.70;        // true o false`}</code>
              </pre>
            </div>
          </div>
        </details>

        <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Problema a resolver:</p>
          <p><strong>Crea tu perfil personal con esta información:</strong></p>
          <ul>
            <li>📝 Tu nombre y apellido</li>
            <li>🎂 Tu edad (y calcula si eres mayor de edad)</li>
            <li>📏 Tu altura en metros (y comprueba si eres alto/a)</li>
            <li>🎓 Si estás estudiando actualmente</li>
            <li>🚗 Si tienes carnet de conducir</li>
            <li>💬 Crear una presentación completa</li>
          </ul>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Solución explicada
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`// 1. DATOS PERSONALES BÁSICOS
let nombre = "Ana";
let apellido = "Martín";
let edad = 22;
let altura = 1.68; // metros
let estaEstudiando = true;
let tieneCarnet = true;

// 2. CÁLCULOS Y COMPARACIONES
let nombreCompleto = nombre + " " + apellido;
let esMayorDeEdad = edad >= 18;
let esAlto = altura >= 1.70; // consideramos alto/a a partir de 1.70m

// 3. CREAR PRESENTACIÓN
let presentacion = "¡Hola! Soy " + nombreCompleto + " y tengo " + edad + " años.";

// 4. MOSTRAR INFORMACIÓN COMPLETA
console.log("=== MI PERFIL ===");
console.log("Nombre completo: " + nombreCompleto);
console.log("Edad: " + edad + " años");
console.log("Altura: " + altura + "m");
console.log("¿Es mayor de edad? " + esMayorDeEdad);
console.log("¿Es alto/a? " + esAlto);
console.log("¿Está estudiando? " + estaEstudiando);
console.log("¿Tiene carnet? " + tieneCarnet);

// 5. PRESENTACIÓN FINAL
console.log("\\n" + presentacion);

// 6. INFORMACIÓN ADICIONAL
if (esMayorDeEdad) {
    console.log("✅ Puede votar y conducir");
} else {
    console.log("❌ Aún es menor de edad");
}

// 7. VERIFICAR TIPO DE DATOS
console.log("\\n=== TIPOS DE DATOS ===");
console.log("Tipo de 'nombre': " + typeof nombre);
console.log("Tipo de 'edad': " + typeof edad);
console.log("Tipo de 'esMayorDeEdad': " + typeof esMayorDeEdad);`}</code>
            </pre>

            <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
              <p className="callout__title">🚀 Experimenta más:</p>
              <ul>
                <li><strong>Cambia tu edad:</strong> ¿Cómo cambia si pones 16 años?</li>
                <li><strong>Añade más datos:</strong> Ciudad, profesión, hobby favorito</li>
                <li><strong>Más comparaciones:</strong> ¿Puedes conducir? (mayor de edad + carnet)</li>
                <li><strong>Calcula años de nacimiento:</strong> 2024 - edad</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* EJERCICIO 3: VALIDADOR DE DATOS */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔍 Ejercicio 3: Validador de Formulario</h2>
          <span className="topic-section__meta">validaciones</span>
        </div>

        <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Objetivo:</p>
          <p>Usar operadores lógicos y de comparación para validar que los datos de un formulario sean correctos, como si fueras a crear una cuenta de usuario.</p>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📖</span> Gramática que necesitas
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="callout callout--concept">
              <p className="callout__title">Operadores lógicos y de comparación</p>
              <pre>
                <code>{`// OPERADORES DE COMPARACIÓN
let edad = 20;
let esAdulto = edad >= 18;        // Mayor o igual
let esJoven = edad < 65;          // Menor que
let esExacto = edad === 20;       // Exactamente igual
let noEsIgual = edad !== 15;      // Diferente de

// OPERADORES LÓGICOS
let puedeVotar = edad >= 18 && tieneCarnet;     // AND (ambas verdaderas)
let puedeEntrar = esVIP || tieneEntrada;        // OR (al menos una verdadera)
let noEsBot = !esRobot;                         // NOT (contrario)

// VERIFICAR LONGITUD DE STRINGS
let nombre = "Ana";
let esMuyCorto = nombre.length < 2;             // Menos de 2 caracteres
let esLongitudOK = nombre.length >= 2 && nombre.length <= 20; // Entre 2 y 20

// VERIFICAR STRING VACÍO
let email = "ana@gmail.com";
let emailVacio = email === "";                  // Está vacío
let emailValido = email !== "" && email.includes("@"); // No vacío y tiene @`}</code>
              </pre>
            </div>
          </div>
        </details>

        <div className="callout callout--exercise" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Problema a resolver:</p>
          <p><strong>Valida los datos de registro de un usuario:</strong></p>
          <ul>
            <li>👤 El nombre debe tener entre 2 y 20 caracteres</li>
            <li>📧 El email no puede estar vacío y debe contener "@"</li>
            <li>🔢 La edad debe ser mayor o igual a 16 años</li>
            <li>🔒 La contraseña debe tener al menos 6 caracteres</li>
            <li>✅ Mostrar si el registro es válido o no</li>
          </ul>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Solución completa
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`// 1. DATOS DEL USUARIO A VALIDAR
let nombre = "Ana";
let email = "ana@gmail.com";
let edad = 17;
let contraseña = "123456";

console.log("=== VALIDANDO REGISTRO ===");
console.log("Nombre: " + nombre);
console.log("Email: " + email);
console.log("Edad: " + edad);
console.log("Contraseña: " + contraseña);

// 2. VALIDACIONES INDIVIDUALES
let nombreValido = nombre.length >= 2 && nombre.length <= 20;
let emailValido = email !== "" && email.includes("@");
let edadValida = edad >= 16;
let contraseñaValida = contraseña.length >= 6;

// 3. MOSTRAR RESULTADO DE CADA VALIDACIÓN
console.log("\\n=== RESULTADOS INDIVIDUALES ===");
console.log("¿Nombre válido? " + nombreValido + " (longitud: " + nombre.length + ")");
console.log("¿Email válido? " + emailValido + " (tiene @: " + email.includes("@") + ")");
console.log("¿Edad válida? " + edadValida + " (mínimo 16 años)");
console.log("¿Contraseña válida? " + contraseñaValida + " (longitud: " + contraseña.length + ")");

// 4. VALIDACIÓN COMPLETA (TODAS deben ser verdaderas)
let registroValido = nombreValido && emailValido && edadValida && contraseñaValida;

console.log("\\n=== RESULTADO FINAL ===");
if (registroValido) {
    console.log("✅ ¡REGISTRO VÁLIDO! El usuario puede crear su cuenta");
} else {
    console.log("❌ REGISTRO INVÁLIDO. Errores encontrados:");
    
    // Mostrar errores específicos
    if (!nombreValido) {
        console.log("  - Nombre debe tener entre 2 y 20 caracteres");
    }
    if (!emailValido) {
        console.log("  - Email debe contener @ y no estar vacío");
    }
    if (!edadValida) {
        console.log("  - Edad mínima: 16 años");
    }
    if (!contraseñaValida) {
        console.log("  - Contraseña debe tener al menos 6 caracteres");
    }
}`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* EJERCICIO 4: CONVERSIÓN DE TIPOS */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔄 Ejercicio 4: Convertidor de Datos</h2>
          <span className="topic-section__meta">conversiones</span>
        </div>

        <div className="callout callout--example" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">🎯 Objetivo:</p>
          <p>Practicar la conversión entre diferentes tipos de datos y entender cómo JavaScript maneja las conversiones automáticas.</p>
        </div>

        <details className="topic-details" style={{ marginTop: ".9rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📖</span> Conversión manual de tipos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <pre>
              <code>{`// CONVERSIÓN MANUAL (tú decides)
let textoNumero = "25";
let numero = Number(textoNumero);        // String → Number
let numeroTexto = String(123);           // Number → String  
let aBolean = Boolean("hola");           // Cualquier cosa → Boolean

// VERIFICAR TIPOS
console.log(typeof textoNumero);         // "string"
console.log(typeof numero);              // "number"

// CONVERSIÓN AUTOMÁTICA (JavaScript decide)
let resultado1 = "5" + 2;                // "52" (convierte 2 a string)
let resultado2 = "5" - 2;                // 3 (convierte "5" a number)
let resultado3 = "5" * 2;                // 10 (convierte "5" a number)

// CASOS ESPECIALES
let numeroRaro = Number("hola");         // NaN (Not a Number)
let vacio = Number("");                  // 0
let espacio = Number(" ");               // 0`}</code>
            </pre>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".9rem" }}>
          <summary>
            <span className="summary-left">
              <span className="badge">✅</span> Procesador completo de datos
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <div className="callout callout--exercise">
              <p className="callout__title">🎯 Problema: Procesar datos de encuesta</p>
              <ul>
                <li>📊 Los datos llegan como texto, pero necesitas números para calcular</li>
                <li>🔢 Convierte las edades y calcula la edad promedio</li>
                <li>✅ Convierte respuestas de texto a booleanos</li>
                <li>⚠️ Maneja casos donde la conversión falla</li>
              </ul>
            </div>

            <pre>
              <code>{`// DATOS DE ENCUESTA (llegan como texto)
let edad1Texto = "25";
let edad2Texto = "30";
let edad3Texto = "abc"; // ¡Error intencionado!

// CONVERSIÓN DE EDADES
let edad1 = Number(edad1Texto);
let edad2 = Number(edad2Texto);  
let edad3 = Number(edad3Texto);  // NaN

// VERIFICAR SI LAS CONVERSIONES SON VÁLIDAS
let edad1Valida = !isNaN(edad1);
let edad2Valida = !isNaN(edad2);
let edad3Valida = !isNaN(edad3); // false

// CALCULAR PROMEDIO SOLO CON DATOS VÁLIDOS
let sumaEdades = 0;
let cantidadValidas = 0;

if (edad1Valida) {
    sumaEdades += edad1;
    cantidadValidas++;
}
if (edad2Valida) {
    sumaEdades += edad2;
    cantidadValidas++;
}

let edadPromedio = sumaEdades / cantidadValidas;
console.log("Edad promedio: " + edadPromedio);

// DEMOSTRAR CONVERSIÓN AUTOMÁTICA
console.log("'5' + 3 = " + ('5' + 3));        // "53"
console.log("'5' - 3 = " + ('5' - 3));        // 2
console.log("'5' * 3 = " + ('5' * 3));        // 15`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* RESUMEN FINAL */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎉 ¡Felicidades!</h2>
          <span className="topic-section__meta">completado</span>
        </div>

        <div className="callout callout--summary" style={{ marginTop: ".9rem" }}>
          <p className="callout__title">Has completado los ejercicios de tipos de datos</p>
          <p>Ahora sabes:</p>
          <ul>
            <li>🔢 Trabajar con números y hacer cálculos prácticos</li>
            <li>📝 Manipular texto y crear mensajes dinámicos</li>
            <li>✅ Usar booleanos para validaciones</li>
            <li>⚙️ Combinar operadores para resolver problemas reales</li>
            <li>🔄 Convertir entre diferentes tipos de datos</li>
          </ul>
        </div>

        <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
          <p className="callout__title">🚀 Próximos pasos</p>
          <ul>
            <li><strong>Practica más:</strong> Cambia los valores y experimenta</li>
            <li><strong>Crea tus propios ejercicios:</strong> Calculadora de notas, conversor de monedas</li>
            <li><strong>Sigue con Strings:</strong> Aprende métodos avanzados de texto</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: ".5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          <Link to="/ejercicios" className="btn btn-ghost">
            ← Volver a ejercicios
          </Link>
          <Link to="/" className="btn btn-ghost">
            📚 Volver al temario
          </Link>
        </div>
      </section>
    </article>
  );
}