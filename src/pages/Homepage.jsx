import React from 'react'
import BagPanel from '../components/home-content/BagPanel'
import ProductContainer from '../components/home-content/ProductContainer'
import HomeSideNav from '../components/home-sidenav/HomeSideNav'

const HomePage = () => {
    return (
        <div style="width: 100%;" className="row">
            <HomeSideNav/>
            <ProductContainer/>
            <BagPanel/>
        </div>
    );
}

export default HomePage;