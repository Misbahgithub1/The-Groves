import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import logoImg from '../../assets/images/logo.png';
// import SocialMedia from '../SocialMedia/SocialMedia';
import googleImg from '../../assets/images/google.png';
import appImg from '../../assets/images/app.png';
import SocialMedia from '../SocialMedia/SocialMedia';

import visaImg from '../../assets/images/visa.png';
import mastercardImg from '../../assets/images/mastercard.png';
import americanImg from '../../assets/images/american.png';



const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="mb-4 d-md-none">
                    <Col xs={12}>
                        <div className={styles.LinksRow}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={logoImg}
                                    alt="The Groves Logo"
                                    className={styles.appLogo}
                                />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* ================= First Row ================= */}
                <Row className="mb-4">
                    <Col xs={12} md={9}>
                        <h1 className={styles.heading}>
                            Join us for an <br /> unforgettable experience
                        </h1>
                    </Col>

                    <Col xs={12} md={3}>
                        <h5 className={styles.subHeading}>
                            DOWNLOAD THE GROVES APP
                        </h5>

                        <ul className={styles.downloadList}>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={googleImg} alt="Google Play Store" />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={appImg} alt="Apple App Store" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>


                {/* ================= Second Row ================= */}
                <Row className="mb-4">
                    <Col xs={12} md={3}>
                        <h6 className={styles.subHeading}>LOCATION</h6>
                        <ul className={styles.links}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </Col>

                    <Col xs={12} md={3}>
                        <h6 className={styles.subHeading}>WORKING HOURS</h6>
                        <ul className={styles.links}>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>

                    <Col xs={12} md={6}>
                        <h6 className={styles.subHeading}>GUEST SERVICE CALL</h6>
                        <ul className={styles.links}>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>
                </Row>


                {/* ================= Third Row ================= */}
                <Row className="pt-4 align-items-center">
                    <Col xs={12} md={9} className="d-none d-md-block">
                        <div className={styles.LinksRow}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={logoImg}
                                    alt="The Groves Logo"
                                    className={styles.appLogo}
                                />
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className={styles.LinksRow}>
                            <SocialMedia
                                fontSize="1.5rem"
                                className={styles.footerIcons}
                            />
                        </div>
                    </Col>
                </Row>


                {/* ================= Fourth Row ================= */}
                <Row className="pt-4 align-items-center">
                    <Col xs={12} md={9}>
                        <div className={styles.copyrightRow}>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <span>&copy; 2023 The Groves for Entertainment</span>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className={styles.paymentWrapper}>
                            <ul className={styles.paymentList}>
                                <li>
                                    <img src={visaImg} alt="Visa" />
                                </li>
                                <li>
                                    <img src={mastercardImg} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={americanImg} alt="American Express" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;

