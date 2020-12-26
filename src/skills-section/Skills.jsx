import React from 'react';
import {SkillSection, TitleHeading, SkillHeading, Para, SkillLink, ProgressBar} from './skills-style'




function Skills(props) {
    return (
        <SkillSection className = "py-5">
            <div className="container px-4">
                <div className = "row mb-5">
                    <div className="col position-relative text-center">
                        <TitleHeading> My Skills </TitleHeading>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6">
                        <SkillHeading>My creative skills & experiences.</SkillHeading>
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</Para>

                        <SkillLink to = "/" className = "mb-4 mb-md-0">Read more...</SkillLink>
                    </div>
                    <div className="col-md-6">
                        <div className="text-left font-weight-bold mb-1">HTML</div>
                        <ProgressBar value = "90" className = "font-weight-bold" style = {{backgroundColor: "crimson", height: "10px" }}> 90% </ProgressBar>

                        <div className="text-left font-weight-bold mt-2 mb-1">CSS</div>
                        <ProgressBar value = "80" className = "font-weight-bold" style = {{backgroundColor: "crimson", height: "10px" }}> 80% </ProgressBar>

                        <div className="text-left font-weight-bold mt-2 mb-1">JavaScript</div>
                        <ProgressBar value = "60" className = "font-weight-bold" style = {{backgroundColor: "crimson", height: "10px" }}> 60% </ProgressBar>

                        <div className="text-left font-weight-bold mt-2 mb-1">MySQL</div>
                        <ProgressBar value = "70" className = "font-weight-bold" style = {{backgroundColor: "crimson", height: "10px" }}> 70% </ProgressBar>

                        <div className="text-left font-weight-bold mt-2 mb-1">PHP</div>
                        <ProgressBar value = "40" className = "font-weight-bold" style = {{backgroundColor: "crimson", height: "10px" }}> 40% </ProgressBar>
                    </div>
                </div>
            </div>
        </SkillSection>
    )
}

export default Skills
