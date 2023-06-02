import React from "react";
import { Row } from "react-bootstrap";
import nft1 from "../images/ape3";
import nft2 from "../images/ape4";
import nft3 from "../images/ape2";
import nft4 from "../images/ape1";
import nft5 from "../images/fdssd.jpg";
import nft6 from "../images/fdsssd.jpg";
import nft7 from "../images/nft-collectiomn.jpg";
import nft8 from "../images/02.jpg";
import Navbar from "../components/Navbar"

export default function Collection() {
  return (
    <>
    <Navbar />
      <section>
        <div className="container">
          <Row className="color">
            <Row className="pt-3 " xs="12" md="4" lg="4">
            <img className="img-fluid marginbottom" src={nft5} alt="nf1" />
            <img className="img-fluid marginbottom" src={nft6} alt="nf1" />
            <img className="img-fluid marginbottom" src={nft7} alt="nf1" />
            <img className="img-fluid marginbottom" src={nft8} alt="nf1" />
              
            </Row>
            <Row className="pt-4  pb-4" xs="12" md="4" lg="4">
              <img className="img-fluid marginbottom" src={nft1} alt="nf1" />
              <img className="img-fluid marginbottom" src={nft2} alt="nf1" />
              <img className="img-fluid marginbottom" src={nft3} alt="nf1" />
              <img className="img-fluid marginbottom" src={nft4} alt="nf1" />
            </Row>
          </Row>
        </div>
      </section>
    </>
  );
}
