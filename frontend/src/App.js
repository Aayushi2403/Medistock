
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <div>

      <Navbar />

      <div className="container">
        <Home />
      </div>

    </div>
  );
}

export default App;