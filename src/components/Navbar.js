import Web3 from "web3";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";


function OffcanvasExample() {


  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const disconnectFromMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        setWeb3(null);
        setAccounts([]);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
      {accounts.length > 0 && <p>Accounts: {accounts.join(', ')}</p>}
      {web3 ? (
        <Button className="btnsize btn-clrg me-4" onClick={disconnectFromMetamask}>Logout <FaWallet /></Button>
      ) : (
        <Button className="btnsize btn-clrg me-4" onClick={connectToMetamask}>Connect <FaWallet /></Button>
      )}
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasExample;
