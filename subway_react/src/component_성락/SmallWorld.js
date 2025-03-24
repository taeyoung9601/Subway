import styles from './SmallWorld.module.css';
import SmallWorld_img from './img/SmallWorld_img.png';
import SmallWorld_img2 from './img/SmallWorld_img2.png';

console.groupCollapsed("SmallWorld() invoked"); console.groupEnd();

function SmallWorld() {
    return (
    <div className={styles.SmallWorld}>
      <div className={styles.front}>
        <img src={SmallWorld_img}/>
        <div>보드게임카페 스몰월드</div>
      </div>

      <div className={styles.back}>
        <img src={SmallWorld_img2}/>
        <a href="https://map.naver.com/p/search/%EC%82%AC%EB%8B%B9%20%EC%8A%A4%EB%AA%B0%EC%9B%94%EB%93%9C/place/36448703?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="_blank">네이버 지도</a>
        <div>재밌는 보드게임이 한 가득!</div>
        <div>스몰월드로 오세요!</div>
      </div>
    </div>
    );
  }
  
  export default SmallWorld;
  