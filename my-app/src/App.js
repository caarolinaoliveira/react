import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Header
        name="Carol"
        links={["Sobre", "Comprar", "Contato", "Login"]}
      ></Header>
      <Counter></Counter>
    </div>
  );
}

export default App;
