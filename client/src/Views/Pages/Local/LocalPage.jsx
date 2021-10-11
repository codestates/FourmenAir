import React, { useState } from 'react'
import Banner from './Components/Banner'
import LocalTitle from './Components/LocalTitle'
import Footer from './Components/Footer'
import RandomBlog from './Components/RandomBlog'


const LocalPage = ({dummy}) => {

  
    return (
    <React.Fragment>
      <Banner dummy={dummy} />
      <LocalTitle dummy={dummy} />
      <RandomBlog dummy={dummy} />
      <Footer />
    </React.Fragment>
    )
}

export default LocalPage
