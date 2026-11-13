import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroPart from "./components/HeroPart";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <Header />
      <main id="top">
        <div className="wrap">
          <HeroPart />
          <section id="shop">
            <div className="group" id="grocery">
              <h3>Grocery</h3>
              <div className="grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
