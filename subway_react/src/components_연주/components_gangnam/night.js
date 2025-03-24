import styles from './All.module.css';
import gangnam_img_4 from './img/gangnam_img_4.jpeg';

function Night() {
    return (
        <div className={styles.Night}>
            <article className={styles.gangnam_3}>
                <div className={styles.front_night}>
                    <h1 className={styles.night_h2}>가장 한국다운 야경</h1>
                </div>
                <div className={styles.back_night}>
                    <h2 className={styles.night_h2}>가장 한국다운 야경</h2>
                    <p className={styles.night_p}>고층빌딩이 밀집되고 차들이 쉼 없이 달리는 모습을 볼 수 있는 강남역의 야경은 바쁘고 빠르게 움직이는 대한민국의 현재를 한눈에 나타낸다.</p>
                </div>
            </article>
        </div>
    );
}

export default Night;