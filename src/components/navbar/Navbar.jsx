import React from 'react'
import { Link } from 'react-router-dom';
import CONSTANTS from "../../routes/common.json"


const Navbar = () => {
    return (
    <React.Fragment>
        <div className="top-header">
            <div style={{padding: 0}} className="container">
                <p className="ps-5 pt-2">
                    Store made with <span className="brand-name">s <i className="fas fa-shopping-bag"></i> k o</span>
                </p>
            </div>
        </div>
        <div style={{padding: '0'}} className="container">
            <nav className="nav p-3">
                <div className="shop-header">
                    <div className="nav-details">
                        <div className="store-logo mb-3 me-3">
                            <i className="fas fa-store"></i>
                        </div>
                        <div className="store-info">
                            <Link to={CONSTANTS.ROUTES.HOME} className="h-link category">Target</Link>
                            <p className="text-muted">cham Towers, Plot 12 Nkruma Rd, kampala, Ug</p>
                        </div>
                    </div>
                </div>
                <ul className="nav-links">
                    <li className="me-5">
                        <Link className="p-2" to={CONSTANTS.ROUTES.BAG}>
                            <span className="fas fa-shopping-bag"></span> &nbsp;Bag <span className="badge bg-danger badge-round">2</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="p-2" to={CONSTANTS.ROUTES.ACCOUNT}>
                            <span className="fas fa-user"></span> &nbsp;Account
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="nav-border"></div>
    </React.Fragment>
        
    );
}

export default Navbar;