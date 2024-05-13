
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import NavbarHook from "./components/NavbarHook";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      // <Navbar />
      <NavbarHook />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

