import styles from "./Footer.module.css";
import image from "../../assests/question.png"
import downloadImg from "../../assests/downloadImg.png"
import logo from "../../assests/logo.png"
function Footer() {
    const images = {
        facebook: require("../../assests/facebook.png"),
        twitter: require("../../assests/twitter.png"),
        youtube: require("../../assests/youtube.png"),
        pinterest: require("../../assests/pinterest.png")
    };
    return (
        <div className={styles.footer}>
            <div className={styles.firstSection}>
                <h3>Get Your Answer</h3>
                <h1>Frequently Asked Questions</h1>
                <img src={image} />
            </div>
            <div className={styles.secondSection}>
                <img src={downloadImg} />
            </div>
            <div className={styles.thirdSection}>
                <div className={styles.mainFooter}>
                    <div className={styles.footerLinks}>
                        <div className={styles.logoContainer}>
                            <div className={styles.navbarLogo}>
                                <img src={logo} alt="Logo" className={styles.logo} />
                                <span className={styles.logoText}>Medify</span>
                            </div>
                            <div className={styles.socialLogo}>
                                <img src={images.pinterest} alt="pinterest" />
                                <img src={images.youtube} alt="youtube" />
                                <img src={images.twitter} alt="twitter" />
                                <img src={images.facebook} alt="facebook" />
                            </div>
                        </div>
                        <div className={styles.links}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className={styles.links}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className={styles.links}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.copyRight}>
                        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer