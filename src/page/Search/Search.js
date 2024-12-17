import HospitalCard from "../../component/Cards/HospitalCard"
import styles from "./Search.module.css";
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Search=()=>{
  const location = useLocation();
  const hospitals = location.state;
  const [hospitalArray, setHospitalArray] = useState(hospitals);

  const [isBooked, setIsBooked] = useState(true);
 


  const [arrayState, setArrayState] = useState([]);
  const [arrayCity, setArrayCity] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleBookChange=()=>{
    
  }


  const handleClick=()=>{
      setIsBooked(false);
    const fetchHospitals = async () => {
          try {
              const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
              const hospitalsData = await response.json();
              setHospitalArray(hospitalsData);
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



    return (
        <div className={styles.search}>
            <div className={styles.status}>
       
            </div>
            <div className={styles.searchContainer}>
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

                        <button className={styles.searchButton} onClick={()=>handleClick()}>
                            <img src={require("../../assests/whiteSerach.png")} className={styles.buttonIcon} />
                            Search
                        </button>
                    </div>
            </div>
            <div className={styles.body}>
              <h5 className={styles.textHeader}>15 medical centers available in Alaska</h5>
              <div className={styles.textTitle}>
               <img src={require("../../assests/verified.png")} alt="search" />
               <p>Book appointments with minimum wait-time & verified doctor details</p>
              </div>
              <div className={styles.cardContainer}>
                {
                  hospitalArray.map((hospital)=>{
                    return <HospitalCard name={hospital["Hospital Name"]} city={hospital["City"]} state={hospital["State"]} fromSerachIsBooked={isBooked} handleBookChange={setIsBooked} />
                  })
                }
              </div>
            </div>
        </div>
    )
}

export default Search