import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import styles from './autocomplete.module.css';

const Autocomplete = props => {
  const furniture = [
    'abcdef',
    'antique',
    '중고A급',
    'bronze',
    'cabinet',
    'chair',
    'carpet',
    'desk',
    'diningroom',
    'footrest',
    'furniture',
    'herringbone',
    'hanger',
    'ikea',
    'interior',
    'lamp',
    'organiser',
    'pillow',
    'pub table',
    'queen bed',
    'quilt',
    'rug',
    'rustic',
    'refurbished',
    'sofa',
    'table',
    'tufting',
    'urban',
    'usb충전기',
    'vase',
    'vintage',
    'wardrobe',
    'wood',
    'yellow',
    'zig-zag'
  ];
  const wrapperRef = useRef();
  const inputRef = useRef();
  const [wordList, setWordList] = useState([]);

  const compareWords = () => {
    const query = inputRef.current.value.toLowerCase();
    if (query == '' || query == ' ') {
      setWordList([]);
      wrapperRef.current.setAttribute('isactive', 'false');
    } else {
      const recommendList = furniture
        .filter(word => word.toLowerCase().includes(query))
        .map((word, index) => {
          const element = [];
          const indexOfquery = word.toLowerCase().search(query);
          return (element[index] = { word: word, indexOfquery: indexOfquery });
        });
      sortByRelated(recommendList, query);
      wrapperRef.current.setAttribute('isactive', 'true');
    }
  };

  const sortByRelated = recommendList => {
    recommendList.sort(function (a, b) {
      if (a.indexOfquery > b.indexOfquery) {
        return 1;
      }
      if (a.indexOfquery < b.indexOfquery) {
        return -1;
      }
      return 0;
    });
    setWordList(recommendList);
  };

  const deleteInput = () => {
    inputRef.current.value = '';
    wrapperRef.current.setAttribute('isactive', 'false');
    setWordList([]);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subject}>AutoComplete</h3>
      <div className={styles.container}>
        <div className={styles.inputWrapper} ref={wrapperRef}>
          <input
            type='text'
            className={styles.input}
            ref={inputRef}
            onKeyUp={compareWords}
          />
          <ul className={styles.suggestionList}>
            {wordList.map(element => (
              <li key={element.word} className={styles.suggestion}>
                {element.word}
              </li>
            ))}
          </ul>
          <FontAwesomeIcon
            icon={faTimes}
            className={styles.deleteIcon}
            onClick={deleteInput}
          />
        </div>
      </div>
    </section>
  );
};

export default Autocomplete;
