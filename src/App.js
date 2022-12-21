import "bootstrap";
import "react-bootstrap";
import { render } from "react-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Home from "./features/Home.tsx";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
