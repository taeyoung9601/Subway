import React from 'react';
import styles from './Subway.module.css';

const Subway = ({ id }) => {
  let content;

  switch (id) {
    case "0":
      content = <div className={styles.subway}>신촌</div>;
      break;
    case "1":
      content = <div className={styles.subway}>시청</div>;
      break;
    case "2":
      content = <div className={styles.subway}>잠실</div>;
      break;
    case "3":
      content = <div className={styles.subway}>강남</div>;
      break;
    case "4":
      content = <div className={styles.subway}>사당</div>;
      break;
    case "5":
      content = <div className={styles.subway}>신림</div>;
      break;
    default:
      content = <div>Default Content</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Subway;