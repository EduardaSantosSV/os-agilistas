import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About"
import Listen from "../components/Listen"
import Hosts from "../components/Hosts";
import Guests from "../components/Guests";
import Partners from "../components/Partners";
import Subscribe from "../components/Subscribe";
import Column from "../components/Column";
import Footer from "../components/footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Slider />
        <About />
        <Listen />
        <Hosts />
        <Guests />
        <Partners />
        <Subscribe />
        <Column />
      </main>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
