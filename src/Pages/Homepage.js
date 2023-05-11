import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/NFTs.png";


export default function Homepage() {
  return (
    <section>
      <div className="container pt-md-4 pt-lg-4 pt-sm-0 mt-sm-0 mt-4 ">
        <Row xs="12" md="6" lg="6" className="pt-0">
          <Col className="mt-5 pt-5 " xs="12" md="12" lg="6">
            <div className="write">
              <h4 className="h4size">OUR MINT IS <span className="yellow">LIVE</span> </h4>
              <h1 className=" fs-md-4  h1size"  >
                BORED <span className="green">APE</span>
              </h1>
              <h1 className="h1size fs-md-4">
                <span className="green ">NFT </span> COLLECTION
              </h1>
              <p className="psize">8,888 Unique Undercover Creatures and Cars, Start Minting</p>
              <p className="psize">The 8th of MAY 2023</p>
              <Button className="btn btn-clr">Mint Now</Button>
            </div>
          </Col>
          <Col xs="12" md="12" lg="6">
            <img className="img-fluid logo" src={logo} alt="Bored Ape" />
          </Col>
        </Row>
      </div>
    </section>
  );
}
