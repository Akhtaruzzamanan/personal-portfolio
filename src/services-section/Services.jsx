import React from 'react'
import styled from 'styled-components';
import ServiceCards from './cards/ServiceCards';

const ServicesSection = styled.section`
    font-family: 'Poppins', sans-serif;
    background-color: #000000;
`;

const TitleHeading = styled.h2`
    font-size: 40px;
    font-weight: 500;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;

    &::before {
        content: "";
        position: absolute;
        bottom: -12px;
        left: 50%;
        width: 220px;
        height: 3px;
        background-color: #ffffff;
        transform: translateX(-50%);
    }

    &::after {
        content: "what i provide";
        position: absolute;
        bottom: -25px;
        left: 50%;
        font-size: 20px;
        color: crimson;
        padding: 5px;
        background-color: #000000;
        transform: translateX(-50%);
    }
`;

function Services() {
    return (
        <ServicesSection className = "py-5">
            <div className="container px-4">
                <div className = "row mb-5">
                    <div className="col position-relative text-center">
                        <TitleHeading> My Services </TitleHeading>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 py-3">
                        <ServiceCards iconName = "fas fa-paint-brush" heading = "Web Design"/>
                    </div>
                    <div className="col-md-4 py-3">
                        <ServiceCards iconName = "fas fa-chart-line" heading = "Advertising"/>
                    </div>
                    <div className="col-md-4 py-3">
                        <ServiceCards iconName = "fas fa-code" heading = "App Design"/>
                    </div>
                </div>
            </div>
        </ServicesSection>
    )
}

export default Services
