import { FaTruck, FaSearchLocation } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="row m-0">
      <nav className="navbar justify-content-around p-3">
        <div>
          <a href="tel:(+98) 0234 456 789" className="navbar-brand  ">
            Need help? Call us: (+98) 0234 456 789
          </a>
        </div>
        <div>
          <a href="#" className="navbar-brand mx-2">
            <FaSearchLocation />
            &nbsp; Our store
          </a>
          <a href="#" className="navbar-brand mx-2 ">
            <FaTruck />
            &nbsp; Track your order
          </a>
        </div>
      </nav>

      <nav
        className="  d-flex p-3 justify-content-around "
        style={{ backgroundColor: "#003F62" }}
      >
        <div className="d-flex gap-5  justify-content-center    ">
          <Link className="navbar-brand" to={"/home"}>
            <img src={"svg/logo.svg"} alt="" />
          </Link>

          <form className="d-flex right-100 position-relative" role="search">
            <input
              className="form-control"
              style={{ minWidth: "50vh" }}
              type="search"
              placeholder="Search"
            />
            <button
              className="btn  position-absolute end-0 top-0 bottom-0 "
              style={{ backgroundColor: "#EDA415" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="d-flex gap-3   align-items-center  justify-content-center  ">
          <Link to={"/login"} className="navbar-brand text-white link-warning">
            <AiOutlineUser style={{ color: "#FFF" }} />
            &nbsp; Sign in
          </Link>
          <a className="navbar-brand text-white " href="#">
            <AiOutlineHeart style={{ color: "#FFF" }} />
            &nbsp;0
          </a>
          <a className="navbar-brand text-white " href="#">
            <AiOutlineShoppingCart style={{ color: "#FFF" }} />
            &nbsp;0
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg  justify-content-evenly p-0   ">
        <div>
          <a
            className="nav-link dropdown-toggle h-100% text-white "
            style={{ backgroundColor: "#EDA415", padding: "15px" }}
            href="#"
          >
            Browse categories
          </a>
        </div>
        <div className="d-flex ">
          <ul className="navbar-nav gap-4 ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Catalog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link " href="#">
                About us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span style={{ color: "#003F62" }}>30 Days Free Return</span>
        </div>
      </nav>
    </div>
  );
}
