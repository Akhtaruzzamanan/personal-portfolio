import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Progress } from 'reactstrap';

const SkillSection = styled.section`
    font-family: 'Poppins', sans-serif;
`;

const TitleHeading = styled.h2`
    font-size: 40px;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;

    &::before {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        width: 180px;
        height: 3px;
        background-color: #111111;
        transform: translateX(-50%);
    }

    &::after {
        content: "what i know";
        position: absolute;
        bottom: -28px;
        left: 50%;
        font-size: 20px;
        color: crimson;
        padding: 5px;
        background-color: #ffffff;
        transform: translateX(-50%);
    }
`;

const SkillHeading = styled.h6`
    font-weight: bold;
    font-size: 20px;
`;

const Para = styled.p`
    text-align: justify;
`;

const SkillLink = styled(Link)`
    display: inline-block;
    background-color: crimson;
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
    padding: 10px 30px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;

    &:hover {
        color: crimson;
        background: none;
        text-decoration: none;
    }
`;

const ProgressBar = styled(Progress)`
    background-color: #b2bec3;
    height: 10px;
    font-size: 10px
`;

export {SkillSection, TitleHeading, SkillHeading, Para, SkillLink, ProgressBar}