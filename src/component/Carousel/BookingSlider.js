import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./BookingSlider.module.css"; 

const BookingSlider = ({handleDate}) => {
  const [active, setActive] =useState(null);

  const handleSlideClick = (index) => {
    setActive(index);
    handleDate(slots[index].day);
  };
  
  const slots = [
    { day: "Today", slotsAvailable: 11 },
    { day: "Tomorrow", slotsAvailable: 17 },
    { day: "Fri, 5 May", slotsAvailable: 18 },
    { day: "Sat, 6 May", slotsAvailable: 15 },
    { day: "Sun, 7 May", slotsAvailable: 13 },
    { day: "Mon, 8 May", slotsAvailable: 10 },
  ];

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        <div className={styles.cardContainer}>
        {slots.map((slot, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideCard +" " + (active === index && styles.active)} onClick={() => handleSlideClick(index)}>
              <h3 className={styles.dayTitle}>{slot.day}</h3>
              <p className={styles.slotsAvailable}>
                {slot.slotsAvailable} Slots Available
              </p>
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BookingSlider;
