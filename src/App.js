import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./css/responsive-style.css"
import "./css/style.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
