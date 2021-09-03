import React, {useEffect} from 'react'
import {getItems, setProject} from '../../actions/global-actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const Home = ({getItems, items, setProject}) => {

    useEffect(() => {
        getItems()
    }, [])

    const history = useHistory()
    const handleOnClick = (id) => {
        setProject(id)
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

const mapStateToProps = state => ({items: state.global.items})

const mapDispatchToProps = dispatch => ({
    getItems: value => dispatch(getItems(value)),
    setProject: id => dispatch(setProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
