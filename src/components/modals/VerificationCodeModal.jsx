import React from 'react'

const VerficationCodeModal = () => {
    return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Verify your number</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className="text-muted text-center">Please enter verification code sent via SMS to <br/> +256 76 633 4574</p>
                    <div className="row justify-content-md-center digit-container">
                        <div className="col-sm-2 col-md-2">
                            <input placeholder="0" className="digit text-center w-100 digit-input" type="text"/>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <input placeholder="0" className="digit text-center w-100 digit-input" type="text"/>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <input placeholder="0" className="digit text-center w-100 digit-input" type="text"/>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <input placeholder="0" className="digit text-center w-100 digit-input" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer flex">
                    <p className="small-text text-muted m-auto">Resend code in 03</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default VerficationCodeModal;