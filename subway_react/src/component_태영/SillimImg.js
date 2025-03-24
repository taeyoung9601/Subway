import React from "react";
import styles from "./SillimImg.module.css";


const SillimImg = (props) => {
    console.groupCollapsed("SillimImg() invoked."); console.groupEnd();

    return (
        <div className={`${styles[props.name]}`}   onClick={props.onClick}>
                <img src= {props.img} alt={props.alt} className={styles.img}></img>
                <div className={styles.sillim_blur_layer}>
                    <p className={styles.sillim_p}>{props.text}</p>
                </div>
        </div>
    );
}


export default SillimImg;