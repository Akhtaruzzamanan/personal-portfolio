import React from 'react';
import styled from 'styled-components';


const TeamsSection = styled.section`
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
        width: 200px;
        height: 3px;
        background-color: #ffffff;
        transform: translateX(-50%);
    }

    &::after {
        content: "who with me";
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

export {TeamsSection, TitleHeading}