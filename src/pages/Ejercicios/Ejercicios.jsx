// src/pages/Ejercicios/Ejercicios.jsx
import { Routes, Route, useParams, Link } from "react-router-dom";
import EjercicioVariables from "./EjercicioVariables.jsx";
import EjercicioTiposDatos from "./EjercicioTiposDatos.jsx";
import EjerciciosOperadores from "./EjerciciosOperadores.jsx";
import EjerciciosLogicos from "./EjerciciosLogicos.jsx";
import EjercicioIf from "./EjercicioIf.jsx";
import EjSwitch from "./EjSwitch.jsx";
import EjercicioWhile from "./M6EjercicioWhile.jsx";
import EjercicioDoWhile from "./EjercicioDoWhile.jsx";
import EjercicioFor from "./EjercicioFor.jsx";
import EjercicioAdivinaNumero from "./EjercicioAdivinaNumero.jsx";
import EjercicioEscalera from "./EjercicioEscalera.jsx";
import EjercicioTriangulo from "./EjercicioTriangulo.jsx";
import EjercicioForOf from "./EjercicioForOf.jsx";
import EjercicioMetodosArrays from "./EjercicioMetodosArrays.jsx";
import EjercicioArraysBasicos from "./EjercicioArraysBasicos.jsx";
import EjercicioArraysRetos from "./EjercicioArraysRetos.jsx";
import EjercicioCalculadoraInteligente from "./EjercicioCalculadoraInteligente.jsx";
import EjercicioStringsTemplateLiterals from "./EjercicioStringsTemplateLiterals.jsx";
import EjerciciosObjetos from "./EjerciciosObjetos.jsx";
import EjercicioBoletinNotas from "./EjercicioBoletinNotas.jsx";
import EjercicioFuncionesBasicas from "./EjercicioFuncionesBasicas.jsx";
import EjercicioFuncionesMix from "./EjercicioFuncionesMix.jsx";









// Función para obtener colores distintivos por tipo de ejercicio
function getExerciseCardStyle(modulo) {
  const styles = {
    'E1': {
      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(129, 199, 132, 0.08))',
      border: '2px solid rgba(76, 175, 80, 0.3)',
      boxShadow: '0 8px 32px rgba(76, 175, 80, 0.12)'
    },
    'E2': {
      background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(100, 181, 246, 0.08))',
      border: '2px solid rgba(33, 150, 243, 0.3)',
      boxShadow: '0 8px 32px rgba(33, 150, 243, 0.12)'
    },
    'E3': {
      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 183, 77, 0.08))',
      border: '2px solid rgba(255, 152, 0, 0.3)',
      boxShadow: '0 8px 32px rgba(255, 152, 0, 0.12)'
    },
    'E4': {
      background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.15), rgba(186, 104, 200, 0.08))',
      border: '2px solid rgba(156, 39, 176, 0.3)',
      boxShadow: '0 8px 32px rgba(156, 39, 176, 0.12)'
    },
    'E5': {
      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(129, 199, 132, 0.08))',
      border: '2px solid rgba(76, 175, 80, 0.3)',
      boxShadow: '0 8px 32px rgba(76, 175, 80, 0.12)'
    },
    'E6': {
      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.15), rgba(239, 83, 80, 0.08))',
      border: '2px solid rgba(244, 67, 54, 0.3)',
      boxShadow: '0 8px 32px rgba(244, 67, 54, 0.12)'
    },
    'E7': {
  background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15), rgba(77, 208, 225, 0.08))',
  border: '2px solid rgba(0, 188, 212, 0.3)',
  boxShadow: '0 8px 32px rgba(113, 202, 214, 0.12)'
},
'E8': {
  background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.15), rgba(255, 138, 101, 0.08))',
  border: '2px solid rgba(255, 87, 34, 0.3)',
  boxShadow: '0 8px 32px rgba(255, 87, 34, 0.12)'
},
'E9': {
  background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.15), rgba(121, 134, 203, 0.08))',
  border: '2px solid rgba(63, 81, 181, 0.3)',
  boxShadow: '0 8px 32px rgba(63, 81, 181, 0.12)'
},
'E10': {
  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15), rgba(255, 213, 79, 0.08))',
  border: '2px solid rgba(212, 31, 155, 0.3)',
  boxShadow: '0 8px 32px rgba(255, 193, 7, 0.12)'
},

'E11': {
  background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.15), rgba(240, 98, 146, 0.08))',
  border: '2px solid rgba(233, 30, 99, 0.3)',
  boxShadow: '0 8px 32px rgba(233, 30, 99, 0.12)'
},

'E12': {
  background: 'linear-gradient(135deg, rgba(0, 150, 136, 0.15), rgba(77, 182, 172, 0.08))',
  border: '2px solid rgba(0, 150, 136, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 150, 136, 0.12)'
},

'E13': {
  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(165, 214, 167, 0.08))',
  border: '2px solid rgba(28, 225, 34, 0.3)',
  boxShadow: '0 8px 32px rgba(76, 175, 80, 0.12)'
},
'E14': {
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(144, 202, 249, 0.08))',
  border: '2px solid rgba(33, 150, 243, 0.3)',
  boxShadow: '0 8px 32px rgba(33, 150, 243, 0.12)'
},
'E15': {
  background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.15), rgba(206, 147, 216, 0.08))',
  border: '2px solid rgba(156, 39, 176, 0.3)',
  boxShadow: '0 8px 32px rgba(156, 39, 176, 0.12)'
},
'E16': {
  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 204, 128, 0.08))',
  border: '2px solid rgba(255, 152, 0, 0.3)',
  boxShadow: '0 8px 32px rgba(255, 152, 0, 0.12)'
},
'E17': {
    background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.15), rgba(255, 138, 128, 0.08))',  
    border: '2px solid rgba(244, 67, 54, 0.3)',
    boxShadow: '0 8px 32px rgba(244, 67, 54, 0.12)'
  },
  'EXTRA': {
    background: 'linear-gradient(135deg, rgba(121, 85, 72, 0.15), rgba(161, 136, 127, 0.08))',
    border: '2px solid rgba(121, 85, 72, 0.3)',
    boxShadow: '0 8px 32px rgba(121, 85, 72, 0.12)' 
  },
  'E18': {
  background: 'linear-gradient(135deg, rgba(19, 170, 82, 0.16), rgba(22, 194, 100, 0.08))',
  border: '2px solid rgba(22, 194, 100, 0.3)',
  boxShadow: '0 8px 32px rgba(22, 194, 100, 0.12)'
},
'E19': {
  background: 'linear-gradient(135deg, rgba(96, 125, 139, 0.15), rgba(144, 164, 174, 0.08))',
  border: '2px solid rgba(96, 125, 139, 0.3)',
  boxShadow: '0 8px 32px rgba(96, 125, 139, 0.12)'
},
'E20': {
  background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(147, 197, 253, 0.08))',
  border: '2px solid rgba(96, 165, 250, 0.3)',
  boxShadow: '0 8px 32px rgba(96, 165, 250, 0.12)'
},
'E21': {
  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(134, 239, 172, 0.08))',
  border: '2px solid rgba(34, 197, 94, 0.3)',
  boxShadow: '0 8px 32px rgba(34, 197, 94, 0.12)'
},



  };
  
  return styles[modulo] || {
    background: 'rgba(18,27,42,.72)',
    border: '1px solid rgba(34,48,69,.85)',
    boxShadow: 'var(--shadow-soft)'
  };
}

// Lista completa de ejercicios disponibles
const ejercicios = {
  "e1-variables": {
    nombre: "Ejercicio: Variables (guardar y reasignar)",
    nivel: "Básico",
    modulo: "E1",
    descripcion: "Aprende lo esencial: crear variables con let/const, reasignar valores y mostrar resultados con console.log. Incluye mini práctica interactiva.",
    objetivo: [
      "Crear variables con let y const.",
      "Reasignar valores correctamente (solo con let).",
      "Mostrar resultados en consola con console.log.",
      "Entender por qué 'miVariable;' no muestra nada en Code Runner.",
    ],
    enunciado: [
      "Crea variables (nombre, edad, ciudad) y muéstralas con console.log.",
      "Reasigna la variable nombre y vuelve a mostrarla.",
      "Crea un mensaje con template literals usando esas variables.",
    ],
    pista: "Si no ves salida, usa console.log(...) y revisa que estás ejecutando el archivo correcto.",
  },
  "e2-tipos-datos": {
    nombre: "Ejercicios: Tipos de Datos y Operadores",
    nivel: "Básico",
    modulo: "E2",
    descripcion: "Practica con números, texto, booleanos y operadores a través de 4 ejercicios prácticos: calculadora, perfil personal, validador y convertidor.",
    objetivo: [
      "Trabajar con números y hacer cálculos reales",
      "Manipular texto y crear mensajes dinámicos",
      "Usar booleanos para validaciones",
      "Combinar operadores para resolver problemas",
      "Convertir entre diferentes tipos de datos"
    ],
    enunciado: [
      "Ejercicio 1: Crear una calculadora básica para una tienda online",
      "Ejercicio 2: Crear tu perfil personal con diferentes tipos de datos",
      "Ejercicio 3: Validar datos de un formulario de registro",
      "Ejercicio 4: Procesar y convertir datos de una encuesta"
    ],
    pista: "Cada ejercicio incluye la gramática necesaria, problema a resolver y solución explicada paso a paso.",
  },
  "operadores": {
    nombre: "Ejercicios: Operadores Aritméticos y de Comparación",
    nivel: "Básico",
    modulo: "E3",
    descripcion: "Practica operadores aritméticos (+, -, *, /, %), de comparación (>, <, ===) y lógicos (&&, ||, !) con ejercicios interactivos.",
    objetivo: [
      "Dominar operadores aritméticos básicos",
      "Usar operadores de comparación correctamente",
      "Combinar operadores lógicos",
      "Entender precedencia de operadores"
    ],
    enunciado: [
      "Ejercicio 1: Calculadora con operadores aritméticos",
      "Ejercicio 2: Comparaciones y validaciones",
      "Ejercicio 3: Lógica booleana práctica"
    ],
    pista: "Los paréntesis cambian el orden de las operaciones. Usa console.log para ver cada paso.",
  },
  "taller-operadores": {
    nombre: "Taller: Juego de las 3 Cajas - Operadores Avanzados",
    nivel: "Intermedio",
    modulo: "E4",
    descripcion: "Taller práctico donde combinas operadores aritméticos, lógicos y de comparación en un juego interactivo de 3 cajas que cambian de color.",
    objetivo: [
      "Aplicar operadores en un contexto real",
      "Usar paréntesis para controlar precedencia",
      "Combinar && y || efectivamente",
      "Crear lógica de juego con condiciones"
    ],
    enunciado: [
      "Completa el archivo HTML con operadores aritméticos",
      "Crea condiciones para las 3 cajas usando comparadores",
      "Aplica lógica booleana con paréntesis",
      "Prueba diferentes combinaciones"
    ],
    pista: "Este taller te enseña a pensar en lógica. Los paréntesis son clave para evitar sorpresas.",
  },
  
  
  
  "e4-condicionales": {
    nombre: "Ejercicios: Condicionales (if / else if / else)",
    nivel: "Intermedio",
    modulo: "E5",
    descripcion: "Practica condicionales con ejercicios que usan if, else if y else para tomar decisiones basadas en la entrada del usuario.",
    objetivo: [
      "Entender la estructura if / else if / else",
      "Usar prompt para pedir datos",
      "Validar y convertir datos",
      "Crear lógica condicional clara"
    ],
    enunciado: [
      "Ejercicio 1: Validar edad para acceso a curso",
      "Ejercicio 2: Determinar categoría de edad",
      "Ejercicio 3: Verificar nivel de estudios",
      "Ejercicio 4: Combinar condiciones para acceso"
    ],
    pista: "Recuerda convertir la entrada de prompt a número y manejar casos de cancelación.",
  },

  "e17-calculadora-inteligente": {
  nombre: "Reto: Calculadora inteligente (par/impar + signo)",
  nivel: "Intermedio",
  modulo: "EXTRA",
  descripcion: "Suma dos números y decide con condicionales si el resultado es par/impar y positivo/negativo/neutro.",
  objetivo: [
    "Convertir texto a número con Number().",
    "Validar entradas con Number.isNaN().",
    "Usar % para par/impar.",
    "Aplicar if / else if / else para el signo."
  ],
  enunciado: [
    "Pide dos números con prompt().",
    "Calcula la suma.",
    "Decide si es par o impar.",
    "Decide si es positivo, negativo o 0.",
    "Muestra el resultado con alert() y (extra) en pantalla."
  ],
  pista: "Recuerda: prompt devuelve texto. Convierte con Number() y valida con Number.isNaN()."
},

  "e6-switch": {
    nombre: "Ejercicios: Switch (opciones y rangos)",
    nivel: "Intermedio",
    modulo: "E6",
    descripcion: "Practica switch clásico para opciones cerradas y switch(true) para rangos de valores como alternativa a if/else if.",
    objetivo: [
      "Usar switch para comparar valores exactos",
      "Aplicar switch(true) para rangos y condiciones",
      "Entender la importancia del orden en switch(true)",
      "Decidir cuándo usar switch vs if/else"
    ],
    enunciado: [
      "Ejercicio 1: Menú interactivo con switch clásico",
      "Ejercicio 2: Sistema de calificaciones con switch(true)"
    ],
    pista: "En switch(true) el orden importa: el primer case que sea true se ejecuta.",
  },
  "e7-while": {
  nombre: "Ejercicio: Bucle while (contador básico)",
  nivel: "Básico",
  modulo: "E7",
  descripcion: "Tu primer bucle: repite código con un contador y entiende cómo evitar bucles infinitos.",
  objetivo: [
    "Entender qué es un bucle y para qué sirve.",
    "Usar while con una condición.",
    "Crear y actualizar un contador con contador++.",
    "Detectar el error típico: olvidar incrementar el contador."
  ],
  enunciado: [
    "Crea un contador que empiece en 1.",
    "Mientras el contador sea menor que 5, muestra 'Contador: X'.",
    "Incrementa el contador en cada vuelta.",
    "Comprueba en consola cómo cambia el contador."
  ],
  pista: "Piensa: inicio (contador=1), condición (contador < 5) y actualización (contador++). Sin actualización, no termina.",
},
"e8-do-while": {
  nombre: "Ejercicio: do...while vs while",
  nivel: "Básico",
  modulo: "E8",
  descripcion: "Comprende la diferencia real entre do...while y while cuando la condición es falsa desde el principio.",
  objetivo: [
    "Entender cuándo se ejecuta un bucle do...while.",
    "Comparar do...while con while.",
    "Saber elegir el bucle adecuado según el problema."
  ],
  enunciado: [
    "Ejecuta un do...while con condición falsa inicialmente.",
    "Comprueba que se ejecuta al menos una vez.",
    "Ejecuta un while con condición falsa.",
    "Observa que no se ejecuta ninguna vez."
  ],
  pista: "Recuerda: do...while comprueba la condición al final; while la comprueba al principio.",
},
"e9-for": {
  nombre: "Ejercicio: Bucle for (contador y rango)",
  nivel: "Básico",
  modulo: "E9",
  descripcion: "Aprende for desde cero: contador básico, dos variables a la vez (i/j) y un rango elegido por el usuario.",
  objetivo: [
    "Entender inicio / condición / actualización del for.",
    "Crear un contador que recorre varias vueltas.",
    "Usar dos variables dentro del for (i y j).",
    "Pedir inicio y final con prompt para controlar el rango."
  ],
  enunciado: [
    "Ejercicio 1: Haz un for que muestre los números del 0 al 4.",
    "Ejercicio 2: Haz un for con dos variables: i sube de 0 a 10 y j baja de 10 a 0.",
    "Ejercicio 3: Pide inicio y final con prompt y recorre ese rango con un for."
  ],
  pista: "Recuerda: (inicio; condición; actualización). Si la condición falla, el bucle se detiene.",
},
"e10-adivina-numero": {
  nombre: "Juego: Adivina el número",
  nivel: "Intermedio",
  modulo: "E10",
  descripcion: "Juego completo con while: el programa piensa un número y el usuario debe adivinarlo con pistas.",
  objetivo: [
    "Usar while cuando no sabemos cuántas repeticiones habrá.",
    "Trabajar con números aleatorios.",
    "Comparar valores y dar pistas.",
    "Contar intentos."
  ],
  enunciado: [
    "Genera un número aleatorio entre 1 y 100.",
    "Pide números al usuario hasta que acierte.",
    "Indica si debe probar un número más alto o más bajo.",
    "Muestra los intentos al acertar."
  ],
  pista: "Divide el problema en partes: generar número, repetir, comparar, contar.",
},
"e11-escalera": {
  nombre: "Ejercicio: Escalera de símbolos",
  nivel: "Básico",
  modulo: "E11",
  descripcion: "Construye una escalera visual usando un bucle for y una variable acumuladora.",
  objetivo: [
    "Usar un bucle for de forma correcta.",
    "Entender cómo funciona una variable acumuladora.",
    "Construir un resultado visual paso a paso."
  ],
  enunciado: [
    "Pide la altura de la escalera al usuario.",
    "Crea una línea vacía.",
    "En cada vuelta añade un símbolo.",
    "Muestra la escalera completa."
  ],
  pista: "La clave está en NO reiniciar la variable dentro del bucle.",
},

"e12-triangulo": {
  nombre: "Ejercicio: Triángulo con símbolos",
  nivel: "Intermedio",
  modulo: "E12",
  descripcion: "Construye un triángulo visual usando bucles anidados y lógica paso a paso.",
  objetivo: [
    "Entender los bucles anidados.",
    "Separar filas y columnas mentalmente.",
    "Combinar espacios y símbolos.",
    "Pensar en patrones visuales."
  ],
  enunciado: [
    "Pide la altura del triángulo.",
    "Usa un bucle para las filas.",
    "Usa dos bucles interiores para espacios y símbolos.",
    "Muestra el triángulo completo."
  ],
  pista: "Primero piensa cuántos espacios y cuántos símbolos tiene cada fila.",
},


"e13-for-of": {
  nombre: "Ejercicio: for...of con arrays",
  nivel: "Intermedio",
  modulo: "E13",
  descripcion: "Aprende a recorrer arrays con for...of y a construir contenido paso a paso.",
  objetivo: [
    "Entender qué es un array.",
    "Recorrer arrays con for...of.",
    "Comparar for clásico y for...of.",
    "Usar un acumulador para crear resultados."
  ],
  enunciado: [
    "Recorre un array de frutas con for...of.",
    "Accede a un elemento concreto del array.",
    "Construye un resultado visual con un bucle."
  ],
  pista: "for...of recorre valores directamente, no posiciones.",
},

"e14-arrays": {
  nombre: "Ejercicios: Arrays básicos (primer contacto)",
  nivel: "Básico",
  modulo: "E14",
  descripcion: "Primeros pasos con arrays: índices, length y recorrer con bucles sin liarte.",
  objetivo: [
    "Entender qué es un array y para qué sirve.",
    "Acceder a posiciones con índices (0, 1, 2...).",
    "Usar length para saber cuántos elementos hay.",
    "Recorrer un array con for / for...of."
  ],
  enunciado: [
    "Crea un array con 4 valores (por ejemplo frutas o colores).",
    "Muestra el primer elemento (posición 0).",
    "Muestra el último elemento usando length.",
    "Recorre el array y muestra cada elemento (for...of o for clásico)."
  ],
  pista: "Recuerda: los arrays empiezan en 0. El último es array[array.length - 1].",
},

"e15-arrays-metodos": {
  nombre: "Ejercicios: Métodos básicos de arrays",
  nivel: "Básico/Intermedio",
  modulo: "E15",
  descripcion: "Aprende a modificar arrays con push/pop y shift/unshift y a medirlos con length.",
  objetivo: [
    "Usar push() para añadir al final.",
    "Usar pop() para quitar del final.",
    "Usar unshift() para añadir al inicio.",
    "Usar shift() para quitar del inicio.",
    "Entender length como contador de elementos."
  ],
  enunciado: [
    "Crea un array con 3 elementos.",
    "Añade un elemento al final con push().",
    "Elimina el último con pop().",
    "Añade un elemento al principio con unshift().",
    "Elimina el primero con shift().",
    "Muestra cuántos elementos hay con length."
  ],
  pista: "push/pop trabajan con el final; shift/unshift con el inicio. Mira la consola antes y después.",
},


"e16-arrays-retos": {
  nombre: "Arrays: retos guiados + comparativa",
  nivel: "Básico/Intermedio",
  modulo: "E16",
  descripcion: "Retos guiados de métodos básicos y primer map/filter, con comparativa for vs for...of vs forEach vs map.",
  objetivo: [
    "Usar push/pop/shift/unshift/length con sentido.",
    "Entender map y filter como transformación y filtrado.",
    "Comparar 4 formas de recorrer arrays."
  ],
  enunciado: [
    "Reto A: modifica arrays con métodos básicos.",
    "Reto B: transforma arrays con map/filter.",
    "Comparativa: mismo objetivo con 4 recorridos."
  ],
  pista: "Abre la consola y fíjate en el antes/después de cada operación.",
},

  "e17-strings-template-literals": {
    nombre: "Ejercicio: Strings y Template Literals",
    nivel: "Básico",
    modulo: "E17",
    descripcion: "Practica manipulación de strings y creación de mensajes dinámicos con template literals.",
    objetivo: [
      "Crear y manipular strings.",
      "Usar template literals para mensajes dinámicos.",
      "Concatenar texto y variables fácilmente."
    ],
    enunciado: [
      "Crea variables de texto (nombre, ciudad, hobby).",
      "Construye un mensaje usando template literals.",
      "Muestra el mensaje en consola."
    ],
    pista: "Usa las comillas invertidas (`) para template literals y ${variable} para insertar variables."
  },

"e18-objetos-mix": {
  nombre: "Objetos: básicos + mix (arrays, condicionales y HTML)",
  nivel: "Básico/Intermedio",
  modulo: "E18",
  descripcion:
    "Dos ejercicios guiados de objetos y un tercer ejercicio que mezcla objetos + arrays + condicionales + operadores con un toque de HTML (inputs + botón). Incluye reto y solución oculta comentada.",
  objetivo: [
    "Crear objetos y modificar propiedades con . y []",
    "Usar 'in' y delete en objetos",
    "Recorrer objetos con for...in y Object.keys/values/entries",
    "Filtrar un array de objetos con condiciones",
    "Pintar resultados en HTML (React) de forma sencilla"
  ],
  enunciado: [
    "Ejercicio 1: Crear una ficha de alumno con objeto y validación simple",
    "Ejercicio 2: Generar un ticket recorriendo un objeto y sumando precios",
    "Ejercicio 3 (mix): Mini tienda con array de objetos, filtros y salida en HTML"
  ],
  pista:
    "Si te pierdes: empieza por crear el objeto con los inputs, luego valida, luego muestra. En el mix: filtra primero por categoría y después por stock y precio."
},
"e19-boletin-notas": {
  nombre: "Boletín de notas (media y veredicto)",
  nivel: "Básico / Intermedio",
  modulo: "E19",
  descripcion:
    "Ejercicio guiado donde se mezclan arrays, objetos, condicionales, operadores y template literals para crear un boletín de notas interactivo.",
  objetivo: [
    "Guardar datos en un array de objetos",
    "Recorrer arrays con for...of",
    "Calcular medias usando operadores",
    "Aplicar condicionales para obtener un veredicto",
    "Mostrar resultados con template literals"
  ],
  enunciado: [
    "Añadir nombre, asignatura y nota",
    "Guardar cada nota como un objeto dentro de un array",
    "Calcular la media de las notas",
    "Mostrar nota máxima y mínima",
    "Indicar aprobado, suspenso o matrícula"
  ],
  pista:
    "Empieza creando un array vacío. Usa una variable acumuladora para la suma y recuerda dividir entre el número total de notas."
},


"e20-funciones-basicas": {
  nombre: "Ejercicios: Funciones (básico)",
  nivel: "Básico",
  modulo: "E20",
  descripcion: "Parámetros, return, valores por defecto y funciones flecha. Todo guiado con solución oculta.",
  objetivo: [
    "Crear funciones con parámetros.",
    "Devolver valores con return.",
    "Usar valores por defecto.",
    "Escribir funciones flecha básicas."
  ],
  enunciado: [
    "Ejercicio 1: saludo con parámetros",
    "Ejercicio 2: descuento con return",
    "Ejercicio 3: valores por defecto",
    "Ejercicio 4: flecha + reto par/impar"
  ],
  pista: "Primero entiende qué entra (parámetros) y qué sale (return). Luego ya optimizas con flecha."
},

"e21-funciones-mix": {
  nombre: "Ejercicios: Mix (funciones + arrays + objetos + HTML)",
  nivel: "Intermedio",
  modulo: "E21",
  descripcion: "Mini-proyectos guiados: boletín de notas y mini tienda. Mezcla conceptos reales y pinta resultados en HTML.",
  objetivo: [
    "Combinar funciones con arrays y objetos.",
    "Usar condicionales y operadores para filtrar.",
    "Generar HTML con template literals e insertarlo con innerHTML."
  ],
  enunciado: [
    "Ejercicio 1: boletín de notas (media + estado + HTML)",
    "Ejercicio 2: mini tienda (filtros + reto mínimo stock)"
  ],
  pista: "Divide el problema: datos → cálculo (función) → decisión (if) → pintar HTML."
},




};

// Componente principal que lista todos los ejercicios (portada)
function ListaEjercicios() {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <span className="badge">🧩</span>
          <h1>Ejercicios prácticos</h1>
          <p className="muted">Pon en práctica lo aprendido con ejercicios guiados paso a paso.</p>
        </div>
      </header>

      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <div className="topic-section__title">
          <h2>Ejercicios disponibles</h2>
          <span className="topic-section__meta">{Object.keys(ejercicios).length} ejercicios</span>
        </div>

        <div className="grid grid-2" style={{ gap: "1rem", marginTop: "1rem" }}>
        {Object.entries(ejercicios).map(([slug, ejercicio]) => (
  <article key={slug} className="card" style={getExerciseCardStyle(ejercicio.modulo)}>
    <div style={{ marginBottom: ".8rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".4rem" }}>
        <span className="badge">{ejercicio.modulo}</span>
        <span className="muted small">{ejercicio.nivel}</span>
      </div>

      <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{ejercicio.nombre}</h3>
    </div>

    <p className="muted" style={{ marginBottom: ".75rem" }}>
      {ejercicio.descripcion}
    </p>

    {/* Extra: mini resumen (opcional pero útil) */}
    <ul className="muted" style={{ margin: 0, paddingLeft: "1.1rem", marginBottom: "1rem" }}>
      <li><strong>Objetivos:</strong> {ejercicio.objetivo.length}</li>
      <li><strong>Tareas:</strong> {ejercicio.enunciado.length}</li>
    </ul>

    <Link
      to={`/ejercicios/${slug}`}
      className="btn btn-primary"
      style={{ width: "100%" }}
    >
      Comenzar ejercicio →
    </Link>
  </article>
))}

        </div>

        <div className="callout callout--concept" style={{ marginTop: "1.5rem" }}>
          <p className="callout__title">💡 Cómo usar los ejercicios</p>
          <ul className="muted">
            <li>🎯 Lee el objetivo para entender qué vas a practicar</li>
            <li>📝 Sigue las tareas paso a paso</li>
            <li>💡 Usa las pistas si te quedas atascado</li>
            <li>🧪 Experimenta y prueba variaciones</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

// Componente para ejercicios individuales
function EjercicioDetalle() {
  const { slug } = useParams();
  const e = ejercicios[slug];

  if (!e) {
    return (
      <article className="topic">
        <header className="hero">
          <div className="hero-content">
            <span className="badge">⚠️</span>
            <h1>Ejercicio no encontrado</h1>
            <p className="muted">Vuelve a la lista y elige otro ejercicio.</p>
          </div>
        </header>

        <Link to="/ejercicios" className="btn btn-primary" style={{ marginTop: "1rem", display: "inline-flex" }}>
          ← Volver a ejercicios
        </Link>
      </article>
    );
  }

  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
            <span className="badge">{e.modulo}</span>
            <span className="muted">{e.nivel}</span>
          </div>
          <h1>{e.nombre}</h1>
          <p className="muted">{e.descripcion}</p>
        </div>
      </header>

      <section className="topic-section" style={{ marginTop: "1rem" }}>
        <details className="topic-details" open>
          <summary>
            <span className="summary-left">
              <span className="badge">🎯</span> Objetivo
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <ul>
              {e.objetivo.map((objetivo, index) => (
                <li key={index}>{objetivo}</li>
              ))}
            </ul>
          </div>
        </details>

        <details className="topic-details" style={{ marginTop: ".75rem" }} open>
          <summary>
            <span className="summary-left">
              <span className="badge">📝</span> Tareas
            </span>
            <span className="chev" aria-hidden="true">⌄</span>
          </summary>
          <div className="topic-details__content">
            <ol>
              {e.enunciado.map((tarea, index) => (
                <li key={index}>{tarea}</li>
              ))}
            </ol>
          </div>
        </details>

        <div className="callout callout--concept" style={{ marginTop: "1rem" }}>
          <p className="callout__title">💡 Pista</p>
          <p className="muted">{e.pista}</p>
        </div>

        <div style={{ display: "flex", gap: ".5rem", marginTop: "1.5rem" }}>
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

// Componente principal con rutas anidadas
export default function Ejercicios() {
  return (
    <Routes>
    <Route index element={<ListaEjercicios />} />

<Route path="e1-variables" element={<EjercicioVariables />} />
<Route path="e2-tipos-datos" element={<EjercicioTiposDatos />} />
<Route path="operadores" element={<EjerciciosOperadores />} />
<Route path="taller-operadores" element={<EjerciciosLogicos />} />
<Route path="e4-condicionales" element={<EjercicioIf />} />
<Route path="e6-switch" element={<EjSwitch />} />

<Route path="e7-while" element={<EjercicioWhile />} />
<Route path="e8-do-while" element={<EjercicioDoWhile />} />
<Route path="e9-for" element={<EjercicioFor />} />
<Route path="e10-adivina-numero" element={<EjercicioAdivinaNumero />} />
<Route path="e11-escalera" element={<EjercicioEscalera />} />
<Route path="e12-triangulo" element={<EjercicioTriangulo />} />
<Route path="e13-for-of" element={<EjercicioForOf />} />

<Route path="e14-arrays" element={<EjercicioArraysBasicos />} />
<Route path="e15-arrays-metodos" element={<EjercicioMetodosArrays />} />
<Route path="e16-arrays-retos" element={<EjercicioArraysRetos />} />
<Route path="e17-calculadora-inteligente" element={<EjercicioCalculadoraInteligente />} />
<Route path="e17-strings-template-literals" element={<EjercicioStringsTemplateLiterals />} />
<Route path="e18-objetos-mix" element={<EjerciciosObjetos />} />
<Route path="e19-boletin-notas" element={<EjercicioBoletinNotas />} />
<Route path="e20-funciones-basicas" element={<EjercicioFuncionesBasicas />} />
<Route path="e21-funciones-mix" element={<EjercicioFuncionesMix />} />





<Route path=":slug" element={<EjercicioDetalle />} />
 







    </Routes>
  );
}


