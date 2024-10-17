import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      {/* Faris */}
      <Navbar />

      {/* Gema */}
      <Home />

      {/* Rey */}
      <Services />

      {/* Faris */}
      <ProjectCarousel />

      {/* Qais */}
      <Explore />

      {/* Faris */}
      <Footer />
    </div>
  );
}
