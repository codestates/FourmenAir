import React, {useState, useEffect} from 'react'
import DummyData from '../../../Dummy/DummyData'
import Header from "./Components/Header"
import MainPhoto from './Components/MainPhoto'
import SeasonBlog from './Components/SeasonBlog'
import Footer from "./Components/Footer"

const Landing = () => {
    const [dummy, setDummy] = useState([])
    const [mainDummy, setMainDummy] = useState([])
   
    
    useEffect(() => {
      handleDummy()
      // setIsLogin(true) 마이페이지 보고싶을 때!
    }, [])
    
    const handleDummy = () => {
      const filter = DummyData.filter((el) => el.url)
      setDummy(filter)
    
      const filtered = DummyData.filter((el) => el.mainurl)
      setMainDummy(filtered)
    }

    return (
        <React.Fragment>
            <Header mainDummy={mainDummy}></Header>
            <MainPhoto></MainPhoto>
            <SeasonBlog></SeasonBlog>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Landing
