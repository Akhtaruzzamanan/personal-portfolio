import React from 'react';
import TeamsCard from './card/TeamsCard';
import {TeamsSection, TitleHeading} from './teams-style'

// All Team Member Image Heare
import teamImg1 from '../image/image2.jpg';
import teamImg2 from '../image/image4.jpg';
import teamImg3 from '../image/image7.jpg';
import teamImg4 from '../image/image8.jpg';
import teamImg5 from '../image/image9.jpg';
import teamImg6 from '../image/image10.jpg';
// Image End

function Teams() {
    return (
        <TeamsSection className = "py-5">
            <div className="container px-4">
                <div className = "row mb-5">
                    <div className="col position-relative text-center">
                        <TitleHeading> My Teams </TitleHeading>
                    </div>
                </div>

                <div className = "row">
                    
                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg1} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg2} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg3} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg4} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg5} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                    <div className="col-md-4 py-3">
                        <TeamsCard imgSrc = {teamImg6} teamMemberName = "Some One" memberWork = "I am a font end developer, with JavaScript and React.js" />
                    </div>

                </div>
            </div>
        </TeamsSection>
    )
}

export default Teams
