// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <Link class="navbar-brand"  to="#">
           <span className="yellow">NFT</span>  <span className="green"> MINT</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse item-list navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0" >
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/collection" >
                  Collection
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasExample;
