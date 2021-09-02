import React, {useEffect } from 'react'
import {getItems, setProject} from '../../actions/global-actions'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const Home = ({getItems, items}) => {

    useEffect(() => {
        getItems()
    }, [])
let history = useHistory()
    const handleOnClick = itemId => {
        console.log(itemId)
        setProject(itemId)
        history.push(`portfolio/${itemId}`)
    }
    return (
        <main>
            <section className="intro">
                <div className="intro__inner">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <h2>{item.name}
                                </h2>
                                <Link
                                    to={`/portfolio/${item.id}`}
                                    onClick={() => {
                                    handleOnClick(item.id)
                                }}>
                                    Link
                                </Link>

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
    getItems: value => dispatch(getItems(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
