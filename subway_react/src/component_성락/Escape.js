import styles from './Escape.module.css'
import escape_img from './img/escape_img.png'
import escape_img2 from './img/escape_img2.png'
import escape_img3 from './img/escape_img3.png'
import escape_img4 from './img/escape_img4.png'
import escape_img5 from './img/escape_img5.png'
import escape_img6 from './img/escape_img6.png'

console.groupCollapsed("escape() invoked"); console.groupEnd();

function escape() {
  return (
    <div className={styles.Escape}>
      <div className={styles.front}>
        <div className={styles.front_1}>
          <img src={escape_img} />
          <img src={escape_img2} />
        </div>
        <div className={styles.front_2}>
          <div>방탈출 카페 도어이스케이프</div>
          <div>도어이스케이프는 테마룸 안에서 주어진 단서들로 </div>
          <div>
            추리하여 탈출하는 새로운 놀이공간입니다
          </div>
        </div>
      </div>

      <div className={styles.back}>
        <img src={escape_img6} />
        <img src={escape_img3} />
        <img src={escape_img4} />
        <img src={escape_img5} />
      </div>
    </div>
  );
}

export default escape;
