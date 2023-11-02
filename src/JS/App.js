import '../CSS/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Page1 from "./Views/Page1";
import Page2 from "./Views/Page2";
import Info from "./Views/Info";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
