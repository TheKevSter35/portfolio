import React, {useEffect} from 'react'
import { setProject }  from '../../actions/global-actions'
import { connect } from 'react-redux'


const PortfolioWork = ({ project, setProject }) => {

    useEffect(() => {
      setProject()
    },[])


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
	   setProject: (value, id) => dispatch(setProject(value,id))
})


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)

