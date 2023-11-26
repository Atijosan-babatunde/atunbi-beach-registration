import styles from "../whyChooseUs/whychooseus.module.scss"




const WhyChooseUs = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                {/* <img src={whyarrow} alt="whyarrow" className={styles.arrow} /> */}
                <div className={styles.whychooseushead}>
                    About Us
                </div>
                <p className={styles.ptag}>
                    Welcome to Atunbi Cathedral Church, where we believe in the word of God, connection, and joy.
                    Our vibrant congregation is not just about Sundays in the pews; it's about creating moments
                    that bring us together, celebrate life, and strengthen our bonds. Prepare for sun, sand,
                    and spiritual connection as we organize our annual Beach Hangout Event! This isn't just
                    a day at the beach; it's a celebration of fellowship, joy, and the beauty of creation.
                    Imagine a day filled with laughter, shared meals, and meaningful conversations as
                    the waves provide a soothing backdrop.
                </p>
            </div>
        </div>
    );
}

export default WhyChooseUs;