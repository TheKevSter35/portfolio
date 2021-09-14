import React, {Fragment, useEffect} from 'react'
import {setProject} from '../../actions/global-actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router'

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

            <section className="copy">
                <div className="copy__inner inner">
                    <div className="copy">
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                    <div className="image">
                        <img src={project.image} alt={project.name}/>
                    </div>
                </div>
            </section>

            {project.demolink && 
            <section className="demolink">
                <div className="demolink__inner inner" style={{
                                background: `${project.bgcolor}`
                            }}>
                    <h2>Links</h2>
                    <a
                        className="primary-button"
                        href={`${project.demolink}`}
                        target="_blank"
                        rel="noreferrer">Demo
                    </a>
                    {project.repository && 
                    <Fragment>
                        <a
                        className="primary-button"
                        href={`${project.repository}`}
                        target="_blank"
                        rel="noreferrer">Repository
                    </a>
                    </Fragment>
                    }

                </div>
            </section>
}

        </main>
    )
}

const mapStateToProps = state => ({project: state.global.project})

const mapDispatchToProps = dispatch => ({
    setProject: id => dispatch(setProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)
