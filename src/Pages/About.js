import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import nft1 from "../images/01.png";
import Navbar from "../components/Navbar"


export default function About() {
  return (
    <>
    <Navbar />
      <section>
        <div className="container">
          <Row className="color">
            <Col xs="12" md="12" lg="6">
              <Row>
                <img className="img-fluid" src={nft1} alt="1NFT" />
              </Row>
            </Col>
            <Col className="px-5" xs="12" md="12" lg="6">
              <Row className="pt-md-4 pt-sm-4 pt-xs-5 " >
                <p className="green">THE STORY</p>
                <h1>ABOUT US</h1>
                <p className="text">
                  Contrary to popular belieif Lorem Ipsum is not simply random
                  text It has roots in in a piece of classical ratin literature
                  from 45 BCS makinig it over 2000 years old Richard McClintock,
                  a lratin professor at Hampden-Sydney College in Virginia ain
                  looked up one of the more obscure Latin words, consectetur
                  citeis of the word in awesome item classical literature.
                </p>
              </Row>
              <Row className="pt-4">
                <p className="yellow">EASY STEPS</p>
                <h4 className="h4size">HOW TO MINT</h4>
                <p className="text">
                  Richard mclintock an Latin professor and hampden-sydney
                  college in virginia and looked up one of the more obscure
                  words consectetur cites of the word in
                </p>
                <Row>
                  <Col>
                    <Row className="p-4 px-0 ">
                      <h6 className="h6steps pt-1 h6size"> <span className="yellow">1.</span> Connect Your Wallet</h6>
                    </Row>
                    <Row className="p-4 px-0" >
                    <h6 className="h6steps pt-1 h6size"> <span className="yellow">2.</span> Select Your Quantity</h6>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="p-4 px-0">
                    <h6 className="h6steps pt-1 h6size"> <span className="green">3.</span> Confirm The Transaction</h6>
                    </Row>
                    <Row className="p-4 px-0 paddingleft">
                    <h6 className="h6steps pt-1 h6size"> <span className="green">4.</span> Recieve Your NFTs</h6>
                    </Row>
                  </Col>
                  <Button className="btn yellow btn-clr marginbottom ">Mint Now</Button>
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
