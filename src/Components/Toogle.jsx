import React , {useState} from 'react';
import styles from '../assets/styles/Toogle.module.css'

const Toogle = () => {

  const [dark, setDark] = useState(false);

  const toogleTheme = ()=>{

    const body = document.querySelector('body')

    if(dark){
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');

    }else{
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');

    }
    setDark(!dark)
  }

  return (
    <div className={styles.toogle}>
      <p className={styles.parrafo}>Dark Mode</p>
      <input 
        className={styles.check} 
        type="checkbox" 
        id='checkbox' 
        checked = {dark}
        onChange = {toogleTheme}
      />
      <div className={styles.toogleContainer}>
        <label  className={ styles.circle } htmlFor="checkbox"></label>
      </div>
    </div>
  );
}

export default Toogle;
