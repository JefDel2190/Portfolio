import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GifExpertApp from "../../Assets/Projects/GifExpertApp.png";
import HeroesApp from "../../Assets/Projects/HeroesApp.png";
// import BandnamesApp from "../../Assets/Projects/BandnamesApp.png";
// import Ticketapp from "../../Assets/Projects/Ticketapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Applications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={""}
              imgPath={GifExpertApp}
              isBlog={false}
              title="Gif Expert App"
              description="A small application made in React with Hooks to search and display animated gifs."
              ghLink="https://jefdel2190.github.io/react-gifexpertapp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={""}
              imgPath={HeroesApp}
              isBlog={false}
              title="Heroes App"
              description="An application made in React about Superheroes."
              ghLink="https://heroes-app-jeffry.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={""}
              imgPath={BandnamesApp}
              isBlog={false}
              title="Band Names App"
              description="This is an application made in React with Socket.io to vote for music bands."
              // ghLink="https://jefdel2190.github.io/react-gifexpertapp/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={""}
              imgPath={Ticketapp}
              isBlog={false}
              title="Ticket App"
              description="This is an application made in React with Socket.io and it is mainly based on how the ticket system works in banks."
              // ghLink="https://jefdel2190.github.io/react-gifexpertapp/"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
