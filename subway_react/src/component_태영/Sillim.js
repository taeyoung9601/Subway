import React, { useState } from "react";

import SillimImg from "./SillimImg";
import styles from "./Sillim.module.css";

import 타임스트림 from "./img/sillim_타임스트림.jpg";
import 물놀이장 from "./img/sillim_물놀이장.jpg";
import 별빛축제 from "./img/sillim_별빛축제.jpg";
import 순대타운 from "./img/sillim_순대타운.jpg";



const Sillim = () => {
    console.groupCollapsed("Sillim() invoked."); console.groupEnd();

    const [selectedText, setSelectedText] = useState(false);

    const openModal = (text) => setSelectedText(text);
    const closeModal = () => setSelectedText(false);

    return (
        <div className={styles.sillim_container}>
            <SillimImg 
                img={타임스트림} 
                name="sillim1" 
                alt="타임스트림 이미지" 
                text={`타임스트림
                    주소: 서울 관악구 신림로 330 타임스트림
                    전화번호: 02-881-8000`}
                onClick={() => openModal("신림역에 위치한 복합 쇼핑몰,식당,영화관,팝업스토어,쇼핑몰 등 다양하게 구성 B7~14F 층으로 구성")}
            />
            <SillimImg 
                img={물놀이장} 
                name="sillim2" 
                alt="물놀이장 이미지" 
                text={`도림천 물놀이장
                    주소: 서울 관악구 신림동 1642-7`}
                onClick={() => openModal("도림천에 위치한 여름철 야외 물놀이 시설로, 미취학 아동 및 9세 이하 어린이들을 대상으로 운영 ,매년 7월부터 8월까지 오전 10시부터 오후 6시까지 운영되며, 입장료는 무료")}
            />
            <SillimImg 
                img={별빛축제} 
                name="sillim3" 
                alt="별빛축제 이미지" 
                text={`별빛축제
                    주소: 서울 관악구 신림동 1642-10`}
                onClick={() => openModal("도림천에 위치한 신림교~봉림교 200m 구간 ,제 4회 관악별빛산책 , 날짜 : 2024.11.11 ~ 2025.02.09, 주차는 신원시장 공용 주차장 이용가능하지만 대중교통 추천합니다.")}
            />
            <SillimImg 
                img={순대타운} 
                name="sillim4" 
                alt="순대타운 이미지" 
                text={`순대타운
                    주소: 서울 관악구 신림로59길 14`}
                onClick={() => openModal("순대 요리 전문 음식점들이 모여 있는 곳으로 대표 메뉴엔 백순대,양념순대볶음이 있다. 영업 시간 12:00 ~ 24:00 ,연중무휴")}
            />
            {selectedText == false ? "" : (
                <div className={styles.modal} onClick={closeModal} >
                    <div className={styles.modal_content}>
                        <p>{selectedText}</p>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Sillim;