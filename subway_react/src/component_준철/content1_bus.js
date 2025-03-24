import React from 'react';
import styles from './content1_bus.module.css'
import { Template } from './index';
import img1 from './img/신촌_img1.jpg';



const Content1 = () => {
    return(
      <Template
      className={styles.playbus}
      imgsrc={img1}
      title={
        <>
          Sinchon<br/>
          playbus
        </>
      }
      desc="신촌 플레이버스는 신촌 연세로 스타광장 내에 위치한 이색체험 버스이다. 2층 버스로 이루어졌으며 버스에서 신촌 문화 체험과 음악감상 및 다양한 체험을 할 수 있고, 플레이버스에서 직접 방송과 공연을 할 수 있고, 영상편지를 띄워 볼 수도 있다."
    />
    );
}

export default Content1