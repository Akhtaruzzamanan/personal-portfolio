import React from 'react'
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

const FooterSection = styled.section`
    text-align: center;
    background-color: #000000;
    padding: 15px 0;
`;

const Para = styled.p`
    color: #ffffff;
    margin: 0;
    
`;

const Span = styled.span`
    color: crimson;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const BackTopBtn = styled(BackTop)`
    span{
        background: crimson;
        padding: 10px;
        border-radius: 30%;
        color: #ffffff;
        text-align: center;
        font-size: 1rem;
        transition: all .3s ease;

        &:hover {
            border: 3px solid crimson;
            color: crimson;
            background-color: transparent;
        }
    }
`;

function Footer() {
    return (
        <FooterSection>
            <div className="container px-4">
                <Para>Design & Develop by <Span>Akhtaruzzaman</Span></Para>
            
            <BackTopBtn>
                <span><i className="fas fa-arrow-up"></i></span>
            </BackTopBtn>
            </div>

        </FooterSection>
    )
}

export default Footer
