import styles from "../herosection/herosection.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundimageone from "../../assets/svg/ground.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { PrimaryButton } from "../../shared/utils/button";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



export default function HeroSection() {
  // let navigate = useNavigate();
  // const gotoRegistration = () => {
  //     navigate("/register");
  // };


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >

        <div className={styles.herocontent}>
          <div className={styles.title}>
             Welcome to <span>Volcano 4.0</span> D'Vintage party.
          </div>
          <div className={styles.paragraph}>
              West side beach experience.
          </div>
          <div className={styles.btnholder}>
            <Link to="/register" className={styles.herobtn}>
              <PrimaryButton buttonText="Register" ></PrimaryButton>
            </Link>
          </div>
        </div>
        
        <SwiperSlide>
          <img src={backgroundimageone} alt="hero"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
