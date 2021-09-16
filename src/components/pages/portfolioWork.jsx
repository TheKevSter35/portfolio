/* eslint-disable no-mixed-operators */
import React, {useEffect} from 'react'
import {setProject} from '../../actions/global-actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router'
import {ArrowRight} from '../icons'

const PortfolioWork = ({project, setProject}) => {
    const param = useParams()
    useEffect(() => {
        setProject(param.id)
    }, [])

    return (
        <main>
            <section className="banner">
                <div className="banner__inner inner">
                    <img src={project.banner} alt={project.name}/>

                </div>
            </section>

            <section className="copy-section">
                <div className="copy__inner inner">
                    <div className="copy">
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                        {!project.demolink && !project.repository || 
                        <div className="links">
                            <h3>Links</h3>
                            {project.demolink && <a
                                className="primary-button"
                                href={`${project.demolink}`}
                                target="_blank"
                                rel="noreferrer"> <ArrowRight/> Demo
                            </a>
}
                            {project.repository && <a
                                className="primary-button"
                                href={`${project.repository}`}
                                target="_blank"
                                rel="noreferrer"> <ArrowRight/> Repository
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

const mapStateToProps = state => ({project: state.global.project})

const mapDispatchToProps = dispatch => ({
    setProject: id => dispatch(setProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)
