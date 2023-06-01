import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/NFTs.png";
import { FaWifi } from "react-icons/fa";
import Web3 from "web3";
import abijson from "../Abi.json"
import { toast } from 'react-toastify';


const Homepage = ({web3, accounts}) => {
  
  
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

  return (
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
  );
}

export default Homepage;