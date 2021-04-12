import React from 'react'
import Footer from '../components/footer/Footer'
import BagPanel from '../components/home-content/BagPanel'
import ProductContainer from '../components/home-content/ProductContainer'
import HomeSideNav from '../components/home-sidenav/HomeSideNav'

const HomePage = () => {
    return (
        <div style={{width: "100%"}} className="row">
            <HomeSideNav/>
            <ProductContainer/>
            <BagPanel/>
            <Footer/>
        </div>
    );
}

export default HomePage;