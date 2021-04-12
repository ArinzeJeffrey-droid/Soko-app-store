import React from 'react'
import { Link } from 'react-router-dom';
import { homeSideNavLinks } from "./homeSideNavLinks"


const HomeSideNav = () => {
    return (
    <div className="col-lg-3 side-links border-right clear-padding">
        <ul className="ms-5 mt-3 sidebar-links">
            { homeSideNavLinks.map((link, index) => (
                <li className="p-2" key={index}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
            <li className="view p-2 mt-3">
                <Link to="#">
                    View All Categories <span className="fas fa-arrow-right"></span>
                </Link>
            </li>
        </ul>
    </div>
    );
}

export default HomeSideNav;