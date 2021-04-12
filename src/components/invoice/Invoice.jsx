import React from 'react'
import Img from "../../assets/img/show.jpg"


const Invoice = (props) => {
    return (
    <div className="container mt-3">
        <h5 onClick={props.history.goBack} className="bold cursor"><span className="bold me-3">&#60;</span> Order #1233341</h5>
        <div className="invoice-container p-3 mb-5 m-auto outline">
            <div className="invoice-panel mt-3">
                <i className="fas fa-bullseye bullseye me-4"></i>
                <div className="panel-detail">
                    <p className="bold mb-0 big-text">Target</p>
                    <p className="mt-0 text-muted special">25/02/2021, 01:55pm |3 Items | UGX 1,600</p>
                </div>
                <div className="nav-border"></div>
            </div>
            <div className="invoice-panel mt-3">
                <i className="fas fa-check-circle check me-4"></i>
                <div className="panel-detail">
                    <p className="bold mb-0 big-text">Order Confirmed</p>
                    <p className="mt-0 text-muted ">25/02/2021, 02:15pm</p>
                </div>
                <div className="nav-border"></div>
            </div>
            <div className="invoice-panel mt-3">
                <i className="fas fa-check-circle check me-4"></i>
                <div className="panel-detail">
                    <p className="bold mb-0 big-text">Shipped</p>
                    <p className="mt-0 text-muted ">25/02/2021, 09:01am</p>
                </div>
                <div className="nav-border"></div>
            </div>
            <div className="invoice-panel mt-3">
                <i className="fas fa-check-circle check gray me-4"></i>
                <div className="panel-detail">
                    <p className="bold mb-0 big-text">Delivered</p>
                    <p className="mt-0 text-muted">Delivery on the way..</p>
                </div>
                <div className="nav-border"></div>
            </div>
            <p className="text-muted mt-5">3 ITEMS</p>
            <div className="row mt-4 mb-3 m-auto justify-content-md-center">
                <div className="box p-2 mb-2">
                    <div className="img-box clear-padding col-md-2">
                        <img src={Img} alt=""/>
                    </div>
                    <div className="product-info ms-3 col-md-10">
                        <h6 className="category mt-2">Kid's 2pk Cloth Face Masks</h6>
                        <p style={{marginBottom:"0"}} className="text-muted small-text">Size: <span className="bold me-3">Medium</span>  Color: <span className="badge badge-round bg-dark black">1</span></p>
                        <p className="float-start small-text mt-2 gray-bg ps-2 pe-2 bold">X2</p>
                        <p className="float-end small-text mt-2">UGX 8,700</p>
                    </div>
                </div>
                <div className="box p-2 mb-2">
                    <div className="img-box clear-padding col-md-2">
                        <img src={Img} alt=""/>
                    </div>
                    <div className="product-info ms-3 col-md-10">
                        <h6 className="category mt-2">Kid's 2pk Cloth Face Masks</h6>
                        <p style={{marginBottom:"0"}} className="text-muted small-text">Size: <span className="bold me-3">Medium</span>  Color: <span className="badge badge-round bg-dark black">1</span></p>
                        <p className="float-start small-text mt-2 gray-bg ps-2 pe-2 bold">X1</p>
                        <p className="float-end small-text mt-2">UGX 8,700</p>
                    </div>
                </div>
            </div>
            <div className="nav-border"></div>
            <div className="container mt-4">
                <div className="total-panel flex">
                    <p className="bold">Subtotal</p>
                    <p className="text-muted">UGX 12,700</p>
                </div>
                <div className="total-panel flex">
                    <p className="bold">Delivery</p>
                    <p className="green bold">Free</p>
                </div>
                <div className="dotted mb-2"></div>
                <div className="total-panel mt-3 flex">
                    <p className="bold">Subtotal</p>
                    <p className="bold">UGX 12,700</p>
                </div>
                <p className="small-text text-muted fst-italic">Inclusive of all taxes</p>
                <div className="dotted mb-2"></div>
                <p className="bold green small-text">You are about to save UGX 27,400 on this order</p>
            </div>
            <p className="text-muted mt-5">YOUR DELIVERY DETAILS</p>
            <div>
                <p className="bold mb-0 small-text">Shrey Karah</p>
                <p className="small-text">Cash on delivery</p>
                <p className="bold mb-0 small-text">+256 76 633 4574</p>
                <p className="small-text">Quench village, Plot 12 Nkrumah Rd Kampala, Uganda</p>
            </div>
        </div>
    </div>
    );
}

export default Invoice;