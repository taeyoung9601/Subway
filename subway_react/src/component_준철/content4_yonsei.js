import React from "react";
import styles from "./content4_yonsei.module.css";
import { Template } from "./index";
import img4 from "./img/신촌_img4.jpg";

const Content4 = () => {
  return (
    <Template
      className={styles.yonsei}
      imgsrc={img4}
      title={
        <>
          Sinchon <br />
          yonsei <br />
          university
        </>
      }
      desc="연세대학교 신촌캠퍼스(延世大學校 新村-, Yonsei University Sinchon Campus)는 서울특별시 서대문구 신촌동에 위치한 연세대학교의
            캠퍼스이다. 면적은 약 990,000m2이며, 하늘에서 바라본 형상은 마름모꼴이다. 서울의 손꼽히는 부도심인 신촌에 인접하고 있으며,
            동쪽으로는 성산로 건너 이화여자대학교가 있다. 본관인 언더우드관을 비롯한 학교의 초창기에 지어진 건물들은 잘 보존되어 사적으로
            지정되었으며, 여러 단과대학, 연구시설 등과 중앙도서관, 의료원, 학생회관, 기숙사 등이 있는 핵심 캠퍼스이다."
    />
  );
};

export default Content4;
