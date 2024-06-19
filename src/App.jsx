import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsDetail from "./components/CardsDetail";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/CardsDetail/:id" element={<CardsDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
