import React, { useEffect } from "react";
import { getItems } from "../../actions/global-actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = ({ getItems, items }) => {
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <section className="home">
        <div className="inner">
          <ul className="portfolio-list">
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  background: `${item.bgcolor}`,
                  animationDelay: ` ${0.1 * item.id}s`,
                }}
              >
                <img src={item.thumbnail} alt={item.name} />

                <div className="copy">
                  <b>{item.name}</b>
                </div>
                {i18n.language === "en" && (
                  <Link
                    className="primary-button"
                    to={`/en/project/${item.slug}`}
                  >
                    {t("work.check_work")}
                  </Link>
                )}
                {i18n.language === "nl" && (
                  <Link className="primary-button" to={`/project/${item.slug}`}>
                    {t("work.check_work")}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.main>
  );
};

const mapStateToProps = (state) => ({ items: state.global.items });

const mapDispatchToProps = (dispatch) => ({
  getItems: (value) => dispatch(getItems(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
