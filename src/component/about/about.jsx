import styles from '../about/about.module.scss'
import humanbeach from "../../assets/svg/portsmall.jpg"
import { PrimaryButton } from "../../shared/utils/button";
import { Link } from "react-router-dom";




const AboutPage = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.pic}><img src={humanbeach} alt="" /></div>
                <div className={styles.contentholder}>
                    <p className={styles.contentp}>Hello it's our <span>&#128075;&#127997;</span></p>
                    <h1 className={styles.contenth1}>Family-Friendly Fun Event</h1>
                    <p className={styles.contentp2}>This event is designed for all ages! From sandcastle building 
                    competitions to friendly beach volleyball matches, there's something for everyone.
                    </p>
                    <div className={styles.btnholder}>
                        <Link to="/register" className={styles.herobtn}>
                            <PrimaryButton buttonText="Register"></PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;