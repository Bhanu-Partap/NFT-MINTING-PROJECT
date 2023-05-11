import React from "react";
import { Row } from "react-bootstrap";
import nft1 from "../images/nft-collection1.png";
import nft2 from "../images/nft-collection2.png";
import nft3 from "../images/nft-collection3.png";
import nft4 from "../images/nft-collection4.png";
import nft5 from "../images/fdssd.jpg";
import nft6 from "../images/fdsssd.jpg";
import nft7 from "../images/nft-collectiomn.jpg";
import nft8 from "../images/02.jpg";

export default function Collection() {
  return (
    <>
      <section>
        <div className="container">
          <Row className="color">
            <Row xs="12" md="6" lg="6">
            <img className="img-fluid" src={nft5} alt="nf1" />
            <img className="img-fluid" src={nft6} alt="nf1" />
            <img className="img-fluid" src={nft7} alt="nf1" />
            <img className="img-fluid" src={nft8} alt="nf1" />
              
            </Row>
            <Row xs="12" md="6" lg="6">
            <img className="img-fluid" src={nft1} alt="nf1" />
              <img className="img-fluid" src={nft2} alt="nf1" />
              <img className="img-fluid" src={nft3} alt="nf1" />
              <img className="img-fluid" src={nft4} alt="nf1" />
            </Row>
          </Row>
        </div>
      </section>
    </>
  );
}
