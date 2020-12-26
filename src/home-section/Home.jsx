import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import {HomeSection, MaxWidth, TextOne, TextTwo, TextThree, HomeSpan, HomeLink} from './home-style'

// import homeImag from '../image/image1.jpg'
// import PortfolioNavbar from '../navbar/PortfolioNavbar';

function Home() {

    return (
        <HomeSection>
            <div className="container px-4 ">
                <MaxWidth>
                    <TextOne>Hello, My name is </TextOne>
                    <TextTwo>Zaman</TextTwo>
                    <TextThree>And I'am a <HomeSpan>Youtuber</HomeSpan> </TextThree>
                    <HomeLink to = "/">Hire me</HomeLink>
                </MaxWidth>
            </div>
            {/* <MaxWidth className="container px-4">
                <Card inverse style = {{backgroundColor: "transparent"}}>
                    <TextOne>Hello, My name is</TextOne>
                    <TextTwo tag = 'h1'> Akhtaruzzaman </TextTwo>
                    <TextThree>And I'am a <HomeSpan>Youtuber</HomeSpan></TextThree>
                    <HomeLink to = "/">Hire me</HomeLink>
                </Card>
            </MaxWidth> */}
        </HomeSection>
        

        // Card System try

        // <div>
        //     <Card inverse>
        //         <CardImg width = "100%" src = {homeImag} alt = "Man"/>
        //         {/* <PortfolioNavbar/> */}
        //         <CardImgOverlay>
        //             <CardTitle tag = "h3">Card Title</CardTitle>
        //             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

        //         </CardImgOverlay>
        //     </Card>
        // </div>

    )
}

export default Home
