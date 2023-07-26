import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
        image: require('../../Assets/Sliders/slider1.png'),
        caption: "3D Survival Game",
        description: ""
    },
    {
        image: require('../../Assets/Sliders/slider2.png'),
        caption: "2D Runner Game",
        description: ""
    },
    {
        image: require('../../Assets/Sliders/slider3.png'),
        caption: "MERN Stack Developer",
        description: ""
    }
]

function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade style={{ paddingTop: "100px" }}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item >
                        <Image
                            className="d-block  w-100"
                            src={slide.image}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default HomeCarousel;