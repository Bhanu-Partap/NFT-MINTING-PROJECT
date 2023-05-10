import React from "react";
import { Col, Row } from "react-bootstrap";
import nft1 from "../images/01.png";

export default function About() {
  return (
    <>
      <section>
        <div className="container">
          <Row className="color">
            <Col>
              <Row>
                <img className="img-fluid" src={nft1} alt="1NFT" />
              </Row>
            </Col>
            <Col className="px-5">
              <Row>
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
                    <Row>
                      <h6 className="h6steps"> <span className="yellow">1.</span> Connect Your Wallet</h6>
                    </Row>
                    <Row >
                    <h6 className="h6steps"> <span className="yellow">2.</span> Select Your Quantity</h6>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                    <h6 className="h6steps"> <span className="green">3.</span> Confirm The Transaction</h6>
                    </Row>
                    <Row>
                    <h6 className="h6steps"> <span className="green">4.</span> Recieve Your NFTs</h6>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
