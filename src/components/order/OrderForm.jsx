import React from 'react'
import { Link } from 'react-router-dom';
import AddressModal from '../modals/AddressModal';
import CONSTANTS from "../../routes/common.json"

const OrderForm = () => {
    return (
<React.Fragment>
    <AddressModal/>
    <div className="col-lg-8 col-md-7 order-section">
        <div className="container mt-3 ms-lg-5">
            <div className="row">
                <div className="step-container col-md-1 me-md-4 clear-padding">
                    <div className="step">
                        <div className="circle circle-active">
                            <p className="bold">1</p>
                        </div>
                        <div className="line line-active"></div>
                        <div className="circle">
                            <p className="bold">2</p>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                            <p className="bold">3</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-10">
                    <div className="row">
                        <form action="" className="col-lg-6 me-2 col-md-12">
                            <h6 className="bold">Account</h6>
                            <p className="small-text">To place your order, log in by entering your 10 digits mobile number</p>
                            <div className="form-group">
                                <label for="" className="small-text">Mobile Number</label>
                                <div className="input-group w-75">
                                    <input type="text" className="form-control me-2" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn buy border-radius" type="button" id="button-addon1">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="col-lg-6 col-md-12 me-2 mt-3">
                            <h6 className="bold">Delivery Address</h6>
                            <p className="small-text">Select delivery address from existing one or add new one</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card h-100 cursor">
                                        <div className="card-body">
                                            <p className="card-title">Shrey Karah</p>
                                            <p className="card-text small-text text-muted">Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-bs-toggle="modal" data-bs-target="#addressModal" className="card h-100 cursor">
                                        <div className="card-body flex">
                                            <p className="small-text bold blue m-auto">&#43;  Add New Address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-3">
                            <h6 className="bold">Payment</h6>
                            <p className="small-text">Select your payment method</p>
                            <div className="form-group">
                                <input type="radio"/>
                                <label for="" className="small-text">Cash on delivery</label>
                            </div>
                            <Link to={CONSTANTS.ROUTES.ORDER_SUCCESS} className="btn buy mt-5 ps-5 pe-5">Place order</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
    );
}

export default OrderForm;