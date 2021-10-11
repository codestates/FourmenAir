import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import LocalTitle from './Components/LocalTitle'
import RandomBlog from './Components/RandomBlog'
import Footer from './Components/Footer'


const LocalPage = ({dummy, mainDummy}) => {

  
    return (
    <React.Fragment>
      <Header mainDummy={mainDummy} />
      <Banner dummy={dummy} />
      <LocalTitle dummy={dummy} />
      <RandomBlog dummy={dummy} />
      <Footer />
    </React.Fragment>
    )
}

export default LocalPage
