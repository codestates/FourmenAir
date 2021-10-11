import React from 'react'
import Header from "./Components/Header"
import MainPhoto from './Components/MainPhoto'
import SeasonBlog from './Components/SeasonBlog'
import Footer from "./Components/Footer"

const Landing = ({mainDummy, isLogin}) => {
    return (
        <React.Fragment>
            <Header mainDummy={mainDummy} isLogin={isLogin} ></Header>
            <MainPhoto></MainPhoto>
            <SeasonBlog></SeasonBlog>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Landing
