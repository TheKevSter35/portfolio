/* eslint-disable react/prop-types */
import React, {useEffect, Fragment } from 'react'
import { getItems }  from '../actions/global-actions'
import { connect } from 'react-redux'


const Posts = ({ getItems, items }) => {

    useEffect(() => {
      getItems()
    },[])

    return (
         <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <p> {item.id} </p>
                    <p>{item.name} </p>
                    </li> 
                ))}
      
       </ul>
    )
}


const mapStateToProps = state => ({
	items: state.global.items
})

const mapDispatchToProps = dispatch => ({
	getItems: value => dispatch(getItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)


