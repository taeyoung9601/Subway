import styles from './Kali.module.css'
import Kali_img from './img/Kali_img.png'
import Kali_img2 from './img/Kali_img2.png'

console.groupCollapsed("Kali() invoked"); console.groupEnd();

function Kali() {
    return (
      <div className={styles.Kali}>
        <div className={styles.front}>
          <img src={Kali_img}/>
          <div>인도식 카레 음식점 깔리</div>
        </div>

        <div className={styles.back}>
          <img src={Kali_img2}/>
          <a href="https://map.naver.com/p/entry/place/38414925?c=15.00,0,0,0,dh&placePath=/menu" target="_blank">네이버 지도</a>
          <div>인도식 카레 맛집 깔리!</div>
          <div>최성락이 강력 추천합니다.</div>
        </div>
      </div>
    );
  }
  
  export default Kali;
  