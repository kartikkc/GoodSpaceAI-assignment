import React, { useEffect, useRef } from "react";
import "./scss/logos.scss";
import { companyLogos } from "../constants";

const Logos = () => {
    const LogosRef = useRef(null);

    useEffect(() => {
        const Logos = LogosRef.current;
        const handleScroll = () => {
            if (Logos.scrollLeft >= Logos.scrollWidth / 2) {
                Logos.scrollLeft = 0;
            } else {
                Logos.scrollLeft += 1;
            }
        };
        const interval = setInterval(handleScroll, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='carousel-container'>
                <h1 className='carousel-title'>USED BY OVER 50 ENTERPRISES</h1>
                <div className="carousel-image">
                    <div className="carousel" ref={LogosRef}>
                        {companyLogos.map((src, index) => (
                            <img key={index} src={src} alt="Carousel" className="carousel-img" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logos;
