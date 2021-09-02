import React, {useEffect, Fragment } from 'react'
import { getItems }  from '../../actions/global-actions'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


const Home = ({ getItems, items }) => {

    useEffect(() => {
      getItems()
    },[])

    return (
        <main>
            <section className="intro">
                <div className="intro__inner">
         <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <h2>{item.name} </h2>
                    <Link to={`/portfolio/${item.id}`}> Link </Link>
                   
                    </li> 
                ))}
      
       </ul>
       </div>
            </section>
        </main>
    )
}


const mapStateToProps = state => ({
	items: state.global.items
})

const mapDispatchToProps = dispatch => ({
	getItems: value => dispatch(getItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

