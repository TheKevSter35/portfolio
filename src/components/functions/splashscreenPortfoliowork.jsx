//REACT CODE
import React, {useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router'
import {connect} from 'react-redux'
import {setProject} from '../../actions/global-actions'
import {CSSTransition} from 'react-transition-group'

const Splashscreen = ({project, setProject}) => {

    const param = useParams()
    useEffect(() => {
        setProject(param.id)
    }, [])

    const [isSplashScreenVisible,
        SetSplashScreenVisible] = useState(true);
        
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
            SetSplashScreenVisible(false)
        }, 1200)
    }, [])

    return (
        <Fragment>
            <CSSTransition
                in={isSplashScreenVisible}
                appear={true}
                classNames="fade-out-splashscreen"
                unmountOnExit
                timeout={1200}>
                <section className="splashscreen">
                    <img src={project.thumbnail} alt={project.name}/>
                    <h1>{project.name}</h1>
                </section>
            </CSSTransition>
        </Fragment>

    );
}

const mapStateToProps = state => ({project: state.global.project})

const mapDispatchToProps = dispatch => ({
    setProject: id => dispatch(setProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen)
