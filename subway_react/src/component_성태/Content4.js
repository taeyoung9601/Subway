import image4 from './img/잠실_img4.png';
import Text4 from './Text4';
import styles from './Content.module.css';
import React , { useState } from 'react';

const Content4 = () => {
    const [toggle, setToggle] = useState(false);
            
    const handleToggle = () => {
        setToggle((prev) => !prev);
    };
    
    return(
        <div className={styles.Content4}>
        <img src={image4} className={styles.image4} onClick={handleToggle}></img>
        {toggle && <Text4 />}
        </div>

    );
}


export default Content4;