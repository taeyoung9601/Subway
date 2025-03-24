import styles from './Text.module.css';
import React , { useState } from 'react';




const Text1 = ({ onToggle , Toggle}) => {

    return(
        <div className={`text1 ${styles.text1}`} onClick={onToggle}>
            <h2>[ KIDZANIA ]</h2>
            <p>현실 그대로의 도시, 체험과 놀이를 통해 생생하게 직업을 체험할 수
              있는 어린이 직업체험 테마파크입니다!
            </p>
        </div>
    );
}



export default Text1;
