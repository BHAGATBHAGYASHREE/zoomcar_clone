import React from "react";
import styles from "./Car.module.css";
import { useNavigate } from "react-router-dom";

const Car = (props) => {
    let navigate = useNavigate();

    function handleRent(id) {
        navigate(`/booking/${id}`);
    }

    return (
        <div className={styles.carCard}>
            <img src={props.imageUrl} alt="Car" className={styles.carImage} />
            <div className={styles.carDetails}>
                <div className={styles.carInfo}>
                    <h3>{props.name}</h3>
                </div>
                <div className={styles.carSpecs}>
                    <p>{props.seater}</p>
                    <p>{props.fuelType}</p>
                    <p>{props.transmission}</p>
                    <p>{props.type}</p>
                </div>
                <div className={styles.carPricing}>
                    <p className={styles.pricePerHour}>&#8377;{props.pricePerHour}</p>
                    <button
                        className={styles.rentButton}
                        onClick={() => {
                            handleRent(props.carId);
                        }}
                    >
                        Rent Car
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Car;
