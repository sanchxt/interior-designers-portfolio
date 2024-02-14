import PreLoader from "./Loader/PreLoader";
import Navbar from "./Navbar/Navbar";
import Hero from "./hero/Hero";
import Parallax from "./parallax/Parallax";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Cursor from "./cursor/Cursor";

const HomePage = () => {
  return (
    <div>
      <Cursor />
      {/* <section>
        <PreLoader />
      </section> */}
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="services">
        <Parallax type="services" />
      </section> */}
      {/* <section>
        <Services />
      </section> */}
      {/* <section id="projects">
        <Parallax type="projects" />
      </section> */}
      {/* <Portfolio /> */}
      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default HomePage;
