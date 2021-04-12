import React from 'react'
import RelatedProducts from '../components/product/RelatedProducts'
import Product from '../components/product/Product'
import Footer from '../components/footer/Footer'

const ProductPage = () => {
    return (
        <React.Fragment>
            <Product/>
            <RelatedProducts/>
            <Footer/>
        </React.Fragment>
    );
}

export default ProductPage;