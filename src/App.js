import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/textArea">React-textArea</Link> |{" "}
      </nav>
      <h1>Testing webpage</h1>
    </div>
  );
}

export default App;
