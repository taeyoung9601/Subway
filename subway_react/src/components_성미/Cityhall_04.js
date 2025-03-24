import styles from "./Cityhall_04.module.css";

import img_1 from './img/cityhall_img_04_1.png';
import img_2 from './img/cityhall_img_04_2.png';

// console.groupCollapsed("src/Cityhall_04.js"); console.groupEnd();

const Cityhall_04 = (props) => {
  // console.groupCollapsed("Cityhall_04({}) invoked.", props); console.groupEnd();

  return (
    <article className={`circle ${styles.circle_2}`}>
      <div className={`vertical_page text`}>
        <div className={`text_box`}>
          <h3>서울 시립 미술관</h3>
          <ul>
            <li>운영시간:
              <br /><span style={{ paddingLeft: '10px', }}></span>평일(화~금) 10시 ~ 20시
              <br /><span style={{ paddingLeft: '10px', }}></span>휴일(토/일/공휴일)
              <br /><span style={{ paddingLeft: '20px', }}></span>오전 10시 ~ 오후 6시 (동절기)
            </li>
            <li>휴관안내:
              <br /><span style={{ paddingLeft: '20px', }}></span>- 1월 1일 , 매주 월요일</li>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="book_4_one" />
      <div id="book_4_page" className="vertical_page">
        <div className={styles.front}>
          <img src={img_1} alt="서울 시립 미술관" />
        </div>
        <div className={styles.back}>
          <img src={img_2} alt="서울 시립 미술관" />
        </div>
        <label for="book_4_one"></label>
      </div>
    </article>
  );
}

export default Cityhall_04;
