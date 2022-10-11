import React from "react";
import styles from "../assets/styles/Card.module.css";

const CardDatos = ({ cardDatos }) => {

  const { nombre, follows, followers, day, dayIcon, icon } = cardDatos;

  return (
    <div 
      className={styles.card}>
      <div className={styles.card__name}>
        <img src={icon} />
        <h3 className={styles.name}>{nombre}</h3>
      </div>
      <div className={styles.card__follows}>
        <h2 className={styles.follows}>{follows}</h2>
        <p className={styles.followers}>{followers}</p>
      </div>
      <div className={styles.card__days}>
        <img src={dayIcon} />
        <p className={styles.day}>{day} Today</p>
      </div>
    </div>
  );
};

export default CardDatos;
