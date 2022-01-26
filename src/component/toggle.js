import React from 'react';
import styles from './toggle.module.css';

const Toggle = props => {
  return (
    <section>
      <header>Toggle</header>
      <div className={styles.toggle}>
        <label htmlFor='' className={styles.switch}>
          <input type='checkbox' className={styles.checkbox} />
          <span className={styles.slider}></span>
        </label>
        <div>
          <input type='checkbox' className={styles.test} />
          <div className={styles.testdiv}></div>
        </div>
      </div>
    </section>
  );
};

export default Toggle;
