import { Link } from 'react-router-dom';
// import { CardText } from 'reactstrap';
import styled from 'styled-components';
import homeImg from '../image/image1.jpg'

const HomeSection = styled.section`
    display: flex;
    background: url(${homeImg}) no-repeat center;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
`;

const MaxWidth = styled.div`
    margin-top: 200px;
`;

const TextOne = styled.h2`
    font-size: 27px;
    font-weight: 400;
    margin: 0;
`;

const TextTwo = styled.div`
    font-size: 70px;
    font-weight: 600;
    margin: 0 2px;
`;

const TextThree = styled.div`
    font-size: 40px;
    // margin: 5px 0;
    margin: 0;
`;

const HomeSpan = styled.span`
    color: crimson;
    font-weight: 500;
`;

const HomeLink = styled(Link) `
    display: inline-block;
    background-color: crimson;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 32px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;

    &:hover { color: crimson; background: none; text-decoration: none; }
`;

export {HomeSection, MaxWidth, TextOne, TextTwo, TextThree, HomeSpan, HomeLink}