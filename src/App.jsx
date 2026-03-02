import Colors from "./components/Colors";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex gap-10 flex-col">
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Footer />
    </div>
  );
}

export default App;
