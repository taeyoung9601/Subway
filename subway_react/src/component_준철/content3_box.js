import React from "react";
import styles from "./content3_box.module.css";
import { Template } from "./index";
import img3 from "./img/신촌_img3.png";

const Content3 = () => {
  return (
    <Template
      className={styles.boxquare}
      imgsrc={img3}
      title={
        <>
          Sinchon
          <br />
          boxquare
        </>
      }
      desc="신촌 박스퀘어는 서대문구가 이화여대 앞 노점상들을 한데 모아
            청년창업을 지원하기 위해 설립한 공공임대 상업공간입니다.
            컨테이너를 활용해 건립되었으며, 젊은이들을 타겟으로 한 트렌디한 디자인으로 신촌의 명물로 자리 잡았습니다."
    />
  );
};

export default Content3;
