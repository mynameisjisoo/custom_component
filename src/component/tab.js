import React, { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './tab.module.css';

const Tab = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const tabs = [
    { tabNo: 'ONE', menu: 'Tab1', ref: oneRef },
    { tabNo: 'TWO', menu: 'Tab2', ref: twoRef },
    { tabNo: 'THREE', menu: 'Tab3', ref: threeRef }
  ];

  const onTabClicked = index => {
    setSelectedTab(index);
    tabs.map(tab => {
      if (tabs.indexOf(tab) !== index) {
        tab.ref.current.setAttribute('isselected', 'false');
      } else {
        tabs[index].ref.current.setAttribute('isselected', 'true');
      }
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.subject}>Tab</h3>
        <ul className={styles.menu}>
          {tabs.map((tab, index) => (
            <li
              key={tab.tabNo}
              className={styles.tab}
              ref={tab.ref}
              onClick={() => {
                onTabClicked(index);
              }}
            >
              <h3>{tab.menu}</h3>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.description}> Tab menu {tabs[selectedTab].tabNo}</p>
    </section>
  );
};
export default Tab;
