import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Account from '../components/account/Account';
import Address from '../components/account/Address';
import AddressModal from '../components/modals/AddressModal';
import CONSTANTS from '../routes/common.json'


const AccountPage = () => {
    return (  
    <div className="container mt-5">
        <AddressModal/>
        <div className="account-container row m-auto mb-3">
            <div className="col-md-3 acc-first clear-padding">
                <ul className="acc-nav mt-3">
                    <li className="p-2">
                        <Link to={CONSTANTS.ROUTES.ACCOUNT}>
                            <span className="fas fa-clipboard-list"></span> My Orders
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link to={CONSTANTS.ROUTES.ACCOUNT_ADDRESS}>
                            <span className="fas fa-map-marker-alt"></span> My Adresses
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-9 acc-second">
                <Switch>
                    <Route exact path={CONSTANTS.ROUTES.ACCOUNT} component={Account}/>
                    <Route path={CONSTANTS.ROUTES.ACCOUNT_ADDRESS} component={Address}/>
                </Switch>
            </div>
        </div>
    </div>
    );
}

export default AccountPage;