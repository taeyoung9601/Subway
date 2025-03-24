import styles from './All.module.css'
import gangnam_img_2 from './img/gangnam_img_2.png'

function Traffic() {
    return (
        <div className={styles.traffic}>
            <article className={styles.gangnam_1}>
            <div className={styles.front_traffic}>
                <h1 className={styles.traffic_h2}>교통의 요충지</h1>
            </div>
            <div className={styles.back_traffic}>
                <h2 className={styles.traffic_h2}>교통의 요충지</h2>
                <p className={styles.traffic_p}>강남역은 서울의 핵심 지하철 노선인 2호선과 경기도의 판교, 분당 등이 속한 신분당선을 이용할 수 있는 지하철역이다.</p>
            </div>
            </article>
        </div>
    );
}

export default Traffic;