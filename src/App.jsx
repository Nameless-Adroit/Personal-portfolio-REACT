import {Routes, Route } from "react-router";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { Ester } from "./pages/Ester/Ester";
import { Dorasia } from "./pages/Dorasia/Dorasia";
import { Justine } from "./pages/Justine/Justine";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pages/Ester/Ester" element={<Ester />} />
            <Route path="/pages/Dorasia/Dorasia" element={<Dorasia />} /> 
            <Route path="/pages/Justine/Justine" element={<Justine />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
