import styles from "../registeredSuccessfully/registered.module.scss"
import React, { useRef } from "react";
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside";
import cancel from "../../assets/png/cancel.png";
import thankyou from '../../assets/png/thankyou.png'



const RegisteredSuccessfully = ({ handleModalRegistered }) => {
    const modalref = useRef();
    useOnClickOutside(modalref, handleModalRegistered);


    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div>
                    <div className={styles.closemodal} onClick={handleModalRegistered}>
                        <img src={cancel} alt="close modal" />
                    </div>
                </div>

                <div className={styles.contentholder}>
                    <img src={thankyou} alt="" />
                    <h2 className={styles.modalhead}>Thank you for registering</h2>
                    <p className={styles.modalpara}>
                        Please proceed to payment, without payment you won't be given access code to  volcano 4.0 beach party.
                    </p>


                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // disabled={validate()}
                            // onClick={verifyUserData}
                            // style={{
                            //     backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
                            // }}
                        >
                            Make a payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisteredSuccessfully;