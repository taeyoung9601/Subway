import styles from './All.module.css';
import gangnam_img_5 from './img/gangnam_img_5.png'

function Beauty(){
    return (
         <div className={styles.Beauty}>
                <article className={styles.gangnam_4}>
                
                    <div className={styles.front_beauty}>
                        <h1 className={styles.beauty_h2}>뷰티 트랜드의 중심</h1>
                    </div>
                
                    <div className={styles.back_beauty}>
                        <h2 className={styles.beauty_h2}>뷰티 트랜드의 중심</h2>
                        <p className={styles.beauty_p}>강남역 화장품거리는 국내외 유명 뷰티 브랜드와
                            트렌디한 화장품 매장이 밀집한 쇼핑 거리로, 다양한 제품을
                            직접 체험하고 최신 뷰티 트렌드를 확인할 수 있어
                            뷰티 애호가들에게 인기 있는 명소다.</p>
                    </div>

                </article>
         </div>
    );
}


export default Beauty;