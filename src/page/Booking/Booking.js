import styles from "./Booking.module.css"
import HospitalCard from "../../component/Cards/HospitalCard";
import { useState } from "react";

const Booking=()=>{
     
    const list=localStorage.getItem("hospital");
    const [data, setData] = useState(list ? JSON.parse(list) : []);
    const [hospital, setHospital] = useState("");

    
    const handleClick=()=>{
        const filteredData = data.filter((item) => item.name.toLowerCase().includes(hospital.toLowerCase()));
        setData(filteredData);
    }

    return(
        <div className={styles.booking}>
             <div className={styles.status}>
             <h2>My Booking</h2>
           </div>
           <div className={styles.searchContainer}>
           <div className={styles.inputContainer}>
                            <img src={require("../../assests/Search.png")} className={styles.icon} />
                            <input type="text" placeholder="Search"  value={hospital} className={styles.input} onChange={(e)=>{setHospital(e.target.value)}} />
                        </div>
                        <button className={styles.searchButton} onClick={()=>{handleClick()}}>
                            <img src={require("../../assests/whiteSerach.png")} className={styles.buttonIcon} />
                            Search
                        </button>
            </div>

           <div className={styles.cardContainer}>
            {
                data.length === 0 ? (
                    <p>No data found</p>
                ) : null
            }
           { data && data.map((item, index) => (
            <HospitalCard key={index} name={item.name} city={item.city} state={item.state} dateForbooking={item.date} timeForbooking={item.slot} readOnly={true}/>
          ))}
        </div>
        </div>
    )
}

export default Booking