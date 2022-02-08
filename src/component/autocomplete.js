import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import styles from './autocomplete.module.css';

const Autocomplete = props => {
  const wordList = [
    'antique',
    '중고A급',
    'bed',
    'bronze',
    'cabinet',
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
  const [suggestionList, setSuggestionList] = useState([]);

  const compareWords = () => {
    const query = inputRef.current.value.toLowerCase();
    if (query == '' || query == ' ') {
      setSuggestionList([]);
      wrapperRef.current.setAttribute('isactive', 'false');
    } else {
      const relatedList = wordList
        .filter(word => word.toLowerCase().includes(query))
        .map((word, index) => {
          const element = [];
          const indexOfQuery = word.toLowerCase().search(query);
          return (element[index] = { word: word, indexOfQuery: indexOfQuery });
        });
      sortByRelated(relatedList, query);
      wrapperRef.current.setAttribute('isactive', 'true');
    }
  };

  const sortByRelated = relatedList => {
    relatedList.sort(function (a, b) {
      if (a.indexOfQuery > b.indexOfQuery) {
        return 1;
      }
      if (a.indexOfQuery < b.indexOfQuery) {
        return -1;
      }
      return 0;
    });
    setSuggestionList(relatedList);
  };

  const deleteInput = () => {
    inputRef.current.value = '';
    wrapperRef.current.setAttribute('isactive', 'false');
    setSuggestionList([]);
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
            {suggestionList.map(element => (
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
