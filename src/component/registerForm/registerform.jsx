import styles from "../registerForm/registerform.module.scss"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import RegisteredSuccessfully from "../registeredSuccessfully/registeredmodal";
// import { PaystackButton } from 'react-paystack'


const RegisterForm = () => {
    const [UserName, setUserName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("")

    // const config = {
    //     email: email,
    //     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    //     publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    // };

    const validate = () => {
        return (
            !UserName ||
            !email ||
            !phoneNum ||
            !age
        );
    };


    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    // MODAL STATE

    const [showModal, setShowModal] = useState(false);

    function handleModalRegistered() {
        setShowModal(!showModal);
    }


    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                </div>
                <div className={styles.disctwo}>
                    <div className={styles.insidedisc}>
                        <div className={styles.logoimg} onClick={gotoHome}>
                            <h3 className={styles.icon}>VOLCANO</h3>
                        </div>
                        <h2 className={styles.headinner}>
                            Carefully fill in the right credentials.
                        </h2>
                        <div className={styles.decidebutton}>
                            <div className={styles.formholder}>
                                <div className={styles.formholderone}>
                                    <h2 className={styles.rowname}>Username</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="text"
                                        placeholder="Enter your username"
                                        onChange={(e) => setUserName(e.target.value)}
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
                                    <h2 className={styles.rowname}>Phone number</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="number"
                                        placeholder="Enter your phone number"
                                        onChange={(e) => setPhoneNum(e.target.value)}
                                    />

                                    <h2 className={styles.rowname}>Age</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="number"
                                        placeholder="Enter your age"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.continuebutton}>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    onClick={handleModalRegistered}
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
                        {showModal && <RegisteredSuccessfully {...{ handleModalRegistered }} />}
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default RegisterForm;