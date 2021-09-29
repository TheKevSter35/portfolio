import React from 'react'

const About = () => {

    return (
        <main>
            <section className="banner">
                <div className="banner__inner inner">
                    <img src="/images/about/about-background.jpg" />
                </div>
                 <h1>Hello there</h1>
            </section>
            <section className="profile">
                <div className="inner">
                    <div className="about">
                         <img src="/images/about/profile.png" />
                    </div>
                    <div className="copy">
                        <p>My name is Kevin Curi. I'm a graduated CMD student with Front-end Developer and UX Designer . Lovin’ life with Gaming, Tech, and of course designing en building websites and webapps</p>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default About
