import styles from './Cityhall_01.module.css';

import img_1 from './img/cityhall_img_01_1.png';
import img_2 from './img/cityhall_img_01_2.png';

// console.groupCollapsed("src/Cityhall_01.js"); console.groupEnd();

const Cityhall_01 = (props) => {
  // console.groupCollapsed("Cityhall_01({}) invoked.", props); console.groupEnd();

  return (
    <article className={`circle ${styles.circle_1}`}>
      <div className={`vertical_page text`}>
        <div className={`text_box`}>
          <h3>서울광장 스케이트장</h3>
          <ul>
            <li>장소: <br />
                <span style={{ paddingLeft: '30px', }}></span>시청 앞 서울광장<br />
                <span style={{ paddingLeft: '30px', }}></span>24.12.20(금) ~ 25.02.09(일)</li>
            <li>운영시간 : <br />
              <span style={{ paddingLeft: '30px', }}></span>일 ~ 금 : 10:00 ~ 21:30 <br />
              <span style={{ paddingLeft: '30px', }}></span>토,공휴일: 10:00 ~ 23:00
            </li>
            <li>이용요금:
            <br /><span style={{ paddingLeft: '20px', }}></span>- 1,000원 (1시간, 장비대여 포함)
           </li>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="book_1_one" />
      <div id="book_1_page" className="vertical_page">
        <div className={styles.front}>
          <img src={img_1} alt="서울시청" />
        </div>
        <div className={styles.back}>
          <img src={img_2} alt="서울광장 스케이트장" />
        </div>
        <label for="book_1_one"></label>
      </div>
    </article>
  );
}

export default Cityhall_01;
