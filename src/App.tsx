import {
  Footer,
  Navbar,
  HeroSection,
  ProjectSection,
  SkillsSection,
  AboutMeSection,
  ContactSection,
} from "@/components";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
