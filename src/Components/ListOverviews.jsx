import React from 'react';
import Overview from '../Components/Overview'
import listOverviews from '../assets/overviewCard.json'
import styles from '../assets/styles/ListOverviews.module.css'


const ListOverviews = () => {
  return (
    <>
      <h3 className={styles.title}>Overview-Today</h3>
      
      <div className={styles.list}>
        {
          listOverviews.map( overview =>(
            <Overview key={overview.id} overview = {overview}/>
          ))
        }
      </div>
    </>
  );
}

export default ListOverviews;
