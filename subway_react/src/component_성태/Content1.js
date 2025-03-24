import image1 from './img/잠실_img1.jpg';
import Text1 from './Text1';
import styles from './Content.module.css';
import React , { useState } from 'react';


const Content1 = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };


    return(
        <div className={styles.Content1}>
        <img src={image1} className={styles.image1} onClick={handleToggle} />
       
        {toggle && <Text1 />}
        </div>

    );
}


export default Content1;