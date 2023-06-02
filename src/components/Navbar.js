import { Button } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import Homepage from "../Pages/Homepage"


const OffcanvasExample =({web3, accounts}) => {

  function handleclick() {
    Homepage().connectToMetamask();
    
  }
  function handleclick1() {
    Homepage().disconnectFromMetamask();
    
  }


  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            <span className="yellow">NFT</span>{" "}
            <span className="green"> MINT</span>
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
            <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/collection">
                  Collection
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {accounts.length > 0 && (
              <p className="px-3">
                Account:{" "}
                {accounts[0].slice(0, 4) + "..." + accounts[0].slice(38, 42)}
              </p>
            )}
            {web3 ? (
              <Button
                className="btnsize btn-clrg me-4"
                onClick={handleclick1}
              >
                Logout <FaWallet />
              </Button>
            ) : (
              <Button
                className="btnsize btn-clrg me-4"
                onClick={handleclick}
              >
                Connect <FaWallet />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasExample;
