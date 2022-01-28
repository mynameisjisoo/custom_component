import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './tag.module.css';

const Tag = props => {
  const inputRef = useRef();
  const [tags, setTags] = useState([]);

  const onKeyPress = e => {
    const value = inputRef.current.value;
    if (e.key === 'Enter' && value !== '') {
      addTag(value);
    }
  };

  const addTag = value => {
    setTags([...tags, value]);
    inputRef.current.value = '';
  };

  const deleteTag = index => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subject}>Tag</h3>

      <div className={styles.tagsInput}>
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tag}>
              <span>{tag}</span>
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.deleteIcon}
                onClick={() => {
                  deleteTag(index);
                }}
              />
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          type='text'
          placeholder='Press enter to add tags'
          className={styles.input}
          onKeyPress={onKeyPress}
        />
      </div>
    </section>
  );
};

export default Tag;
