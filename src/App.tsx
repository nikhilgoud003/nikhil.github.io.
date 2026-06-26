import { CursorGlow } from "./components/CursorGlow";
import { useActiveSection } from "./hooks/useTheme";
import { navLinks } from "./data/portfolio";
import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";

function App() {
  const active = useActiveSection(navLinks.map((l) => l.id));

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
