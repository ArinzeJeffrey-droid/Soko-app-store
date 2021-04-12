import React from 'react'
import VerficationCodeModal from '../modals/VerificationCodeModal'
import OrderBag from './OrderBag'
import OrderForm from './OrderForm'

const PlaceOrder = () => {
    return ( 
        <React.Fragment>
            <VerficationCodeModal/>
            <div className="row order-page">
                <OrderForm/>
                <OrderBag/>
            </div>
        </React.Fragment>
    );
}

export default PlaceOrder;