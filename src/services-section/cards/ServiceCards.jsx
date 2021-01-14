import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    text-align: center;
    background-color: #181a1b;
    transition: all 0.3s ease;
    color: white;

    &:hover {
        background-color: crimson;
        transition: all 0.3s ease;
        cursor: pointer;

        transform: scale(1.05);
        
        i{
            color: #ffffff;
            transition: all 0.3s ease;
        }
    }
`;

const ServiceIcon = styled.i`
    margin-bottom: 12px;
    color: crimson;

`;

const ServiceHeading = styled.h4`
    font-weight: 500;
    color: #ffffff;
`;

const ServicePara = styled.p`
    font-size: 15px;
`;

function ServiceCards(props) {
    return (
        <Card className="card py-3">
            {/* <i className= "fas fa-paint-brush fa-3x mb-4" style = {{color: "crimson"}}></i> */}
            <ServiceIcon className= {`${props.iconName} fa-3x`}></ServiceIcon>
            <ServiceHeading className = "mb-2"> {props.heading} </ServiceHeading>
            <ServicePara className = "m-0 ">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit. Nostrum similique iste nesciunt beatae sed voluptatum!</ServicePara>
        </Card>
    )
}

export default ServiceCards
