import React from 'react';
import logo from '../../assets/images/logo.png';
import toggleIcon from '../../assets/images/toggler-icon.svg';

const Header = () => {
    return (
        <nav className="navbar  navbar-dark my-3">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Hard Rock Solution" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <img src={toggleIcon} alt="Toggle" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;