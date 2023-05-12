import Web3 from "web3";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { detectEthereumProvider } from '@metamask/detect-provider';

function OffcanvasExample() {
  // const [account, setAccount] = useState('');

  // const connectToMetamask = () => {
  //   detectEthereumProvider().then(provider => {
  //     if (provider) {
  //       provider.request({ method: 'eth_requestAccounts' })
  //         .then(accounts => {
  //           const selectedAccount = accounts[0];
  //           setAccount(selectedAccount);
  //           const web3 = new Web3(provider);
  //           // Use 'web3' to interact with the Ethereum network
  //         })
  //         .catch(error => {
  //           // Handle error or user denial
  //         });
  //     } else {
  //       // Metamask not installed
  //     }
  //   });
  // };

  // const [data, setdata] = useState({
  //   address: "", // Stores address
  //   Balance: null, // Stores balance
  // });

  // const handleSubmit = () => {
  //   if (window.ethereum) {
  //     // Do something
  //   } else {
  //     alert("install metamask extension!!");
  //   }

  //   window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
  //     // Return the address of the wallet
  //     console.log(res);
  //   });

  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"],
  //     })
  //     .then((balance) => {
  //       // Return string value to convert it into int balance
  //       console.log(balance);

  //       // Yarn add ethers for using ethers utils or
  //       // npm install ethers
  //       console.log(ethers.utils.formatEther(balance));
  //       // Format the string into main latest balance
  //     });
  // };

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
            <Button
              onClick={connectToMetamask}
              className="btnsize btn-clrg me-4"
            >
              Connect <FaWallet />
            </Button>
            <p>Connected Account: {accounts}</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasExample;
