import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ContactSection = styled.section`
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
        width: 200px;
        height: 3px;
        background-color: #111111;
        transform: translateX(-50%);
    }

    &::after {
        content: "get in touch";
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

const Para = styled.p`
    text-align: justify;
`;

const Icon = styled.i`
    margin: 10px 0;
    font-size: 25px;
    color: crimson;
`;

const InfoDiv = styled.div`
    margin: 0 0 0 20px;
`;

const Head = styled.h6`
    font-size: 15px;
    font-weight: 500px;
    margin-bottom: 5px;
`;

const SubTitle = styled.div`
    color: #333333;
`;

const ContactLink = styled(Link)`
    display: inline-block;
    background-color: crimson;
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;

    &:hover {
        color: crimson;
        background: none;
        text-decoration: none;
    }
`;

function Contact() {
    return (
        <ContactSection className = "py-5">
            <div className="container px-4">
                <div className = "row mb-5">
                    <div className="col position-relative text-center">
                        <TitleHeading>Contact me</TitleHeading>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h5 className = "font-weight-bold">Get in Touch</h5>
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore minima! Excepturi aspernatur nisi mollitia odio quas error praesentium facilis, adipisci dolor, rerum aperiam a.</Para>

                        <div className = "row p-3">
                            <Icon className="fas fa-user"></Icon>
                            <InfoDiv>
                                <Head>Name</Head>
                                <SubTitle>Akhtaruzzaman</SubTitle>
                            </InfoDiv>
                        </div>

                        <div className = "row p-3">
                            <Icon className="fas fa-map-marker-alt"></Icon>
                            <InfoDiv>
                                <Head>Address</Head>
                                <SubTitle>Sylhet, Bangladesh</SubTitle>
                            </InfoDiv>
                        </div>

                        <div className = "row p-3">
                            <Icon className="fas fa-envelope"></Icon>
                            <InfoDiv>
                                <Head>Email</Head>
                                <SubTitle>abc@gmail.com</SubTitle>
                            </InfoDiv>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h5 className="font-weight-bold">Message me</h5>
                        
                        <form action="">
                            <div className="form-group d-flex">
                                <div className="col-md-6 pl-0">
                                    <input type="text" className = "form-control" placeholder = "Name" />
                                </div>
                                <div className="col-md-6 pr-0">
                                    <input type="email" className = "form-control" placeholder = "Email" />
                                </div>
                                
                            </div>

                            <div className="form-group">
                                <div className="col-12 p-0">
                                    <input type="text" className = "form-control" placeholder = "Subject"/>
                                </div>
                                <textarea className = "form-control mt-3" id="" cols="30" rows="5" name = "" placeholder = "Describe Project..."></textarea>
                            </div>                                

                            <ContactLink to = "/" className = "mb-4 mb-md-0"> Send message </ContactLink>
                        </form>

                    </div>
                </div>
            </div>
        </ContactSection>
    )
}

export default Contact
