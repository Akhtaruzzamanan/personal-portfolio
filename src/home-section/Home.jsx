import React from 'react'
import {HomeSection, MaxWidth, TextOne, TextTwo, TextThree, HomeSpan} from './home-style'

function Home() {

    return (
        <HomeSection>
            <MaxWidth className="max-width">
                {/* <div className="home-content"> */}
                    <TextOne>Hello, My name is </TextOne>
                    <TextTwo>Akhtaruzzamn</TextTwo>
                    <TextThree>And I'am a <HomeSpan>Youtuber</HomeSpan> </TextThree>
                {/* </div> */}
            </MaxWidth>
        </HomeSection>
        
    )
}

export default Home
