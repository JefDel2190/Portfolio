import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAntdesign,
  SiBootstrap,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiMongodb,
  SiMaterialdesign,
  SiMaterialui,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTailwindcss,
  SiSass,
  SiNpm,
  SiMapbox,
  // SiNodemon,
  // SiLess,
  // SiJest,
  // SiGit,
  // SiGithub,
} from "react-icons/si";

import{
  // DiResponsive,
} from "react-icons/di"; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
