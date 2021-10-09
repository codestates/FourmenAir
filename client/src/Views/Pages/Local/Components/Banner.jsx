import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// banner 공통

const BannerImg = styled.div`
  width: 100%;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
   .slick-slide {
  box-sizing: border-box;
  height: 700px;
  }
  .slick-slide div {  // 이미지를 감싸고 있는 div
    cursor: pointer;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .slick-slide img { // 이미지
    top: -50px;
    background-size: cover;
    width: 100%;
    height: 700px;
    box-sizing: border-box;
    border: 0;
    opacity: 0.9;
    z-index: -9999;
  }
  .slick-list { // 사진 위치
    width: 100%;
  }
  .slick-dots { // 밑에 점 나오는거
    position: absolute;
    top: 90%;
    width: 100%;
    text-align: center;
    .slick-active {
      button::before {
        color: #fff;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
.slick-prev {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-indent: -9999px;
  
}
.slick-prev::before {
  content: '<';
  color: black;
  text-indent: 0;
  position: absolute;
  top: 8px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #e9e9e9;
}
.slick-next {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-indent: -9999px;
}
.slick-next::before {
  content: '>';
  color: black;
  text-indent: 0;
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #e9e9e9;
}
`;

const Banner = ({dummy}) => {
  const settings = {
    dots: true,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,  // 넘어가는 속도
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    slidesToShow: 1,  // 1장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    responsive: [
      {  
        breakpoint: 960, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:3 
        } 
      },
      { 
        breakpoint: 768, //화면 사이즈 768px일 때
        settings: {	
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:2 
        } 
      }
    ]
  };

    return (
      <section id="banner">
        <div className="container">
          <BannerImg>
            <div style={{position: "relative"}}>
              {/* <SlideTitle>인기 서비스</SlideTitle> */}
              <StyledSlider {...settings}>
                {dummy.map((el, i) => {
                  if(el.id < 5){
                  return (
                    <>
                      <img key={i} src={el.url} alt="차박" />
                    </>
                    )
                  }
                })}
              </StyledSlider>
            </div>
          </BannerImg>
        </div>
      </section>
    )
}

export default Banner
