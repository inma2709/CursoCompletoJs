import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";
import Tema1 from "./pages/Tema1.jsx";
import Tema2 from "./pages/Tema2.jsx";
import Tema3 from "./pages/Tema3.jsx";
import Ejercicios from "./pages/Ejercicios/Ejercicios.jsx";
import EjercicioVariables from "./pages/Ejercicios/EjercicioVariables.jsx";
import Tema4 from "./pages/Tema4.jsx";
import Tema5 from "./pages/Tema5.jsx";
import Tema51 from "./pages/Tema5.1.jsx";
import Tema52 from "./pages/Tema5.2.jsx";
import Tema53 from "./pages/Tema5.3.jsx";
import Tema6 from "./pages/tema6/Tema6.jsx";
import Tema6_1 from "./pages/tema6/Tema6_1.jsx";
import Tema6_2 from "./pages/tema6/Tema6_2.jsx";
import Tema6_3 from "./pages/tema6/Tema6_3.jsx";
import Tema6_4 from "./pages/tema6/Tema6_4.jsx";
import Tema6_5 from "./pages/tema6/Tema6_5.jsx";
import Tema6_6 from "./pages/tema6/Tema6_6.jsx";
import Tema6_7 from "./pages/tema6/Tema6_7.jsx";
import Tema6_8 from "./pages/tema6/Tema6_8.jsx";
import Tema6_9 from "./pages/tema6/Tema6_9.jsx";
import Tema6_10 from "./pages/tema6/Tema6_10.jsx";
import ArraysIntro from "./pages/Arrays/ArraysIntro.jsx";
import ArraysRecorrer from "./pages/Arrays/ArraysRecorrer.jsx";
import ArraysMetodosBasicos from "./pages/Arrays/ArraysMetodosBasicos.jsx";
import ArraysTransformar from "./pages/Arrays/ArraysTransformar.jsx";
import Arrays from "./pages/Arrays/Arrays.jsx";
import EjerciciosObjetos from "./pages/Ejercicios/EjerciciosObjetos.jsx";
import Tema7 from "./pages/tema7/Tema7.jsx";
import Tema7_1 from "./pages/tema7/Tema7_1.jsx";
import Tema7_2 from "./pages/tema7/Tema7_2.jsx";
import Tema7_3 from "./pages/tema7/Tema7_3.jsx";
import Tema7_4 from "./pages/tema7/Tema7_4.jsx";
import Tema7_5 from "./pages/tema7/Tema7_5.jsx";
import Tema7_6 from "./pages/tema7/Tema7_6.jsx";
// TEMA 8
import Tema8 from "./pages/tema8/Tema8.jsx";
import Tema8_1 from "./pages/tema8/Tema8_1.jsx";
import Tema8_2 from "./pages/tema8/Tema8_2.jsx";
import Tema8_3 from "./pages/tema8/Tema8_3.jsx";
import Tema8_4 from "./pages/tema8/Tema8_4.jsx";
import Tema8_5 from "./pages/tema8/Tema8_5.jsx";
import Tema8_6 from "./pages/tema8/Tema8_6.jsx";

// TEMA 9 (carpeta nueva)
import Tema9 from "./pages/tema9/Tema9.jsx";
import Tema9_1 from "./pages/tema9/Tema9_1.jsx";
import Tema9_2 from "./pages/tema9/Tema9_2.jsx";
import Tema9_3 from "./pages/tema9/Tema9_3.jsx";
import Tema9_4 from "./pages/tema9/Tema9_4.jsx";
import Tema9_5 from "./pages/tema9/Tema9_5.jsx";
import Tema9_6 from "./pages/tema9/Tema9_6.jsx";
import Tema10 from "./pages/tema10/Tema10.jsx";
import Tema10_1 from "./pages/tema10/Tema10_1.jsx";
import Tema10_2 from "./pages/tema10/Tema10_2.jsx";
import Tema10_3 from "./pages/tema10/Tema10_3.jsx";
import Tema10_4 from "./pages/tema10/Tema10_4.jsx";
import Tema10_5 from "./pages/tema10/Tema10_5.jsx";
import Tema10_6 from "./pages/tema10/Tema10_6.jsx";





export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/tema1" element={<Tema1 />} />
        <Route path="/tema2" element={<Tema2 />} />
        <Route path="/tema3" element={<Tema3 />} />
        <Route path="/tema4" element={<Tema4 />} />
        <Route path="/tema5" element={<Tema5 />} />
        <Route path="/5.1" element={<Tema51 />} />
        <Route path="/5.2" element={<Tema52 />} />
        <Route path="/5.3" element={<Tema53 />} />
        <Route path="/tema6" element={<Tema6 />} />

<Route path="/6.1" element={<Tema6_1 />} />
<Route path="/6.2" element={<Tema6_2 />} />
<Route path="/6.3" element={<Tema6_3 />} />
<Route path="/6.4" element={<Tema6_4 />} />
<Route path="/6.5" element={<Tema6_5 />} />
<Route path="/6.6" element={<Tema6_6 />} />
<Route path="/6.7" element={<Tema6_7 />} />
<Route path="/6.8" element={<Tema6_8 />} />
<Route path="/6.9" element={<Tema6_9 />} />
<Route path="/6.10" element={<Tema6_10 />} />
<Route path="/arrays" element={<Arrays />} />
<Route path="/arrays/intro" element={<ArraysIntro />} />
<Route path="/ejercicios/objetos" element={<EjerciciosObjetos />} />

<Route path="/arrays/recorrer" element={<ArraysRecorrer />} />
<Route path="/arrays/metodos-basicos" element={<ArraysMetodosBasicos />} />
<Route path="/arrays/transformar" element={<ArraysTransformar />} />
<Route path="/tema7" element={<Tema7 />} />
<Route path="/7.1" element={<Tema7_1 />} />
<Route path="/7.2" element={<Tema7_2 />} />
<Route path="/7.3" element={<Tema7_3 />} />
<Route path="/7.4" element={<Tema7_4 />} />
<Route path="/7.5" element={<Tema7_5 />} />
<Route path="/7.6" element={<Tema7_6 />} />
       <Route path="/tema8" element={<Tema8 />} />
<Route path="/8_1" element={<Tema8_1 />} />
<Route path="/8_2" element={<Tema8_2 />} />
<Route path="/8_3" element={<Tema8_3 />} />
<Route path="/8_4" element={<Tema8_4 />} />
<Route path="/8_5" element={<Tema8_5 />} />
<Route path="/8_6" element={<Tema8_6 />} />

<Route path="/tema9" element={<Tema9 />} />
<Route path="/9_1" element={<Tema9_1 />} />
<Route path="/9_2" element={<Tema9_2 />} />
<Route path="/9_3" element={<Tema9_3 />} />
<Route path="/9_4" element={<Tema9_4 />} />
<Route path="/9_5" element={<Tema9_5 />} />
<Route path="/9_6" element={<Tema9_6 />} />
<Route path="/tema10" element={<Tema10 />} />
<Route path="/10.1" element={<Tema10_1 />} />
<Route path="/10.2" element={<Tema10_2 />} />
<Route path="/10.3" element={<Tema10_3 />} />
<Route path="/10.4" element={<Tema10_4 />} />
<Route path="/10.5" element={<Tema10_5 />} />
<Route path="/10.6" element={<Tema10_6 />} />






        <Route path="/ejercicios/*" element={<Ejercicios />} />
        <Route path="/ejercicios/variables" element={<EjercicioVariables />} />
      </Route>
    </Routes>
  );
}
