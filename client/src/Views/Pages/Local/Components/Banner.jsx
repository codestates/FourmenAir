import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// banner 공통

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
const Image = styled.img`
 background-size: cover;
`;

const Banner = ({image}) => {
  const settings = {
    dots: true,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
    return (
        <section id="banner">
        <div className="container">
          <BannerImg>
          <div>
          <SlideTitle>인기 서비스</SlideTitle>
        <StyledSlider {...settings}>
            {image.map((el, i) => {
              return<div> <Image key={i} src={el.url} alt="차박" /></div>
            })}
        </StyledSlider>
      </div>
          </BannerImg>
        </div>
      </section>
    )
}

export default Banner
