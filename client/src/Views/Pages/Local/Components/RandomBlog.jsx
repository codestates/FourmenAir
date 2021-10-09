import React, {useState} from 'react'
import styled from "styled-components"

// Random 공통
const RandomeContainer = styled.div`
position: relative;
width: 1280px;
margin: 0 auto;
background-color: #777;
`;

const RandomBlogs = styled.div`
  width: 100%;
  height: 800px;
  padding: 20px 50px;
  box-sizing: border-box;
  > ul {
    border: 2px solid #12babb;
  &:last-child{
      padding-right: 0;
  }
  text-align: center;
  }
`;

const RandomBlogsDiv = styled.div`
  padding: 15px;
  > span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const RandomBlogsUlLi = styled.li`
  display: inline-block;
  border: 1px solid #fff;
  width: 29.3333%;
  height: 250px;
  margin: 1%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: all 1s ease-in-out;
  backface-visibility: hidden;
  &:hover{
    transform: rotateY(360deg);
  }

  > h4 {
  position: absolute;
  bottom: 50px;
  left: 15px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  > p {
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  > img {
    background-size: cover;
  }
`;

const RandomBlog = ({dummy}) => {
const [randomDummy, setRandomDummy] = useState([])

  const handleRandomClick = () => {
    const randomList = []
    for(let i = 0; i < 6; i++){
      let random = Math.floor(Math.random() * dummy.length)
      randomList.push(dummy[random])
    }
    let reRandom = randomList.filter((el, i) => randomList.indexOf(el) === i)
    while(reRandom.length === 6){
      if(reRandom.length === 6){
        return setRandomDummy(reRandom)
      }else{
        let reList = Math.floor(Math.random() * dummy.length)
        reRandom.push(dummy[reList])
      }
    }
  }

    return (
        <section id="random">
            <RandomeContainer>
                <RandomBlogs>
                  <RandomBlogsDiv>
                    <span onClick={handleRandomClick}>여긴어때?! ( ⁎ ᵕᴗᵕ ⁎ )</span>
                  </RandomBlogsDiv>
                    <ul>
                      {randomDummy.length === 0 ? 
                      (
                        dummy.map((el, i) => {
                          if(el.id < 7){
                          return ( 
                            <RandomBlogsUlLi key={i}>
                              <h4>{el.title}</h4>
                              <p>{el.postcontents}</p>
                              <img src={el.url} alt="차박" />
                            </RandomBlogsUlLi>
                            )
                          }
                        })
                      )
                      :
                      (randomDummy.map((el, i) => {
                        return (
                          <RandomBlogsUlLi key={i}>
                              <h4>{el.title}</h4>
                              <p>{el.postcontents}</p>
                              <img src={el.url} alt="차박" />
                          </RandomBlogsUlLi>
                          )
                        })
                      )
                      }
                    </ul>
                </RandomBlogs>
            </RandomeContainer>
        </section>
    )
}

export default RandomBlog
