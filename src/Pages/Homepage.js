import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/NFTs.png";
import { FaWifi } from "react-icons/fa";
import Web3 from "web3";


export default function Homepage() {

  
const Minting = async () => {
  const ABI = [
      {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "approved",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "Approval",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
              }
          ],
          "name": "ApprovalForAll",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_fromTokenId",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_toTokenId",
                  "type": "uint256"
              }
          ],
          "name": "BatchMetadataUpdate",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_tokenId",
                  "type": "uint256"
              }
          ],
          "name": "MetadataUpdate",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
              }
          ],
          "name": "mintNFT",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
              }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
      },
      {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              },
              {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
              }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
              },
              {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
              }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "Transfer",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
              }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              }
          ],
          "name": "balanceOf",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "getApproved",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
              }
          ],
          "name": "isApprovedForAll",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "name",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "owner",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "ownerOf",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
              }
          ],
          "name": "supportsInterface",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "symbol",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              }
          ],
          "name": "tokenURI",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
  ]


  const Address = "0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, Address); 
  await window.contract.methods.mintNFT(acnt.accounts).send({from: accounts,gas:"1000000"});

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
