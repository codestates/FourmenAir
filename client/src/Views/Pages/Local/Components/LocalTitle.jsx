import React, { useState, useEffect } from 'react'
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
  padding: 15px 0 7px 10px;
  border-bottom: 2px solid #eee;
  > span {
    font-size: 19px;
    font-weight: bold;
  }
`;
const LocalDivButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 7%;
  font-size: 15px;
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  &:last-child{
      margin-right: 0;
  }
  &:hover {
      color: #fff;
      background-color: #1a1a1a;
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

const LocalTitle = ({dummy}) => {
  const [selectLocal, setSelectLocal] = useState('서울')
  const [selectBlog, setSelectBlog] = useState([])
  
  const setBlog = dummy.filter((el) => el.data.local === "서울")

  // local 빼오는 작업
  const filteredLocal = dummy.map((el) => el.data.local)
  const localAll = filteredLocal.filter((ele, i) => {
    return filteredLocal.indexOf(ele) === i
  })

  const handleClick = (e) => {
    // span에 있는 local 변경 작업
    setSelectLocal(e)

    // blog 빼오는 작업
    const filteredBlog = dummy.filter((el) => el.data.local === e)
    setSelectBlog(filteredBlog)
  }
    return (
        <section id="lacal-title">
            <LocalTitleContainer>
                <Local>
                  <LocalDiv>
                    <span>{selectLocal}</span>
                  </LocalDiv>
                    <div style={{textAlign: "center", paddingTop: "15px"}}>
                      {localAll.map((el, i) => {
                        return <LocalDivButton key={i} onClick={() => handleClick(el)}>{el}</LocalDivButton>
                      })}
                    </div>
                </Local>
                <LocalImg>
                    <LocalImgUl>
                          {selectBlog.length === 0 ? 
                          (
                            setBlog.map((el, i) => {
                              return ( 
                              <>
                                <LocalImgUlLi>
                                  <LocalImgUlLiImg key={i} src={el.url} alt="" />
                                  <LocalImgUlLiH4  key={i} >{el.title}</LocalImgUlLiH4>
                                  <LocalImgUlLiP  key={i} >{el.postcontents}</LocalImgUlLiP>
                                </LocalImgUlLi>
                            </>
                              )
                          })
                          )
                           : 
                          (
                            selectBlog.map((el, i) => {
                              return ( 
                              <>
                                <LocalImgUlLi>
                                  <LocalImgUlLiImg key={i} src={el.url} alt="" />
                                  <LocalImgUlLiH4  key={i} >{el.title}</LocalImgUlLiH4>
                                  <LocalImgUlLiP  key={i} >{el.postcontents}</LocalImgUlLiP>
                                </LocalImgUlLi>
                              </>
                            )
                          })
                          )
                          }
                    </LocalImgUl>
                </LocalImg>
            </LocalTitleContainer>
        </section>
    )
}

export default LocalTitle
