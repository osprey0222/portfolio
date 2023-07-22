import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsInfo from "../../Assets/projects-info.json";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong> History
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {(Object.entries(ProjectsInfo) || []).map(([key, value]) => {
            console.log('value["png"]', value["png"])
            const img = require(`../../Assets/Projects/${value["png"]}`);
            console.log(img);
            return (
              <Col key={key} md={4} className="project-card">
                <ProjectCard
                  imgPath={img}
                  isBlog={false}
                  title={value["title"]}
                  description={value["short-detail"]}
                  ghLink={value["ghLink"]}
                  demoLink={`/project-detail?projectKey=${key}`}
                />
              </Col>
            );
          })}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
