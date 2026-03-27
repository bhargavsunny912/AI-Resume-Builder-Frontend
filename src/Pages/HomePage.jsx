import Footer from "../Components/Home/Footer";
import Testimonials from "../Components/Home/Testimonials";
import Working from "../Components/Home/Working";
import Features from "../Components/Home/Features";
import Hero from "../Components/Home/Hero";

const Home=()=>{
  return (
    <div className="w-full min-h-screen font-sans">
      <Hero />
      <Features />
      <Working />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;