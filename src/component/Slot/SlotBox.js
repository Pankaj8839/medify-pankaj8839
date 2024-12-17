import styles from "./Slot.module.css"

const SlotBox = ({ time, onClick, isSelected }) => {
    return (
      <button
        className={`${styles.slotBox} ${isSelected ? styles.selected : ''}`}
        onClick={() => onClick(time)}
      >
        {time}
      </button>
    );
  };
  
  export default SlotBox;