import {React, useEffect, useState} from "react";
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
import {motion} from 'framer-motion'
import {useTranslation} from "react-i18next";
const About = () => {

const [t, i18n] = useTranslation('common');

useEffect(() => {
    if(window.location.pathname === '/en/about'){
             i18n.changeLanguage('en')
        } else{
            i18n.changeLanguage('nl')
        }
        
}, [])
    return (
        <motion.main
            className="about"
            initial={{
            opacity: 0
        }}
            animate={{
            opacity: 1
        }}
            exit={{
            opacity: 0
        }}>
            <section className="banner">
                <div className="banner__inner inner">
                    <img src="/images/about/about-background.jpg" alt="about bg"/>
                </div>
            </section>
            <section className="profile">
                <div className="inner">
                    <div className="about">
                        <img src="/images/about/profile.png" alt="about profile"/>
                    </div>
                    <div className="copy">
                        <p> {t('about.about_me')}</p>
                    </div>

                </div>
            </section>
            <section className="skills code">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/about-code.jpeg" alt="about code"/>
                    </div>
                    <div className="copy">

                        <ul>
                            <h2>
                                {t('about.code_knowledge')}
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
                                <span>8/10</span>
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
                                <span>8/10</span>
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
                                        width: "70%"
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
                                        width: "70%"
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
                                        width: "60%"
                                    }}/>
                                </div>
                                <span>6/10</span>
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
                                        width: "50%"
                                    }}/>
                                </div>
                                <span>5/10</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="skills design">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/about-ux.jpg" alt="about ux"/>
                    </div>
                    <div className="copy">

                        <ul>
                            <h2>
                                {t('about.adobe_knowledge')}
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
                                        width: "70%"
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
                                        width: "70%"
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
                                        width: "60%"
                                    }}/>
                                </div>
                                <span>6/10</span>
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
                                        width: "70%"
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
                        <img src="/images/about/about-foto2.jpg" alt="about educations"/>
                    </div>
                    <div className="copy">
                        <ul>
                            <h2>
                                {t('about.educations')}
                            </h2>
                            <li>
                                <span> {t('about.educations_1')}</span>
                            </li>
                           <li>
                                <span> {t('about.educations_2')}</span>
                            </li>
                           <li>
                                <span> {t('about.educations_3')}</span>
                            </li>
                        </ul>
                        <ul>
                            <h2>
                                {t('about.internship')}
                            </h2>
                            <li>
                                <span> {t('about.internship_1')}</span>
                            </li>
                           <li>
                                <span> {t('about.internship_2')}</span>
                            </li>
                           <li>
                                <span> {t('about.internship_3')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="skills jobs">
                <div className="inner">
                    <div className="image">
                        <img src="/images/about/about-work.jpeg" alt="about jobs"/>
                    </div>
                    <div className="copy">
                        <ul>
                            <h2>
                                {t('about.work')}
                            </h2>
                            <li>
                                <span> {t('about.work_1')}</span>
                            </li>
                             <li>
                                <span> {t('about.work_2')}</span>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>
        </motion.main>
    )
}

export default About
