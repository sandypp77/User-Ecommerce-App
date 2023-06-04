import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
            <div className="text-white d-flex justify-content-center gap-2">
              <Link
                to="/wishlist"
                className="d-flex align-items-center gap-10 text-white"
              >
                <p className="mb-0">Wishlist</p>
              </Link>
              |
              <Link to="/login" className=" text-white">
                <p className="mb-0">Log in</p>
              </Link>
              |
              <Link to="/signup" className="text-white">
                <p className="mb-0">Sign up</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-fluid">
          <div className="row align-items-center gap-2 container-second d-flex justify-content-center">
            <div className="shop-name">
              <h2>
                <Link className="text-white">Click Style</Link>
              </h2>
            </div>
            <div className="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            {/* <div className="shop-categories">
              <header className="header-bottom py-1 rounded-2">
                <div className="rounded-2">
                  <div className="row">
                    <div className="shop-categories">
                      <div className="menu-bottom d-flex align-items-center gap-1">
                        <div>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-1 d-flex align-items-center"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={menu} alt="" />
                              <span className="d-inline-block">
                                Shop Categories
                              </span>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <Link
                                  className="dropdown-item text-white"
                                  to=""
                                >
                                  Action
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-white"
                                  to=""
                                >
                                  Another action
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-white"
                                  to=""
                                >
                                  Something else here
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div> */}
            <div className="container-info d-flex flex-direction-row text-white justify-content-center align-items-center gap-2 ">
              <div>
                <p className="mb-0 name">Welcome, Sandy</p>
              </div>
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
