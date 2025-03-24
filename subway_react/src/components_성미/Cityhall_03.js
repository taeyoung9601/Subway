import styles from "./Cityhall_03.module.css";

import img_1 from './img/cityhall_img_03_1.png';
import img_2 from './img/cityhall_img_03_2.png';

// console.groupCollapsed("src/Cityhall_03.js"); console.groupEnd();

const Cityhall_03 = (props) => {
  // console.groupCollapsed("Cityhall_03({}) invoked.", props); console.groupEnd();

  return (
    <article class={`square ${styles.square_2}`}>
      <div className="horizontal_page text">
        <div className={`text_box2`}>
          <h3>청계천 & 서울 빛 초롱 축제</h3>
          <ul>
            <li>서울빛초롱축제는 올해로 16회차를 맞이하는 서울의 대표 야간 빛 축제로, 빛 조형물 전시와 다양한 체험 프로그램 등 화려한 볼거리를 제공합니다.</li>
            <li>장소: 청계천 일대(청계광장 ~ 삼일교)</li>
            <li>2024. 12. 13(금) ~ 2025. 1. 12(일)</li>
            <li>운영시간: (매일) 18:00 ~ 22:00</li>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="book_3_one"/>
        <div id="book_3_page" className="horizontal_page">
        <div className={styles.front}>
            <img src={img_1} alt="청계천"/>
          </div>
          <div className={styles.back}>
            <img src={img_2} alt="서울 빛 초롱 축제"/>
          </div>
          <label for="book_3_one"></label>
        </div>
    </article>
  );
}

export default Cityhall_03;
