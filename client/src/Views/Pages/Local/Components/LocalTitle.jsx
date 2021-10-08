import React from 'react'
import styled from 'styled-components'

// localtitle 공통

const LocalTitleContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  background-color: #555;
`;

// local

const Local = styled.div`
  padding: 20px 50px;
`;

const LocalDiv = styled.div`
  padding: 15px;
  > span {
    font-size: 19px;
    font-weight: bold;
  }
`;

const LocalUl = styled.ul`
  border: 2px solid #12babb;
  &:last-child{
      padding-right: 0;
  }
  text-align: center;
`;

const LocalUlLi = styled.li`
  display: inline-block;
  padding: 20px 20px;
  margin-right: 80px;
  font-size: 20px;
  &:last-child{
      margin-right: 0;
  }
  &:hover a{
      color: #fff;
  }
`;

const LocalImg = styled.div`
  padding: 20px 50px;
  height: 300px;
`;

const LocalImgUl = styled.ul`
  border: 2px solid #12babb;
  &:last-child{
      padding-right: 0;
  }
  box-sizing: border-box;
`;

const LocalImgUlLi = styled.li`
  display: inline-block;
  border: 1px solid #fff;
  width: 29.3333%;
  height: 250px;
  margin: 1%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  opacity: 0.4;
  transition: all 0.6s 0.2s ease;
  transform: translateX(50px);
  &:hover{
    opacity: 1;
  transform: translateX(0px);
  }
`;

const LocalImgUlLiH4 = styled.h4`
  position: absolute;
  bottom: 50px;
  left: 15px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const LocalImgUlLiP = styled.p`
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LocalImgUlLiImg = styled.img`
  background-size: cover;
`;

const LocalTitle = () => {
    return (
        <section id="lacal-title">
            <LocalTitleContainer>
                <Local>
                  <LocalDiv>
                    <span>서울</span>
                  </LocalDiv>
                    <LocalUl>
                        <LocalUlLi><a href="#">서울</a></LocalUlLi>
                        <LocalUlLi><a href="#">경기</a></LocalUlLi>
                        <LocalUlLi><a href="#">강원</a></LocalUlLi>
                        <LocalUlLi><a href="#">충청</a></LocalUlLi>
                        <LocalUlLi><a href="#">전라</a></LocalUlLi>
                        <LocalUlLi><a href="#">경상</a></LocalUlLi>
                        <LocalUlLi><a href="#">제주</a></LocalUlLi>
                    </LocalUl>
                </Local>
                <LocalImg>
                    <LocalImgUl>
                        <LocalImgUlLi>
                            <LocalImgUlLiH4>이미지 제목이 들어갑니다.</LocalImgUlLiH4>
                            <LocalImgUlLiP>이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.</LocalImgUlLiP>
                            <LocalImgUlLiImg src="" alt="" />
                        </LocalImgUlLi>
                        <LocalImgUlLi>
                            <LocalImgUlLiH4>이미지 제목이 들어갑니다.</LocalImgUlLiH4>
                            <LocalImgUlLiP>이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.</LocalImgUlLiP>
                            <LocalImgUlLiImg src="" alt="" />
                        </LocalImgUlLi>
                        <LocalImgUlLi>
                            <LocalImgUlLiH4>이미지 제목이 들어갑니다.</LocalImgUlLiH4>
                            <LocalImgUlLiP>이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.이미지 내용이 들어갑니다.</LocalImgUlLiP>
                            <LocalImgUlLiImg src="" alt="" />
                        </LocalImgUlLi>
                    </LocalImgUl>
                </LocalImg>
            </LocalTitleContainer>
        </section>
    )
}

export default LocalTitle
