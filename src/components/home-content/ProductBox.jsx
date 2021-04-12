import React from 'react'
import Img from '../../assets/img/show.jpg'
import { Link, withRouter } from "react-router-dom"
import CONSTANTS from "../../routes/common.json"


const ProductBox = (props) => {
    const goToOrderPage = () => {
        props.history.push(CONSTANTS.ROUTES.ORDER)
    }
    return (
    <div className="box p-2 mb-2">
        <div className="img-box clear-padding col-md-2">
            <img src={Img} alt=""/>
        </div>
        <div className="product-info ms-3 col-md-10">
            <Link to={CONSTANTS.ROUTES.VIEW_SINGLE_PRODUCT}  className="category mt-2 cursor h-link">Kid's 2pk Cloth Face Masks</Link>
            <p style={{marginBottom:"0"}} className="text-muted">UGX 185,000</p>
            <button onClick={goToOrderPage} className="add-btn ps-4 pe-4">	&#43; Add</button>
        </div>
    </div>
    );
}

export default withRouter(ProductBox);