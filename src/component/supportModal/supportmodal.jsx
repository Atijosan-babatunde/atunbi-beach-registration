import styles from "../registerForm/registerform.module.scss"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SupportedSuccessfully from "../supportedModal/supportmodal";


const SupportForm = () => {
    const [firstName, setFirstName] = useState("");
    const [sexName, setSexName] = useState("");
    const [email, setEmail] = useState("");
    const [games, setGames] = useState("")
    const [amount, setAmount] = useState("")

    const validate = () => {
        return (
            !firstName ||
            !email ||
            !sexName ||
            !games ||
            !amount
        );
    };


    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    // MODAL STATE

    const [showModal, setShowModal] = useState(false);

    function handleModalSupported() {
        setShowModal(!showModal);
    }


    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    {/* <h2 className={styles.headleftimg}>
                        Access to all seamless transfer. Send money to other parts of the
                        countries.
                        <img src={star} alt="star" />
                    </h2> */}
                </div>
                <div className={styles.disctwo}>
                    <div className={styles.insidedisc}>
                        <div className={styles.logoimg} onClick={gotoHome}>
                            <h3 className={styles.icon}>VOLCANO</h3>
                        </div>
                        {/* <h2 className={styles.headcontent}>Create a personal account</h2> */}
                        {/* <div className={styles.arrowstyle}>
                            <img src={arrow} alt="arrow" />
                        </div> */}
                        <h2 className={styles.headinner}>
                            Carefully fill in the right credentials.
                        </h2>
                        <div className={styles.decidebutton}>
                            <div className={styles.formholderthree}>
                                <h2 className={styles.rowname}>Amount you want to support us with</h2>
                                <input
                                    className={styles.calculatorinput}
                                    type="number"
                                    placeholder="Enter amount"
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className={styles.formholder}>
                                <div className={styles.formholderone}>
                                    <h2 className={styles.rowname}>Full name</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="text"
                                        placeholder="Enter your first name"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />

                                    <h2 className={styles.rowname}>Email address</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="email"
                                        placeholder="Enter your email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className={styles.formholdertwo}>
                                    <h2 className={styles.rowname}>Sex</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="text"
                                        placeholder="Enter either male or female"
                                        onChange={(e) => setSexName(e.target.value)}
                                    />

                                    <h2 className={styles.rowname}>Intrested in games</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="text"
                                        placeholder="Enter either yes or no"
                                        onChange={(e) => setGames(e.target.value)}
                                    />
                                </div>
                            </div>


                        </div>
                        <div className={styles.continuebutton}>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    onClick={handleModalSupported}
                                    disabled={validate()}
                                    style={{
                                        backgroundColor: validate()
                                            ? "rgba(1, 27, 109, 0.20)"
                                            : " ",
                                    }}
                                >
                                    Submit
                                    {/* {loading ? (
                                        <ReactLoading color="white" width={25} height={25} type="spin" />
                                    ) : (
                                        "Create account"
                                    )} */}
                                </button>
                            </div>
                        </div>
                        {showModal && <SupportedSuccessfully {...{ handleModalSupported }} />}
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default SupportForm;