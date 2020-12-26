import React from 'react'
import aboutImg from '../image/image4.jpg'
import {AboutSection, TitleHeading, AboutContent, Img, Text, Span, Para, AboutLink} from './about-style'

function About() {
    return (
        <AboutSection className = "py-5">
            <div className="container px-4">
                <div className = "row mb-5">
                    <div className="col position-relative text-center">
                        <TitleHeading>About me</TitleHeading>
                    </div>
                </div>
                <AboutContent className = "row">
                    <div className = "col-md-4">
                        <Img src={aboutImg} alt="" className = "img-fluid"/>
                    </div>
                    <div className = "col-md-8 my-sm-4 my-md-0">
                        <Text>
                            I'm Akhtaruzzaman and I'm a <Span>Youtuber</Span>
                        </Text>
                        <Para>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic facilis alias a tenetur est nulla officiis velit ipsam officia quos error quia eius facere repudiandae nam, beatae nesciunt ab! Inventore vitae harum, voluptate voluptatibus magnam laboriosam assumenda iure a quia necessitatibus obcaecati facere, dolor omnis. Quos enim numquam inventore?
                        </Para>
                        <AboutLink to = "/">Download CV</AboutLink>
                    </div>
                </AboutContent>
            </div>
        </AboutSection>
        // <div className = "container">
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatibus quaerat quia nulla voluptatem quae! Consequatur nihil eligendi, amet velit voluptas, eaque repudiandae ipsa qui sint, ut delectus. Ipsum non necessitatibus corporis fugiat odit eligendi, eveniet vero, molestias consectetur aperiam fuga commodi ex accusantium deleniti aliquid nobis, cupiditate obcaecati. Assumenda alias expedita est! Voluptatibus quae ducimus sint odit officia hic laborum vero tempora veniam atque illum maiores dolores incidunt eligendi fuga dolorum, nostrum accusantium optio quo nesciunt expedita nobis aliquam. Vitae magnam explicabo modi cupiditate, esse officia, suscipit nemo obcaecati minus dignissimos maiores quam provident sint minima inventore veritatis est impedit tenetur eligendi ex? Dolorum corrupti esse dicta eum, saepe odit soluta totam nam incidunt natus earum perspiciatis tempora facere ratione mollitia sequi exercitationem. Laborum qui labore fuga quam cupiditate minima illo maiores at similique molestiae, inventore eum cum? Eligendi exercitationem quia consequuntur quasi veritatis fugiat corporis non voluptas ab illo, ducimus id, rerum dicta molestiae consequatur. Unde ab sint tempore repellat obcaecati modi harum, nobis voluptate fuga expedita, cumque, sequi praesentium? Perspiciatis, corporis illum dolorum nihil similique voluptates molestias eius nisi sed at reiciendis fugit consequatur magnam. Perferendis voluptas libero consequuntur, nemo quibusdam dicta blanditiis ratione sit deserunt ad nostrum sed assumenda eligendi autem quas, numquam tenetur. Dolores non rerum mollitia quasi quam sunt adipisci laboriosam, fuga vel iste veritatis repellat corrupti ipsa quo soluta id possimus labore tenetur at aliquam, ratione pariatur quibusdam aliquid unde? Omnis impedit vel exercitationem corrupti dolores iste voluptas dolorum itaque? Tenetur optio minima veritatis voluptas sed maiores mollitia, ducimus ut praesentium omnis reprehenderit necessitatibus magnam voluptates odio atque eos et dolorum corrupti, perferendis numquam! Autem nam consectetur accusantium architecto sapiente odio enim! Ipsam minus blanditiis tempora! Alias cupiditate illo magnam earum labore dolorum culpa consectetur minus corrupti facilis, dicta tempore amet quas officiis?</p>
        // </div>
    )
}

export default About
