import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// banner 공통

const BannerContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

const BannerImg = styled.div`
  width: 100%;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 슬라이드 CSS

const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }
  .slick-slide div {
    /* cursor: pointer; */
    display: block;
    background-color: #1b7abb;
    width: 80%;
    height: 300px;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const Banner = () => {
  const settings = {
    dots: true,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    arrows: true,
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
    return (
        <section id="banner">
        <BannerContainer>
          <BannerImg>
          <div>
          <SlideTitle>인기 서비스</SlideTitle>
        <StyledSlider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </StyledSlider>
      </div>
          </BannerImg>
        </BannerContainer>
      </section>
    )
}

export default Banner
