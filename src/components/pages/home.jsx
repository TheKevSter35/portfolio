import React, {useEffect} from 'react'
import {getItems} from '../../actions/global-actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const Home = ({getItems, items}) => {

    useEffect(() => {
        getItems()
    }, [])

    const history = useHistory()
    const handleOnClick = (id) => { 
        setTimeout(() => {
            history.push(`/portfolio/${id}`)
        }, 300);

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
                                <button
                                    onClick={() => {
                                    handleOnClick(item.id)
                                }}>
                                    Link
                                </button>

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
