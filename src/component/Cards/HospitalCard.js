import styles from "./HospitalCard.module.css"
import { useState } from "react"
import SlotBox from "../Slot/SlotBox"
import BookingSlider from "../Carousel/BookingSlider";



const HospitalCard = ({name,city,state,fromSerachIsBooked,handleBookChange}) => {
  const [isBooked, setIsBooked] = useState(false);
  const [slot, setSlot] = useState(null);
  const [ date, setDate] = useState(null);
  const slots = {
    Morning: ['11:30 AM'],
    Afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
    Evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
  };

  const handleSlotClick = (time) => {
    setSlot(time);
  };
  const handleClickSubmt = () => {
    setIsBooked(!isBooked);
    handleBookChange(true)
  };


  return (
    <div className={styles.mainContainer}>
      <div className={styles.hospitalCard + " " + (!isBooked && fromSerachIsBooked && styles.booked)}>
        <div className={styles.imageContainer}>
          <img src={require("../../assests/circleHospital.png")} alt="hospital" />
        </div>
        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <h4>{city}, {state}</h4>
          <p>Smilessence Center for Advanced Dentistry + 1 more</p>
          <p> <span>FREE</span>   Consultation fee at clinic</p>
          <img src={require("../../assests/like.png")} alt="verified" />
        </div>
        <div className={styles.buttonContainer}>
          <h3>Available Today</h3>
          <button  onClick={() => handleClickSubmt()} >Book FREE Center Visit</button>
        </div>
      </div>
      {isBooked && fromSerachIsBooked && <div className={styles.slotBooking}>
        <div className={styles.slotSelector}>
          <BookingSlider handleDate={setDate}/>
          {Object.entries(slots).map(([timePeriod, times]) => (
            <div key={timePeriod} className={styles.timeSection}>

              <div className={styles.timeBoxContainer}>
                <h3 className={styles.timeTitle}>{timePeriod}</h3>
              </div>
              <div className={styles.timeBox}>
                {times.map((time) => (
                  <SlotBox
                    key={time}
                    time={time}
                    onClick={handleSlotClick}
                    isSelected={slot === time}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>}
    </div>

  )
}

export default HospitalCard