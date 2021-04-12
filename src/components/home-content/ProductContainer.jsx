import React from 'react'
import ProductBox from './ProductBox'
import SearchField from './SearchField'


const ProductContainer = () => {
    return (
    <div className="col-lg-6 border-right middle ps-5 pe-5">
        <SearchField/>
        <h5 className="mt-3 category">Electronics <span className="badge">12</span></h5>
        <div className="row mt-4 mb-3 justify-content-md-center">
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
            <ProductBox/>
        </div>
    </div>
    );
}

export default ProductContainer;