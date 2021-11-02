/* eslint-disable no-mixed-operators */
import React, {useEffect} from 'react'
import {setProject} from '../../actions/global-actions'
import {connect} from 'react-redux'
import {useParams, useHistory} from 'react-router'
import {ArrowRight} from '../icons'
import Splashscreen from '../functions/splashscreenPortfoliowork'
import {useTranslation} from "react-i18next";

const PortfolioWork = ({project, setProject, errorStatus}) => {
    const [t,
        i18n] = useTranslation('common');
    const history = useHistory()

    const param = useParams()
    useEffect(() => {
        setProject(param.id)
        errorStatus = false
    }, [])

    useEffect(() => {
        if (errorStatus === true) {
            if (window.location.href.substr(0, window.location.href.indexOf('en'))) {
                history.push(`/en`)
            } else {
                history.push(`/`)
            }

        }
    }, [errorStatus, history])

    return (

        <main className="portfoliowork">
            <Splashscreen/>

            <section className="banner">
                <div className="banner__inner inner">
                    <img src={project.banner} alt={project.name}/>
                </div>
            </section>

            <section className="copy-section">
                <div className="copy__inner inner">
                    <div className="copy">
                        <h1>{project.name}</h1>
                        {i18n.language === 'en' && <p>{project.description_en}</p>}
                        {i18n.language === 'nl' && <p>{project.description_nl}</p>}
                        {!project.demolink && !project.repository || <div className="links">
                            <h3>Links</h3>
                            {project.demolink && <a
                                className="primary-button"
                                href={`${project.demolink}`}
                                target="_blank"
                                rel="noreferrer">
                                <ArrowRight/>
                                Demo
                            </a>
}
                            {project.repository && <a
                                className="primary-button"
                                href={`${project.repository}`}
                                target="_blank"
                                rel="noreferrer">
                                <ArrowRight/>
                                Repository
                            </a>
}
                        </div>
}

                    </div>

                    <div className="image">
                        <img src={project.image} alt={project.name}/>
                    </div>
                </div>
            </section>
        </main>

    )
}

const mapStateToProps = state => ({project: state.global.project, errorStatus: state.global.errorStatus})

const mapDispatchToProps = dispatch => ({
    setProject: id => dispatch(setProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)
