import styles from "./Cityhall.module.css";
import { CityHall1, Cityhall2, Cityhall3, Cityhall4 } from '.';

const Cityhall = () => {

  return (
    <div className={ styles.sm_body }>
          <div className={ styles.col_div1 }>
            <CityHall1 />
          </div>
          <div className={ styles.col_div2 }>
            <Cityhall2 />
            <Cityhall3 />
          </div>
          <div className={ styles.col_div1 }>
            <Cityhall4 />
          </div>
    </div>
  );
}

export default Cityhall;
