import React, {useEffect, Fragment} from 'react'
import {getItems} from '../../actions/global-actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {ArrowRight} from '../icons'
import {AnimatePresence, motion} from 'framer-motion'
import {useTranslation} from "react-i18next";

const Work = ({getItems, items}) => {
    const [t,
        i18n] = useTranslation('common');

    useEffect(() => {

        getItems()
    }, [])

    const history = useHistory()
    const handleOnClick = (id) => {

        if (i18n.language === ('en')) {
            setTimeout(() => {
            history.push(`/en/project/${id}`)
        }, 300);
        } else {
            setTimeout(() => {
            history.push(`/project/${id}`)
        }, 300);
        }
        

    }
    return (
        <main>
            <motion.section
                className="work test"
                initial={{
                opacity: 0
            }}
                animate={{
                opacity: 1
            }}
                exit={{
                opacity: 0
            }}
                transition={{
                duration: 0.5
            }}>
                <div className="inner">
                    <ul className="work-list">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                handleOnClick(item.id)
                            }}>
                                <img src={item.banner} alt={item.name}/>
                                <div className="copy">
                                    <h2>{item.name}</h2>
                                    {i18n.language === 'en' && 
                                     <Fragment>
                                    <p>{item.description_en}</p>
                                     <button
                                        className="primary-button"
                                        onClick={() => {
                                        handleOnClick(item.id)
                                    }}>
                                        <ArrowRight/>
                                        {t('work.check_work')}</button>
                                        </Fragment>
                                    }
                                    {i18n.language === 'nl' && 
                                    <Fragment>
                                    <p>{item.description_nl}</p>
                                     
                                     <button
                                        className="primary-button"
                                        onClick={() => {
                                        handleOnClick(item.id)
                                    }}>
                                        <ArrowRight/>
                                        {t('work.check_work')}</button>
                                        </Fragment>
                                    }
                                   
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </main>
    )
}

const mapStateToProps = state => ({items: state.global.items})

const mapDispatchToProps = dispatch => ({
    getItems: value => dispatch(getItems(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Work)
