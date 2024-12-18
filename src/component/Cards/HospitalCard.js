import styles from "./HospitalCard.module.css";
import { useEffect, useState } from "react";
import SlotBox from "../Slot/SlotBox";
import BookingSlider from "../Carousel/BookingSlider";
import { Modal, Box, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const HospitalCard = ({ name, city, state, fromSerachIsBooked, handleBookChange ,readOnly=false, dateForbooking, timeForbooking}) => {

  const [isBooked, setIsBooked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slot, setSlot] = useState(null);
  const [date, setDate] = useState(null);
  
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
  const slots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const handleSlotClick = (time) => {
    setSlot(time);
    if(!date){
      enqueueSnackbar("Please select a date", { variant: "warning" });
      return;
    }
    setIsModalOpen(true);
  };
  const handleConfirm = () => {
   let obj={
    name:name,
    city:city,
    state:state,
    date:date,
    slot:slot
   }
   const existingData = JSON.parse(localStorage.getItem("hospital")) || [];
   existingData.push(obj);
   localStorage.setItem("hopstial",JSON.stringify(existingData));
   navigate("/booking");
   
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickSubmit = () => {
    setIsBooked(!isBooked);
    handleBookChange(true);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.hospitalCard} ${!isBooked && fromSerachIsBooked && styles.booked} ${readOnly && styles.readOnly}`}>
        <div className={styles.imageContainer}>
          <img src={require("../../assests/circleHospital.png")} alt="hospital" />
        </div>
        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <h4>
            {city}, {state}
          </h4>
          <p>Smilessence Center for Advanced Dentistry + 1 more</p>
          <p>
            <span>FREE</span> Consultation fee at clinic
          </p>
          <img src={require("../../assests/like.png")} alt="verified" />
        </div>
        {readOnly ? (<div className={styles.slotReadContainer}>
             <SlotBox time={timeForbooking} />
              <SlotBox time={dateForbooking} color={"green"}/>
         
        </div>) : (
             <div className={styles.buttonContainer}>
             <h3>Available Today</h3>
             <button className={styles.button} onClick={handleClickSubmit}>Book FREE Center Visit</button>
            </div>
        )}
     
      </div>
      {isBooked && fromSerachIsBooked && (
        <div className={styles.slotBooking}>
          <div className={styles.slotSelector}>
            <BookingSlider handleDate={setDate} />
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
        </div>
      )}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Slot Confirmation</Typography>
          <Typography sx={{ mt: 2 }}>
            You have selected the slot: <b>{slot}</b> for the date: <b>{date}</b> in the hospital: <b>{name}</b>
          </Typography>
          <button className={styles.button + " " + styles.confirmButton} onClick={()=>handleConfirm()} >Confirm</button>
          <button className={styles.button + " " + styles.closeButton} onClick={handleCloseModal}>Close</button>
        </Box>
      </Modal>
    </div>
  );
};

export default HospitalCard;
