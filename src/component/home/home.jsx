import styles from "../home/home.module.scss"
import Header from "../header/header";
import HeroSection from "../herosection/herosection";
import AboutPage from "../about/about";
import Footer from "../footer/footer";
import WhyChooseUs from "../whyChooseUs/whyChooseUs";
import FaqSection from "../faq/faq";


const Home = () => {
  return (
    <div className={styles.body}>
      <Header />
      <HeroSection />
      <WhyChooseUs/>
      <AboutPage/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default Home;