import React from 'react'
import {
    Html,
    Css,
    Js,
    ReactIcon,
    NodeSass,
    AdobeXD,
    AdobePhotoShop,
    Adobeillustrator,
    AdobeIndesign
} from '../icons'

const About = () => {

    return (
        <main className="about">
            <section className="banner">
                <div className="banner__inner inner">
                    <img src="/images/about/about-background.jpg"/>
                </div>
            </section>
            <section className="profile">
                <div className="inner">
                    <div className="about">
                        <img src="/images/about/profile.png"/>
                    </div>
                    <div className="copy">
                        <p>My name is Kevin Curi. I'm a graduated CMD student with Front-end Developer
                            and UX Designer . Lovin’ life with Gaming, Tech, and of course designing en
                            building websites and webapps</p>
                    </div>

                </div>
            </section>
            <section className="skills code">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/profile.png"/>
                    </div>
                    <div className="copy">

                        <ul>
                            <h2>
                                Code Knowledge
                            </h2>
                            <li className="progression">
                                <div className="progression__title">
                                    <Html/>
                                    <span>HTML5</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>

                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <Css/>
                                    <span>CSS</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <Js/>
                                    <span>Javascript</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <NodeSass/>
                                    <span>SASS</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <ReactIcon/>
                                    <span>React</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <ReactIcon/>
                                    <span>React Native</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            {/* <li className="progression">
                                <div className="progression__title">
                                    <NpmIcon/>
                                    <span>NPM</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <GitIcon/>
                                    <span>Git</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li> */}

                        </ul>
                    </div>

                </div>
            </section>
            <section className="skills design">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/profile.png"/>
                    </div>
                    <div className="copy">

                        <ul>
                            <h2>
                                Adobe Knowledge
                            </h2>
                            <li className="progression">
                                <div className="progression__title">
                                    <AdobeXD/>
                                    <span>XD</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <AdobePhotoShop/>
                                    <span>Photoshop</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <Adobeillustrator/>
                                    <span>
                                        Illustrator</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                            <li className="progression">
                                <div className="progression__title">
                                    <AdobeIndesign/>
                                    <span>Indesign</span>
                                </div>
                                <div className="progression__bar">
                                    <div
                                        className="progression__bar__status"
                                        style={{
                                        width: "80%"
                                    }}/>
                                </div>
                                <span>7/10</span>
                            </li>
                        </ul>

                    </div>

                </div>
            </section>
            <section className="skills educations">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/profile.png"/>
                    </div>
                    <div className="copy">

                        <ul>
                            <h2>
                                Educations
                            </h2>
                            <li>

                                <span>
                                    <b>HBO </b>
                                    | Communication and Multimedia Design (2017 - 2021)
                                </span>

                            </li>
                            <li>

                                <span>
                                    <b>MBO Niv4 </b>
                                    | Application Developer (2014 - 2017)
                                </span>

                            </li>
                            <li >

                                <span>
                                    <b>MBO Niv3 </b>
                                    | Co-Administrator IT (2012 - 2014)
                                </span>

                            </li>
                        </ul>
                        <ul>
                            <h2>
                                Internship
                            </h2>
                            <li>

                                <span>
                                    <b>CanvasHeroes
                                    </b>
                                    | Intern Front-End Developer (Sep. 2020 – Jan. 2021)
                                </span>

                            </li>
                            <li>

                                <span>
                                    <b>Bikkelhart </b>
                                    | Intern Front-End Developer (Jan. 2019 – Apr. 2019
                                    </span>

                            </li>
                            <li >

                                <span>
                                    <b>Premiums </b>
                                    | Intern Web Developer(Feb. 2016 – Jan. 2017)
                                    </span>

                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="skills jobs">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/profile.png"/>
                    </div>
                    <div className="copy">
                        <ul>
                            <h2>
                                Work
                            </h2>
                            <li>
                                <div>

                                    <span>
                                        <b>Bikkelhart </b>
                                        | Front-End Developer (Mei. 2019 – Aug. 2019)
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>

                                    <span>
                                        <b>Premiums </b>
                                         | Web Developer (Nov. 2016 – Apr. 2017)
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default About
