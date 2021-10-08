import React from 'react'
import Banner from './Components/Banner'
import LocalTitle from './Components/LocalTitle'
import Footer from './Components/Footer'
import RandomBlog from './Components/RandomBlog'


const LocalPage = ({image}) => {
    return (
    <React.Fragment>
      <Banner image={image} />
      <LocalTitle />
      <RandomBlog />
      <Footer />
    </React.Fragment>
    )
}

export default LocalPage
