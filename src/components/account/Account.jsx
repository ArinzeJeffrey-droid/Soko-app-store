import React from 'react'


const Account = () => {
    return (
    <div className="container mt-3">
        <div className="flex">
            <h5 className="bold">Showing all orders</h5>
            <button className="btn filter-btn ps-4 pe-4"><i className="fas fa-filter"></i> Filter</button>
        </div>
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title mb-0">
                            <p className="bold d-inline-block big-text"><span className="fas fa-bullseye bullseye-sm"></span> Target</p>
                        </div>
                        <div className="card-text">
                            <div className="flex">
                                <div>
                                    <p className="bold mb-0 small-text">Order #1233341</p>
                                    <p className="small-text text-muted">3 items</p>
                                </div>
                                <div>
                                    <p className="small-text mb-0 bold">UGX 12,700</p>
                                    <p className="small-text text-muted">25/02/2021, 01:55PM</p>
                                </div>
                            </div>
                            <p className="bold small-text ship">Shipped</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title mb-0">
                            <p className="bold d-inline-block big-text"><span className="fas fa-store"></span> Abhi's Juke Store</p>
                        </div>
                        <div className="card-text">
                            <div className="flex">
                                <div>
                                    <p className="bold mb-0 small-text">Order #1233341</p>
                                    <p className="small-text text-muted">3 items</p>
                                </div>
                                <div>
                                    <p className="small-text mb-0 bold">UGX 12,700</p>
                                    <p className="small-text text-muted">25/02/2021, 01:55PM</p>
                                </div>
                            </div>
                            <p className="bold small-text delivered">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Account;