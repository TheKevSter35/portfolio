/* eslint-disable react/prop-types */
import React, {useEffect, } from 'react'
import { getItems }  from '../actions/global-actions'
import { connect } from 'react-redux'


const Posts = ({ getItems, items }) => {

    useEffect(() => {
      getItems()
    },[])

    return (
         <div>
                {items.map((item, index) => (
                    <p key={index}> {item.id} </p>
                ))}
        <h2>Posts</h2>
       </div>
    )
}


const mapStateToProps = state => ({
	items: state.global.items
})

const mapDispatchToProps = dispatch => ({
	getItems: value => dispatch(getItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)


