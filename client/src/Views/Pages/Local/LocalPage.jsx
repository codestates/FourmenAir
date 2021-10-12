import React, {useState, useEffect} from 'react'
import DummyData from '../../../Dummy/DummyData'
import Header from './Components/Header'
import Banner from './Components/Banner'
import LocalTitle from './Components/LocalTitle'
import RandomBlog from './Components/RandomBlog'
import Footer from './Components/Footer'
import axios from 'axios'


const LocalPage = () => {
  const [dummy, setDummy] = useState([])
  const [mainDummy, setMainDummy] = useState([])
  
  useEffect(() => {
    handleDummy()
  }, [])
  
  const handleDummy = () => {
    const filter = DummyData.filter((el) => el.url)
    setDummy(filter)
  
    const filtered = DummyData.filter((el) => el.mainurl)
    setMainDummy(filtered)
  }

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
