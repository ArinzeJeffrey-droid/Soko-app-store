import React from 'react'


const AddressModal = () => {
    return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="">
                        <div className="form-group">
                            <label for="" className="small-text">Name</label>
                            <input type="text" placeholder="e.g John Doe" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="small-text">Mobile Number</label>
                            <input type="text" placeholder="Enter mobile number" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="small-text">City</label>
                            <input type="text" placeholder="e.g Kampala" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-group">
                            <label for="" className="small-text">Address</label>
                            <textarea name="" placeholder="e.g Kampala apartments, Plot 00 Johnson Rd, Room 24B" id="" cols="30" rows="10" className="form-control form-control-sm"></textarea>
                        </div>
                        <div className="form-group mt-2">
                            <button style="color: #fff;" className="btn gray-bg">Add Address</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddressModal;