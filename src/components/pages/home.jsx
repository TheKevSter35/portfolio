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
            <section className="home">
                <div className="inner">
                    <ul className="portfolio-list">
                        {items.map((item, index) => (
                            <li 
                                key={index}
                                style={{
                                background: `${item.bgcolor}`
                            }}
                                onClick={() => {
                                handleOnClick(item.id)
                            }}>
                                <img src={item.thumbnail} alt={item.name}/>

                                <div className="copy">
                                    <b>{item.name}</b>
                                </div>

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
    getItems: value => dispatch(getItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
