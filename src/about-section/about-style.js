import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const AboutSection = styled.section`
    font-family: 'Poppins', sans-serif;
`;

const TitleHeading = styled.h2`
    font-size: 40px;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;

    &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 180px;
        height: 3px;
        background-color: #111111;
        transform: translateX(-50%);
    }

    &::after {
        content: "who i am";
        position: absolute;
        bottom: -18px;
        left: 50%;
        font-size: 20px;
        color: crimson;
        padding: 5px;
        background-color: #ffffff;
        transform: translateX(-50%);
    }
`;

const AboutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const Img = styled.img`
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
`;



const Text = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin: 10px 0;
`;

const Span = styled.span`
    color: crimson;
`;

const Para = styled.p`
    text-align: justify;
`;

const AboutLink = styled(Link)`
    display: inline-block;
    background-color: crimson;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;

    &:hover {
        color: crimson;
        background: none;
        text-decoration: none;
    }
`;

export {AboutSection, TitleHeading, AboutContent, Img, Text, Span, Para, AboutLink}