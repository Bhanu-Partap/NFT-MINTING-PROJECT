import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/NFTs.png";
import { FaWifi } from "react-icons/fa";
import Web3 from "web3";
import abijson from "../Abi.json"
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar"


export const Homepage = () => {

  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  
  
 
 const connectToMetamask = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        // const capitalizedAccounts = accounts.map((address) => address.toUpperCase());
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
    else {
			console.log('Need to install MetaMask');
		}
  };

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);

  
 const disconnectFromMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
        setWeb3(null);
        setAccounts([]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  
  
  const Minting = async () => {

    const ABI = abijson ;  

    const Address ="0x3661eca11A85e669B51717392d74F4509891c37b";
    window.web3 = await new Web3(window.ethereum);
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    console.log(accounts); 
    await window.contract.methods.mintNFT(accounts[0]).send({from: accounts[0],gas:"1000000"});
    toast.success('Toast notification message');


}

  return ( <>
    <Navbar web3={web3} accounts={accounts} />
    <section>
      <div className="container pt-md-4 pt-lg-4 pt-sm-0 mt-sm-0 mt-4 ">
        <Row xs="12" md="6" lg="6" className="pt-0">
          <Col className="mt-0 mt-sm-0 pt-sm-5 pt-0 " xs="12" md="12" lg="6">
            <div className="write">
              <h4 className="display-6">OUR MINT IS <span className="yellow">LIVE <FaWifi /></span>  </h4>
              <h1 className="   display-1"  >
                BORED <span className="green">APE</span>
              </h1>
              <h1 className="display-1">
                <span className="green">NFT </span> COLLECTION
              </h1>
              <p className="psize">8,888 Unique Undercover Creatures and Cars, Start Minting</p>
              <p className="psize">The 8th of MAY 2023</p>
              <Button className="btn btnsize btn-clr" onClick={Minting}>Mint Now <FaWifi /></Button>
            </div>
          </Col>
          <Col className="" xs="12" md="12" lg="6">
            <img className="img-fluid logo" src={logo} alt="Bored Ape" />
          </Col>
        </Row>
      </div>
    </section>
    </>
  );
}

export default {Homepage, connectToMetamask };