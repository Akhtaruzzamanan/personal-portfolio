import React from 'react'
import {CustomCard, Img, Para, TeamHeading} from './team-card-style'

function TeamsCard(props) {
    return (
        <CustomCard className="card text-center">
            <div className="div">
                <Img src={props.imgSrc} alt=""/>
            </div>
            

            <TeamHeading>{props.teamMemberName}</TeamHeading>

            <Para>{props.memberWork}</Para>
        </CustomCard>
    )
}

export default TeamsCard
