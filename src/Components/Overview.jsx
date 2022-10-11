import React from 'react';
import styles from '../assets/styles/Overview.module.css'

const Overview = ({overview}) => {

  const {title , number , percentaje,percentajeIcon , icon} = overview;
  return (
    <div className={styles.card}>
      <div className={styles.card__datos}>
        <p>{title}</p>
        <h3>{number}</h3>
      </div>
      <div className={styles.card__icon}>
        <img src={icon} alt={title} />
        <div className={styles.percentaje}>
          <img src={percentajeIcon}/>
          <p>{percentaje}%</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
