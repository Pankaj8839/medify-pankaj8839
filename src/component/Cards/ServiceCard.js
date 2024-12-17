import styles from "./ServiceCard.module.css";

const ServiceCard = ({image , title, isLarge=false}) => {
    return (
        <div className={styles.serviceCard + " " + (isLarge && styles.large)}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            </div>
    )
}

export default ServiceCard