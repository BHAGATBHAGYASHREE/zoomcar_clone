// CarRentalAd.js
import React from 'react';
import styles from './CarRentalAd.module.css';

const CarRentalAd = () => {
  return (
    <div className={styles.carRentalAd}>

      <div className={styles.headerContent}>
        <div className={styles.headerContentRow}>
          <h2 >Wide Range of Commercial Cars for any occasion .</h2>
          <p className={styles.para}>
            At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.
          </p>
        </div>
      </div>
      <div className={styles.highlights}>
        <div className={styles.highlight}>
          <h3>25,000+</h3>
          <h6>Verified Cars</h6>
        </div>
        <div className={styles.highlight}>
          <h3>20,000+</h3>
          <h6>Trusted Hosts</h6>
        </div>
        <div className={styles.highlight}>
          <h3>2 Billion+</h3>
          <h6>KMs Driven</h6>

        </div>
        <div className={styles.highlight}>
          <h3>38+ </h3>
          <h6>Cities And Counting...</h6>

        </div>
      </div>
    </div>
  );
};

export default CarRentalAd;
