import Abdulatif from "./components/abdulatif/Abdulatif";
import Abrorbek from "./components/abrorbek/Abrorbek";
import Banner from "./components/banner/Banner";
import DiscountProduct from "./components/discountProduct/DiscountProduct";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parizoda from "./components/parizoda/Parizoda";
import Product from "./components/product/Product";
import Team from "./components/team/Team";
import Testimonals from "./components/testimonals/Testimonals";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Product />
      <DiscountProduct />
      <Testimonals />
      <Team />
      <Footer />
      <Parizoda />
      <Abrorbek />
      <Abdulatif />
    </div>
  );
};

export default App;
