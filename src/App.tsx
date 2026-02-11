import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/book"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  Booking Page
                </div>
              }
            />
          </Routes>
        </main>

        {/* <footer className="bg-[#121212] text-gray-500 py-10 text-center text-xs uppercase tracking-widest border-t border-white/5">
          <p>&copy; 2026 Royal Mansion Resort. Crafted for Luxury.</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
