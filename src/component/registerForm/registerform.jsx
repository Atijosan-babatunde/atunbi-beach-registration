import styles from "../registerForm/registerform.module.scss"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import RegisteredSuccessfully from "../registeredSuccessfully/registeredmodal";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from "react-loading";
import AfterPaymentModal from "../afterPayment/afterPayment";


const RegisterForm = () => {
    const [referenceCode, setReferenceCode] = useState("")
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        age: ""
    })

    const handleforminput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + "/register",
                data: formData
            })
            // let data = {
            //     username: "",
            //     email: "",
            //     phone: "",
            //     age: ""
            // }

            setLoading(true);
            if (response.data.status === false) throw new Error(response.data.message)
            setLoading(false);
            toast.success(response.data.message)
            setShowModal(true)
            sessionStorage.setItem('userToken', response.data.token)



        } catch (error) {
            toast.error(error.response.data.message || "Sorry something went wrong")
        }
    }


    let amount = ""
    formData.age >= 10 ? amount = Math.abs("8000" * 100) : amount = Math.abs("5000" * 100)
    const config = {
        email: formData.email,
        amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PUBLIC_KEY
    };


    const userToken = sessionStorage.getItem('userToken');
    const onSuccess = async (data) => {
        try {
            const response = await axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + "/complete",
                data: {
                    "reference": data.reference
                },
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    "Content-Type": "application/json"
                }
            })
            if (response.data.status === false) throw new Error(response.data.message)
            setReferenceCode(data.reference)
            setFormData({
                username: "",
                email: "",
                phone: ""
            })

        } catch (error) {
            console.log(error.response.data.message);
        }
        toast.success("payment successfully completed")
        setShowAfterPayModal(true)
    };

    // const onClose = () => {
    //     toast("your payment was unsuccessful")
    // }


    const componentProps = {
        ...config,
        text: 'Make Payment',
        onSuccess: (data) => onSuccess(data),
        // onClose: null,
    }

    const validate = () => {
        return (
            !formData.username ||
            !formData.email ||
            !formData.phone ||
            !formData.age
        );
    };


    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    // MODAL STATE

    const [showModal, setShowModal] = useState(false);
    const [showAfterPayModal, setShowAfterPayModal] = useState(false);

    function handleModalRegistered() {
        setShowModal(!showModal);
    }

    function handleModalShowAfterPayment() {
        setShowAfterPayModal(!showAfterPayModal)
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
                                        value={formData.username}
                                        name="username"
                                        placeholder="Enter your username"
                                        onChange={handleforminput}
                                    />

                                    <h2 className={styles.rowname}>Email address</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="email"
                                        value={formData.email}
                                        name="email"
                                        placeholder="Enter your email address"
                                        onChange={handleforminput}
                                    />
                                </div>

                                <div className={styles.formholdertwo}>
                                    <h2 className={styles.rowname}>Phone number</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="number"
                                        value={formData.phone}
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        onChange={handleforminput}
                                    />

                                    <h2 className={styles.rowname}>Age</h2>
                                    <input
                                        className={styles.calculatorinput}
                                        type="number"
                                        value={formData.age}
                                        name="age"
                                        placeholder="Enter your age"
                                        onChange={handleforminput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.continuebutton}>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    onClick={handleSubmit}
                                    disabled={validate()}
                                    style={{
                                        backgroundColor: validate()
                                            ? "rgba(1, 27, 109, 0.20)"
                                            : " ",
                                    }}
                                > 
                                    {loading ? (
                                        <ReactLoading color="white" width={25} height={25} type="spin" />
                                    ) : (
                                        " Submit"
                                    )}
                                </button>
                            </div>
                        </div>
                        {showModal && <RegisteredSuccessfully {...{ handleModalRegistered, componentProps }} />}
                        {showAfterPayModal && <AfterPaymentModal {...{ handleModalShowAfterPayment, referenceCode }}/>}
                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default RegisterForm;