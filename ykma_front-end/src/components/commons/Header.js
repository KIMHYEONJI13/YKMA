import { Link, NavLink } from "react-router-dom";

function Header() {

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/main" className="logo d-flex align-items-center">
                    <img style={{ width: '180px', height: '150px' }} src="/img/YKMA_logo.png" alt="Logo" />
                </Link>
            </div>

            <NavLink className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-2">
                        <a className="nav-link nav-profile d-flex align-items-center pe-6" href="#" data-bs-toggle="dropdown">

                            {/* <img src={`/img/${token?.imgUrl}`} width="45" height="45" alt="Profile" className="rounded-circle" /> */}

                            {/* <span className="d-none d-md-block dropdown-toggle ps-2" style={{ color: "#000" }}>{token?.memberName} {token?.positionName}</span> */}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            {/* <li className="dropdown-header">
                                <h6>{token?.memberName}</h6>
                                <span>{token?.depName}</span>
                            </li> */}
                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="mypage">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex align-items-center" onClick={onClickLogoutHandler}>
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </header>
    );
}

export default Header;