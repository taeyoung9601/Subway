import { useRef } from "react";
import Slider   from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import Promotion from "./Promotion";
import Subway from "./Subway";


function Carousel() {
    console.groupCollapsed("Carousel() invoked."); console.groupEnd();

    // 두 캐러셀의 ref를 각각 생성
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    // 다음 슬라이드로 이동
    const next = () => {
        sliderRef1.current.slickNext();
        sliderRef2.current.slickNext();
    };

    // 이전 슬라이드로 이동
    const previous = () => {
        sliderRef1.current.slickPrev();
        sliderRef2.current.slickPrev();
    };

    const settings1 = {
        draggable: false,
        infinite: true,
        speed: 500,
        arrows: false, // 화살표는 비활성화 (공용 버튼 사용)
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
    };

    const settings2 = { ...settings1 };



    return (
        <div className={styles.window}>
            <div className={styles.container}>
                <Slider ref={sliderRef1} {...settings1}>
                    <Promotion id="0" />
                    <Promotion id="1" />
                    <Promotion id="2" />
                    <Promotion id="3" />
                    <Promotion id="4" />
                    <Promotion id="5" />
                </Slider>
            </div>

            <div className={styles.button_container}>
                <button className={styles.button} onClick={previous}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <div className={styles.window_train}>
                    <hr className={styles.green_line} />
                    <div className={styles.container_subway}>
                        <Slider ref={sliderRef2} {...settings2}>
                            <Subway id="0" />
                            <Subway id="1" />
                            <Subway id="2" />
                            <Subway id="3" />
                            <Subway id="4" />
                            <Subway id="5" />
                        </Slider>
                    </div>
                </div>

                <button className={styles.button} onClick={next}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Carousel;