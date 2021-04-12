import React from 'react'
import ProductChild from './ProductChild'

const RelatedProducts = () => {
    return (
        <div class="container mt-5 mb-3">
            <h5 class="text-muted">RELATED PRODUCTS</h5>
            <div class="row mt-5 justify-content-md-center">
                <ProductChild/>
                <ProductChild isDiscount={true}/>
                <ProductChild/>
                <ProductChild isDiscount={true}/>
                <ProductChild/>
                <ProductChild/>
            </div>
        </div>
    );
}

export default RelatedProducts;