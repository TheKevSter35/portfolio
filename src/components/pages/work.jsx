import React, { useEffect, Fragment } from "react";
import { getItems } from "../../actions/global-actions";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ArrowRight } from "../icons";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Work = ({ getItems, items }) => {
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getItems();
  }, []);

  return (
    <main>
      <motion.section
        className="work test"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="inner">
          <ul className="work-list">
            {items.map((item, index) => (
              <li key={index}>
                <img src={item.banner} alt={item.name} />
                <div className="copy">
                  <h2>{item.name}</h2>
                  {i18n.language === "en" && (
                    <Fragment>
                      <p>{item.description_en}</p>
                      <Link
                        className="primary-button"
                        to={`/en/project/${item.id}`}
                      >
                        <ArrowRight />
                        {t("work.check_work")}
                      </Link>
                    </Fragment>
                  )}
                  {i18n.language === "nl" && (
                    <Fragment>
                      <p>{item.description_nl}</p>

                      <Link
                        className="primary-button"
                        to={`/project/${item.id}`}
                      >
                        <ArrowRight />
                        {t("work.check_work")}
                      </Link>
                    </Fragment>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </main>
  );
};

const mapStateToProps = (state) => ({ items: state.global.items });

const mapDispatchToProps = (dispatch) => ({
  getItems: (value) => dispatch(getItems(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Work);
