import React from 'react';
import styled from 'styled-components';


const CustomCard = styled.div`
    // width: 300px;
    // height: 220px;
    background-color: #181a1b;
    color: #ffffff;
    padding: 10px 0;
    text-align: center;


    &:hover {
        background-color: crimson;
        color: #ffffff;
        transition: all 0.3s ease;

        img{
            border: 5px solid #ffffff;
            transition: all 0.3s ease;
        }
    }

`;

const Img = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 5px solid crimson;
    margin-bottom: 5px;
`;

const Para = styled.p`
    margin: 0 5px;
`;

const TeamHeading = styled.h3`
    margin-Bottom: 5px;
    color: #ffffff;
`;

export {CustomCard, Img, Para, TeamHeading}