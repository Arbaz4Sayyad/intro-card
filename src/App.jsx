import Hero from "./components/Hero";
import Impact from "./components/Impact";
import FeaturedWork from "./components/FeaturedWork";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Impact />
        <FeaturedWork />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
