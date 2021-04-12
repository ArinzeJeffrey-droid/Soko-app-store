import React from 'react'

const Address = () => {
    return (
    <div className="container mt-3 mb-3 vh">
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card h-100 cursor">
                    <div className="card-body">
                        <p className="card-title">Shrey Karah</p>
                        <p className="card-text small-text text-muted">Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</p>
                        <p className="card-text small-text bold">+256 76 633 4574</p>
                        <div className="flex">
                            <p className="bold">Edit</p>
                            <p className="bold ship">Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div data-bs-toggle="modal" data-bs-target="#addressModal" className="card h-100 cc cursor">
                    <div className="card-body flex">
                        <p className="small-text bold blue m-auto">&#43;  Add New Address</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Address;