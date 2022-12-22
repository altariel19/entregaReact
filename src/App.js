import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const title = "¡Bienvenidos a mi Tienda!";

  function hacerAlgo() {
    alert("Tu compra casi esta lista");
  }

  const miEstilo = {
    backgroundColor: "#B2FFFF",
    margin: "0px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <div style={miEstilo} className="catalogo">
        <Card
          img="/img/intel.jpg"
          title="Micro Intel"
          price={88999}
          detail="Procesador Intel Core i7-10700"
        />
        <Card
          img="/img/amd.jpg"
          title="Micro Amd"
          price={37850}
          detail="Procesador gamer AMD Ryzen 5"
        />
        </div>

          <button onClick={hacerAlgo}>Fin de Compra</button>

        </div>
  );
}

export default App;
