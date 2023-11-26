import styles from "../header/header.module.scss";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PrimaryButton } from "../../shared/utils/button"
import { Modal, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";


const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setShowMenu(!showMenu);
    };

    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };


    return (
        <>
            <div className={styles.header} id='top' >
                <div className={styles.content}>
                    <div className={styles.logoParent} onClick={gotoHome}>
                        {/* <div> <img src={Logo} className={styles.Icon} alt="horse" /></div> */}
                        <h3 className={styles.icon}>VOLCANO</h3>
                    </div>

                    <Link className={styles.title} to="/" smooth>
                        Home
                    </Link>
                    <Link className={styles.title} to="/pictures">
                        Pictures
                    </Link>
                    <Link className={styles.title} to="/contact">
                        Contact
                    </Link>



                    <motion.div className={styles.btnDiv}
                        whileHover={{ scale: 1.1, textShadow: '0px 0px 8px(255,255,255)', boxShadow: '0px 0px 8px(255,255,255)' }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 13, duration: 5 }}
                    >
                        <Link to="/register">
                            <PrimaryButton buttonText="Register"></PrimaryButton>
                        </Link>
                    </motion.div>
                    <div onClick={toggle} className={styles.menuDiv}>
                        <AiOutlineMenu className={styles.menu} />
                    </div>

                    
                </div>
                <Modal isOpen={modal} toggle={toggle} fullscreen>
                        <ModalBody className={styles.modalParent}>
                            <div onClick={toggle} className={styles.modalClose}> <AiOutlineClose className={styles.menu} /></div>
                            <div className={styles.modalMenu}>
                                <motion.div className={styles.modalMenufirst}
                                    initial={{ y: -100 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', duration: 7 }}
                                >
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/pictures"
                                    >
                                        Pictures
                                    </Link>
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                </motion.div>

                                <motion.div className={styles.modalMenufirst}
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', duration: 7 }}
                                >
                                    <Link to="/register">
                                        <PrimaryButton buttonText="Register"></PrimaryButton>
                                    </Link>
                                </motion.div>
                            </div>

                        </ModalBody>
                    </Modal>
            </div>
        </>
    );
}

export default Header;