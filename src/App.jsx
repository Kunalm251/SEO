import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/About Us";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactUs from "./components/Contact Us";
import Testimonials from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Home />
        <Services />
        <Aboutus />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;

