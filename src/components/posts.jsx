import React, {useEffect, useState} from 'react'
import { updateItems }  from './actions/global-actions'
import { connect } from 'react-redux'


const Posts = () => {
const [updateItems] = useState(true);
	useEffect(() => {
	}, [])
    useEffect(() => {

    },[])

    return (
         <div>
        {updateItems.map((item, index) => {
            <p key={index}>${item.id}</p>
            })}
       </div>
    )
}


const mapStateToProps = state => ({
	items: state.global.items
})

const mapDispatchToProps = dispatch => ({
	updateItems: value => dispatch(updateItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)


