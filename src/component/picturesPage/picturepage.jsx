import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "../picturesPage/picturepage.module.scss"
import beachimg from "../../assets/png/imgone.jpg"
import beachimg2 from "../../assets/png/imgtwo.jpg"
import beachimg3 from "../../assets/png/imgthree.jpg"
import beachimg4 from "../../assets/png/imgfour.jpg"
import beachimg5 from "../../assets/png/imgfive.jpg"
// import beachimg6 from "../../assets/png/imgsix.jpg"
// import beachimg7 from "../../assets/png/imgseven.jpg"
// import beachimg8 from "../../assets/png/imgeight.jpg"
// import beachimg9 from "../../assets/png/imgnine.jpg"
// import beachimg10 from "../../assets/png/imgten.jpg"


const PicturePage = () => {
    return (
        <>
            <Header />
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.box1}>
                        <img src={beachimg} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg2} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg3} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg4} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg5} alt="" />
                    </div>
                    {/* <div className={styles.box1}>
                        <img src={beachimg6} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg7} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg8} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg9} alt="" />
                    </div>
                    <div className={styles.box1}>
                        <img src={beachimg10} alt="" />
                    </div> */}

                    {/* <div className={styles.downlink}>Let's create memories together <span>register now...</span></div> */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PicturePage;