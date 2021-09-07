import React, {useEffect} from 'react'
import { setProject, }  from '../../actions/global-actions'
import { connect } from 'react-redux'
import { useParams } from 'react-router'


const PortfolioWork = ({ project, setProject }) => {
 const param = useParams()
    useEffect(() => {
        setProject(param.id)
    },[])


    return (
        <main>
            <section className="intro">
                <div className="intro__inner inner">
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
    setProject: id => dispatch(setProject(id))
})




export default connect(mapStateToProps, mapDispatchToProps)(PortfolioWork)

