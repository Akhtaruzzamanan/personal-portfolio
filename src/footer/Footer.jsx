import React from 'react'
import styled from 'styled-components';

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

function Footer() {
    return (
        <FooterSection>
            <div className="container px-4">
                <Para>Design & Develop by <Span>Akhtaruzzaman</Span></Para>
            </div>
        </FooterSection>
    )
}

export default Footer
