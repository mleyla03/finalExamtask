
import { Route, Routes } from "react-router-dom"
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Add from "./pages/Add";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
