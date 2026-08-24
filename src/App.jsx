import { BrowserRouter as Routes, Route } from "react-router";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
