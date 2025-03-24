import styles from './All.module.css'
import gangnam_img_3 from './img/gangnam_img_3.jpg'

function Food () {
    return (
        <div className={styles.Food}>
            <article className={styles.gangnam_2}>
                <div className={styles.front_food}>
                    <h1 className={styles.food_h1}>트랜드 음식의 선두주자</h1>
                </div>
                <div className={styles.back_food}>
                    <h2 className={styles.food_h2}>트랜드 음식의 선두주자</h2>
                    <p className={styles.food_p}>얼큰한 곱창 쌀국수의 원조 땀땀,
                        강남역 번화가는 대한민국에서 유행할 음식이
                        가장 먼저 선보여지는 곳이다.</p>
                </div>
            </article>
        </div>
    );
}

export default Food;