
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Integrations from "./components/integrations";
import SignUp from "./components/signUp";
// import { expenseBook } from "./assets";
function App() {
  return (
    <>

      <div>
        <Navbar />
        <Hero />
        <Logos />
        <Features />
        <Integrations />
        <Reviews />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
