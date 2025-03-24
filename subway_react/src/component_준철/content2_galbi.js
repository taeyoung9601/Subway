import React from "react";
import styles from "./content2_galbi.module.css";
import { Template } from './index';
import img2 from './img/신촌_img2.png';

const Content2 = () => {
  return (
    <Template
      className={styles.galbi}
      imgsrc={img2}
      title={
        <>
          Sinchon
          <br />
          brothers
          <br />
          galbi
        </>
      }
      desc="1972년 개업한 신촌 랜드마크 형제갈비는 변하지 않은 불고기양념이
            인상적인 곳이다. '고기를 가지고 속임수를 부리지 않는다'는 경영철학이 유명하다."
    />
  );
};

export default Content2;
