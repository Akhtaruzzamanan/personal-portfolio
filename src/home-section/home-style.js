import styled from 'styled-components';
import homeImg from '../image/image1.jpg'

const HomeSection = styled.section`
    display: flex;
    background: url(${homeImg}) no-repeat center;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    color: #ffffff;
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
`;

const MaxWidth = styled.div`
    margin: auto 0;
`;

const TextOne = styled.div`
    font-size: 2rem;
`;

const TextTwo = styled.div`
    font-size: 4.5rem;
    font-weight: 600;
    margin-left: -3px;
`;

const TextThree = styled.div`
    font-size: 2.5rem;
    margin: 5px 0;
`;

const HomeSpan = styled.span`
    color: crimson;
    font-weight: 500;
`;

export {HomeSection, MaxWidth, TextOne, TextTwo, TextThree, HomeSpan}