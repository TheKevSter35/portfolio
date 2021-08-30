import React, {useEffect, } from 'react'
import { getItems }  from '../actions/global-actions'
import { connect } from 'react-redux'


const Posts = () => {

    useEffect(() => {

    },[])

    return (
         <div>
        
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


