import React from 'react';
import styles from './Features.module.css';
import { useSpring, animated } from 'react-spring';

const Feature = ({ icon, title, description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <span>
        <p>{description}</p>
      </span>
    </div>
  );
};

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <h2>Why Choose Us</h2>
      <h1>Our Features</h1>
      <span className={styles.introText}>
        <p>Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.</p>
      </span>
      
      <div className={styles.features}>
        <div className={styles.column}>
          <div className={styles.featuresColumn}>
            <Feature icon="🏆" title="First class services" description="Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation." />
            <Feature icon="🛠️" title="24/7 road assistance" description="Reliable support when you need it most, keeping you on the move with confidence and peace of mind." />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.carContainer}>
            <img className={styles.carImage} src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car.png" alt="Car" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.featuresColumn}>
            <Feature icon="🏷️" title="Quality at Minimum Expense" description="Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value." />
            <Feature icon="🚗" title="Free Pick-Up & Drop-Off" description="Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
