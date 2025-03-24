import image2 from './img/잠실_img2.png';
import Text2 from './Text2';
import styles from './Content.module.css';
import React , { useState } from 'react';

const Content2 = () => {
    const [toggle, setToggle] = useState(false);
    
        const handleToggle = () => {
            setToggle((prev) => !prev);
        };

    return(
        <div className={styles.Content2}>
        <img src={image2} className={styles.image2} onClick={handleToggle}></img>
        {toggle && <Text2 />}
        </div>

    );
}


export default Content2;