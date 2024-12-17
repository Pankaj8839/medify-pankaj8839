import { useState, useEffect } from 'react';
import BlogCard from '../../component/Cards/BlogCard';
import ServiceCard from '../../component/Cards/ServiceCard';
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';


const Home = () => {

    const [arrayState, setArrayState] = useState([]);
    const [arrayCity, setArrayCity] = useState([]);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();


    const handleNavigate=()=>{
        const fetchHospitals = async () => {
            try {
                const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
                const hospitalsData = await response.json();
                navigate("/search", { state: hospitalsData });
            } catch (error) {
                console.log(error);
            }
        }
        if(state===""){
            enqueueSnackbar("Please select a state", { variant: 'warning' });
            return;
        }else if(city===""){
            enqueueSnackbar("Please select a city", { variant: 'warning' });
            return;
        }
        fetchHospitals();


    }
    useEffect(() => {
        const fetchState = async () => {
            try {
                const response = await fetch("https://meddata-backend.onrender.com/states");
                const data = await response.json();
                setArrayState(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchState();
    }, [])

    useEffect(() => {
        if(state==="") return;
        setArrayCity([]);
        setCity("");
        const fetchCity = async () => {
            try {
                const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
                const data = await response.json();
                setArrayCity(data);
            } catch (error) {
                console.log(error);
            }
        }
  
        fetchCity();
    }, [state])

    const services = [
        {
            image: require("../../assests/doctor.png"),
            title: "Doctor"
        },
        {
            image: require("../../assests/Drugstore.png"),
            title: "Labs"
        },
        {
            image: require("../../assests/Hospital.png"),
            title: "Hospital"
        },
        {
            image: require("../../assests/Capsule.png"),
            title: "Medical Store"
        },
        {
            image: require("../../assests/Ambulance.png"),
            title: "Ambulance"
        },
    ]

    const specialisations = [
        {
            image: require("../../assests/Dentistry.png"),
            title: "Dentistry"
        },
        {
            image: require("../../assests/primaryCare.png"),
            title: "Primary Care"
        },
        {
            image: require("../../assests/cardiology.png"),
            title: "Cardiology"
        },
        {
            image: require("../../assests/mriResonance.png"),
            title: "MRI Resonance"
        },
        {
            image: require("../../assests/bloodTest.png"),
            title: "blood Test"
        },
        {
            image: require("../../assests/Piscologist.png"),
            title: "Piscologist"
        },
        {
            image: require("../../assests/Dentistry.png"),
            title: "Labaratory"
        },
        {
            image: require("../../assests/X-Ray.png"),
            title: "X-Ray"
        }

    ]
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
                            <select value={state} onChange={(e) => { setState(e.target.value) }} className={styles.input} >
                                <option value="" disabled>Select an option</option>
                                {arrayState.map((state, index) => {
                                    return <option key={index} value={state}>{state}</option>
                                })}
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <img src={require("../../assests/Search.png")} className={styles.icon} />
                            <select value={city} onChange={(e) => { setCity(e.target.value) }} className={styles.input} >
                                <option value="" disabled>Select an option</option>
                                {arrayCity.map((city, index) => {
                                    return <option key={index} value={city}>{city}</option>
                                })}
                            </select>
                        </div>

                        <button className={styles.searchButton} onClick={()=>handleNavigate()}>
                            <img src={require("../../assests/whiteSerach.png")} className={styles.buttonIcon} />
                            Search
                        </button>
                    </div>
                    <p>You may be looking for</p>
                    <div className={styles.serviceContainer}>
                        {services.map((service, index) => {
                            return <ServiceCard key={index} image={service.image} title={service.title} />
                        })}

                    </div>
                </div>

            </div>
            <div className={styles.thirdSection}>
                <h2>Find by specialisation</h2>
                <div className={styles.specialisationContainer}>
                    {specialisations.map((specialisation, index) => {
                        return <ServiceCard key={index} image={specialisation.image} title={specialisation.title} isLarge={true} />
                    })}
                </div>
                <button className={styles.searchButton + " " + styles.viewAll}>View All</button>
            </div>
            <div className={styles.fourthSection}>
                <h2>Our Medical Specialist</h2>
                <img src={require("../../assests/doctorInG.png")} alt="fourthSectionImage" className={styles.fourthSectionImage} />
                <div className={styles.textSide}>
                    <img src={require("../../assests/dot1.png")} />
                    <img src={require("../../assests/dot2.png")} />
                    <img src={require("../../assests/dot1.png")} />
                </div>
            </div>
            <div className={styles.fifthSection}>
                <div className={styles.fifthContent}>
                    <img src={require("../../assests/fifthSectionImage.png")} alt="fifthSectionImage" />
                    <div className={styles.fifthContentText}>
                        <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                        <h2>Patient <span>Caring</span></h2>
                        <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                        <div className={styles.points}>
                            <img src={require("../../assests/rightT.png")} />
                            <p>Stay Updated About Your Health</p>
                        </div>
                        <div className={styles.points}>
                            <img src={require("../../assests/rightT.png")} />
                            <p>Check Your Results Online</p>
                        </div>
                        <div className={styles.points}>
                            <img src={require("../../assests/rightT.png")} />
                            <p>Manage Your Appointments</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className={styles.sixthSection}>
                <div className={styles.sixthContent}>
                    <p>Blog & News</p>
                    <h2>Read Our Latest News</h2>
                    <div className={styles.sixthCardContainer}>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
            <div className={styles.seventhSection}>
                <div className={styles.seventhContent}>
                    <div className={styles.seventhContentText}>
                        <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                        <h2>Our Families</h2>
                        <h4>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</h4>
                    </div>
                    <img src={require("../../assests/seventhSectionImage.png")} alt="seventhSectionImage" />
                </div>
            </div>
        </div>
    );
};

export default Home;