import React from 'react'
import RelatedProducts from '../components/product/RelatedProducts'
import Product from '../components/product/Product'

const ProductPage = () => {
    return (
        <React.Fragment>
            <Product/>
            <RelatedProducts/>
        </React.Fragment>
    );
}

export default ProductPage;