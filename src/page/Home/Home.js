import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h2>Skip the travel! Find Online</h2>
                        <h1>Medical <span>Services</span></h1>
                        <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                        <button>Find Centers</button>
                    </div>
                    <div className={styles.heroImage}>
                        <img src={require("../../assests/heroImage.png")} alt="heroImage" />
                    </div>

                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.secondContent}>
                    <div className={styles.imageContainer}>
                        <img src={require("../../assests/imgSec1.png")} alt="secondSectionImage" />
                        <img src={require("../../assests/imgSec2.png")} alt="secondSectionImage" />
                        <img src={require("../../assests/imgSec1.png")} alt="secondSectionImage" />
                    </div>
                    <div className={styles.textSide}>
                        <img src={require("../../assests/dot1.png")} />
                        <img src={require("../../assests/dot2.png")} />
                        <img src={require("../../assests/dot1.png")} />
                    </div>
                </div>
            </div>
            <div className={styles.overlapDiv}>
                <div className={styles.overlapContent}>
                    <div className={styles.searchBar}>
                        <div className={styles.inputContainer}>
                            <img src={require("../../assests/Search.png")} className={styles.icon} />
                            <input type="text" placeholder="State" className={styles.input} />
                        </div>
                        <div className={styles.inputContainer}>
                            <img src={require("../../assests/Search.png")} className={styles.icon} />
                            <input type="text" placeholder="City" className={styles.input} />
                        </div>

                        <button className={styles.searchButton}>
                            <img src={require("../../assests/whiteSerach.png")} className={styles.buttonIcon} />
                            Search
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;