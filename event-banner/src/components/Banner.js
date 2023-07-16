import React, {useState} from "react";

const Banner = () => {

    const [visible, setVisible] = useState(true)

    const getCoupon = () => { //비동기로 처리되지 않음. (closeBanner가 먼저 호출되더라도, getCoupon이 먼저 실행됨)
                            // 이벤트 버블링을 막아야겠다!
        alert("10%할인쿠폰을 받았습니다.")
    };

    const closeBanner = (e) => {
        // 이벤트가 퍼지는 것을 막기 위해, e.stopPropagation함수를 호출
        e.stopPropagation(); // 이벤트 전파가 막힘! setVisible(false)를 실행

        setVisible(false); // 비동기
    };

  return visible ? (
    <div
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={getCoupon}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  ): null;
};

export default Banner;
