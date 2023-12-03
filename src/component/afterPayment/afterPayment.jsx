import styles from "../afterPayment/afterPayment.module.scss"
// import React, { useRef, useState } from "react";
// import useOnClickOutside from "../../shared/Hooks/useOnClickOutside";
import cancel from "../../assets/png/cancel.png";
// import impot from "../../assets/png/impot.jpg";


const AfterPaymentModal = ({ handleModalShowAfterPayment, referenceCode }) => {
    // const modalref = useRef();
    // useOnClickOutside(modalref, handleModalShowAfterPayment);
  


    return (
        <div className={styles.parent}>
            <div className={styles.content} >
                <div>
                    <div className={styles.closemodal} onClick={handleModalShowAfterPayment}>
                        <img src={cancel} alt="close modal" />
                    </div>

                    <div className={styles.contentholder}>
                        {/* <img src={impot} alt="" /> */}
                        <h2 className={styles.modalhead}>IMPORTANT INFORMATION, PLEASE TAKE A SCREENSHOT OF THIS MODAL</h2>
                        <p className={styles.modalpara}>
                            Thank you for your response…. Your payment has been received
                            Please be informed that Departure time is 8:30am Pick up point: 1/3 Oyesiku
                            Street Alapere Ketu Lagos. please come along with this <span>Reference code: {referenceCode} </span> without this code you wont have access to the event don’t be Late!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AfterPaymentModal;