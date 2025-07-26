import BestSellingProducts from "../components/BestSellingProducts"
import Category from "../components/Category"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  return (
  <>
  <Navbar />
  <HeroSection />
    <Product />
    <Category />
    <HeroBanner />
    <BestSellingProducts />
    <Footer />
    </>
    )
    
}
export default Home ;