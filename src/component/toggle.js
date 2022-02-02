import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';
import styles from './toggle.module.css';

const Toggle2 = props => {
  const inputRef = useRef();
  const [toggleSwitch, setToggleSwitch] = useState(true);

  const handleToggle = () => {
    setToggleSwitch(inputRef.current.checked);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subject}>Toggle</h3>
      <div className={styles.container}>
        <div className={styles.switch}>
          <input
            type='checkbox'
            name='toggle-switch'
            id='toggle'
            className={styles.checkbox}
            defaultChecked={true}
            ref={inputRef}
            onChange={handleToggle}
          />

          <label htmlFor='toggle' className={styles.outer}>
            <div className={styles.inner}></div>
          </label>
        </div>
        <p>Toggle Switch {toggleSwitch ? 'ON' : 'OFF'}</p>
      </div>
    </section>
  );
};

export default Toggle2;
