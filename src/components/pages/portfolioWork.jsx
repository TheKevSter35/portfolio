import React, {useEffect, Fragment } from 'react'
import { setProject }  from '../../actions/global-actions'
import { connect } from 'react-redux'


const PortfolioWork = ({ setProject, project, id }) => {

    useEffect(() => {
      setProject()
    },[])

   console.log(project)
    return (
        <main>
            <section className="intro">
                <div className="intro__inner">
         <ul>
                
                <h2>Mijn porjec </h2>
                <p>{project.name}</p>
      
       </ul>
       </div>
            </section>
        </main>
    )
}


const mapStateToProps = state => ({
	project: state.global.project
})

const mapDispatchToProps = dispatch => ({
	setProject: value => dispatch(setProject(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)

