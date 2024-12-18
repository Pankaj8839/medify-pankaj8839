import styles from "./Slot.module.css"

const SlotBox = ({ time, onClick, isSelected ,color}) => {
    return (
      <button
        className={`${styles.slotBox} ${isSelected ? styles.selected : ''}  ${color ? styles.color : ''} ` }
        onClick={() => onClick(time)}
      >
        {time}
      </button>
    );
  };
  
  export default SlotBox;