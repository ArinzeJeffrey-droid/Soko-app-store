import React from 'react'
import { Route, Switch } from 'react-router';
import OrderSuccess from '../components/order/OrderSuccess';
import PlaceOrder from '../components/order/PlaceOrder';
import CONSTANTS from '../routes/common.json'

const OrderPage = () => {
    return (
    <Switch>
        <Route exact path={CONSTANTS.ROUTES.ORDER} component={PlaceOrder}/>
        <Route path={CONSTANTS.ROUTES.ORDER_SUCCESS} component={OrderSuccess}/>
    </Switch>
    );
}

export default OrderPage;