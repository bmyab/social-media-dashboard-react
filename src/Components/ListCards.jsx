import React from 'react';
import datosCard from '../assets/datosCard.json'
import CardDatos from './CardDatos'
import styles from '../assets/styles/ListCards.module.css'

const ListCards = () => {
  return (
    <div className={styles.lista}>
      {
        datosCard.map( card =>{
          return <CardDatos key={card.id} cardDatos = {card}/>
        })
      }
    </div>
  );
}

export default ListCards;
