import styles from "./Cityhall_02.module.css";

import img_1 from './img/cityhall_img_02_1.png';
import img_2 from './img/cityhall_img_02_2.png';

// console.groupCollapsed("src/Cityhall_02.js"); console.groupEnd();

const Cityhall_02 = (props) => {
  // console.groupCollapsed("Cityhall_02({}) invoked.", props); console.groupEnd();

  return (
    <article className={`square ${styles.square_1}`}>
      <div className="horizontal_page text">
        <div className={`text_box2`}>
          <h3>덕수궁 & 덕수궁돌담길</h3>
          <ul>
            <li>정동에 있는 조선과 대한 제국의 궁궐입니다.</li>
            <li>정기휴일: 월요일 (공휴일과 겹칠 시 개방)</li>
            <li>관린시간(일반): 09:00 ~ 21:00</li>
            <li>관린시간(전시관): 09:30 ~ 17:30</li>
            <li>관린요금: 대인 1,000원</li>
            <li>석조전은 예약 필수!!</li>
          </ul>
        </div>
      </div>
      <input type="checkbox" id="book_2_one"/>
        <div id="book_2_page" className="horizontal_page">
          <div className={styles.front}>
            <img src={img_1} alt="덕수궁돌담길"/>
          </div>
          <div className={styles.back}>
            <img src={img_2} alt="덕수궁"/>
          </div>
          <label for="book_2_one"></label>
        </div>
    </article>
  );
}

export default Cityhall_02;
