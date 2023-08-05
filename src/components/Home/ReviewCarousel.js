import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        image: require('../../Assets/Fakes/1.png'),
        content: "Asher Ito is a gifted developer blessed with a wide range of skill sets making him an excellent Tech Director. Asher can deliver meticulous code, delegate additional development duties to a team while keeping an overall project on track. Asher also has excellent client facing skills giving clients a great level of confidence. He is a gentleman and a true pleasure to work with.",
        author: "Mason Johnson"

    },
    {
        id: 2,
        image: require('../../Assets/Fakes/2.png'),
        content: "Asher played a critical role in helping BrandHealth develop and launch apps to our healthcare clients. While working with him, he demonstrated that he had the skills, knowledge, passion and patience for technology that would make him an asset on any digital project. Asher shows great leadership and decision-making qualities. His ability to get work done, on time and on budget is one of his greatest talents. Because, at the end of the day, you want to work with smart people who you trust and know will get the job done properly. Asher is on the top of my Go-To list and I look forward to working with him again in the future!",
        author: "Raiden Edwards"
    },
    {
        id: 3,
        image: require('../../Assets/Fakes/3.png'),
        content: "I have the pleasure of meeting Asher in 2010. I was introduced to him as someone who was being considered for a Sr. Software Architect position with a client. I didn't truly understand Glen's brilliance until the the next day. I was able to sit with him one-on-one and get to see the mastermind that was at work. Asher in an anomaly. Asher is a person who can significantly impact a team that has the right vision and leadership. I would highly recommend to anyone who has projects or products that require a high level thinker",
        author: "Edwin Smith"
    }
]

function ReviewCarousel() {
    return (
        <div className="my-5 project-section">
            {/* <h1 className="reviews-h1">Reviews</h1> */}
            <Carousel style={{ color: "white" }} indicators={false}>
                {reviews.map(review => (
                    <Carousel.Item key={review.id}>
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src={review.image}
                            alt={review.author}
                            style={{ width: "150px" }}
                        />
                        {/* <Carousel.Caption>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </Carousel.Caption> */}

                        <Row className="d-flex justify-content-center">
                            <Col lg="8">
                                <h5 className="mb-3">{review.author}</h5>
                                <p>
                                    <FaQuoteLeft style={{ paddingLeft: "5px", marginBottom: "10px", marginRight: "10px" }} />
                                    {review.content}
                                </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ReviewCarousel;