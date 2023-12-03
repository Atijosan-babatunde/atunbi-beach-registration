import styles from '../faq/faq.module.scss'
import { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";


const FaqSection = () => {
    const [isgeneral, setIsgeneral] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);

    const openGeneral = () => {
        setIsgeneral(!isgeneral)
    }

    const openingSectionTwo = () => {
        setOpenTwo(!openTwo)
    }

    const openingSectionThree = () => {
        setOpenThree(!openThree)
    }

    const openingSectionFour = () => {
        setOpenFour(!openFour)
    }

    const openingSectionFive = () => {
        setOpenFive(!openFive)
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>

                <div className={styles.browseflex}>
                    <div className={styles.flexone}>
                        <div className={styles.head}>
                            FAQs
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openGeneral} className={styles.accordion}>
                        <div className={styles.general}>What will i need to do after payment?</div>
                        <LiaTimesSolid style={{ display: isgeneral ? '' : 'none' }} />
                        <BiPlus style={{ display: !isgeneral ? '' : 'none' }} />
                    </div>
                    <div style={{ display: isgeneral ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Immediately you are done making payment, please follow the instruction written in the last modal that popped up
                                on you screen. Inside it as your Reference Code, please come along with the reference code, cause it's your gate pass to the event.

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionTwo} className={styles.accordion}>
                        <div className={styles.general}>What is the dress code</div>
                        <LiaTimesSolid style={{ display: openTwo ? '' : 'none' }} />
                        <BiPlus style={{ display: !openTwo ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openTwo ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                As the theme implies, D’Vintage party.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionThree} className={styles.accordion}>
                        <div className={styles.general}>Does my fee cover my transport and food fare?</div>
                        <LiaTimesSolid style={{ display: openThree ? '' : 'none' }} />
                        <BiPlus style={{ display: !openThree ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openThree ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                            Yes it covers your transportation to and fro, feeding, swimming and all other games.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionFour} className={styles.accordion}>
                        <div className={styles.general}>What is the call time ?</div>
                        <LiaTimesSolid style={{ display: openFour ? '' : 'none' }} />
                        <BiPlus style={{ display: !openFour ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openFour ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                            We converge at ccc atunbi cathedral for 8 am location at No1 oyesiku street Alapere Ketu Lagos, and we all move at 8.30 am. 
                            We are very strict with our timing as any form of lateness will not be entertained.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionFive} className={styles.accordion}>
                        <div className={styles.general}>Can i pay for my neighbor with the same data?</div>
                        <LiaTimesSolid style={{ display: openFour ? '' : 'none' }} />
                        <BiPlus style={{ display: !openFour ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openFive ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Yes you can. You only need to come along with the reference code you received immediately you make a payment.
                                Its advisable you make a screenshot of the last modal displayed, inside it as your Reference Code.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;