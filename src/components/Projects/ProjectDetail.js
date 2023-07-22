import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Image, Col } from "react-bootstrap";
import ProjectsInfo from "../../Assets/projects-info.json";

function ProjectDetail(props) {
    const [searchParams] = useSearchParams();
    const projectkey = searchParams.get('projectKey');
    return (
        <Container fluid className="project-section" style={{ flexGrow: 1 }}>
            <Container>
                <Row style={{ justifyContent: "center" }}>
                    <Col md={8} >
                        <Image style={{ width: "100%" }}
                            src={require(`../../Assets/Projects/${ProjectsInfo[projectkey]["gif"]}`)}
                        >
                        </Image>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "30px", color: "white" }}>
                    <Col md={8}  >
                        {
                            ProjectsInfo[projectkey]["long-detail"]
                        }

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default ProjectDetail