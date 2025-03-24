import {Content1 , Content2 , Content3, Content4 } from '.';
import styles from './Jamsil.module.css';




const Jamsil = () => {

    return(
        <div className={styles.TOtal}>
            <Content1 />
            <Content2  />
            <div className={styles.Con3Plus4}>
            <Content3  />
            <Content4  />
            </div>
        </div>
    );
}



export default Jamsil;