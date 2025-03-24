import {Escape, Kali, SmallWorld} from './index';
import styles from './Total.module.css';

console.groupCollapsed("Total() invoked"); console.groupEnd();

function Total() {
    return (
      <div className={styles.Total}>

        <div className={styles.top}>
          <Kali/>
          <SmallWorld/>
        </div>

        <div className={styles.bottom}>
          <Escape/>
        </div>

      </div>
    );
  }
  
  export default Total;
  