import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Filtro from "./componentes/Filtro";
import Sidebar from "./componentes/Sidebar";
import Ordenacao from "./componentes/Ordenacao";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
      </div>
    </div>
  );
}

export default App;
