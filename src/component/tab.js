import React, { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './tab.module.css';

const Tab = props => {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const [selectedTab, setSelectedTab] = useState('one');

  useEffect(() => {
    console.log(selectedTab);
    console.log(`${selectedTab}Ref`);
  });

  const onTabClicked = e => {
    // selectedTab.current.style.backgroundColor = 'white';
    const li = e.target.closest('li');
    if (!li) return;

    // setSelectedTab(li);
    // selectedTab.style.backgroundColor = 'red';
    // setTabNumber(li.dataset.id);
    // // li.classList.add('selected');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subject}>Tab</h3>
        <ul onClick={onTabClicked} className={styles.menu}>
          <li ref={oneRef} data-id='ONE' className={styles.tab}>
            <h3>Tab1</h3>
          </li>
          <li ref={twoRef} data-id='TWO' className={styles.tab}>
            <h3>Tab2</h3>
          </li>
          <li ref={threeRef} data-id='THREE' className={styles.tab}>
            <h3>Tab3</h3>
          </li>
        </ul>
      </div>
      {/* <p className={styles.description}> Tab menu {tabNumber}</p> */}
    </section>
  );
};
export default Tab;
