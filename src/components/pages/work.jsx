import React, {useEffect} from 'react'
import {getItems} from '../../actions/global-actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {ArrowRight} from '../icons'
import {AnimatePresence, motion} from 'framer-motion'

const Work = ({getItems, items}) => {

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
            <section className="work">
                <div className="inner">
                    <ul className="work-list">
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                opacity: 0
                            }}
                                animate={{
                                opacity: 1
                            }}
                                exit={{
                                opacity: 0
                            }}>
                                <li
                                    key={index}
                                    onClick={() => {
                                    handleOnClick(item.id)
                                }}>
                                    <img src={item.banner} alt={item.name}/>

                                    <div className="copy">
                                        <h2>{item.name}</h2>
                                        <p>{item.description}</p>
                                        <a
                                            className="primary-button"
                                            href={`/portfolio/${item.id}`}
                                            onClick={() => {
                                            handleOnClick(item.id)
                                        }}>
                                            <ArrowRight/>
                                            Check work</a>
                                    </div>

                                </li>
                            </motion.div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Work)
