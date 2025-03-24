import image3 from './img/잠실_img3.jpg';
import Text3 from './Text3';
import styles from './Content.module.css';
import React , { useState } from 'react';

const Content3 = () => {
    const [toggle, setToggle] = useState(false);
        
    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return(
        <div className={styles.Content3}>
        <img src={image3} className={styles.image3} onClick={handleToggle}></img>
        {toggle && <Text3 />}
        </div>

    );
}


export default Content3;