import React, { useRef, useState } from 'react';
import styles from './clickToEdit.module.css';

const ClickToEdit = props => {
  const nameRef = useRef();
  const ageRef = useRef();
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);

  const updateItems = () => {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  };
  return (
    <section className={styles.section} onClick={updateItems}>
      <h3 className={styles.subject}>ClickToEdit</h3>
      <div className={styles.items}>
        <span>이름</span>
        <input
          type='text'
          name=''
          id=''
          className={styles.input}
          ref={nameRef}
        />
      </div>
      <div className={styles.items}>
        <span>나이</span>
        <input
          type='text'
          name=''
          id=''
          className={styles.input}
          ref={ageRef}
        />
      </div>
      이름 <span>{name}</span> 나이 <span>{age}</span>
    </section>
  );
};

export default ClickToEdit;
