import { React, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "./icons";
import TranslateButton from "../components/functions/translateButton";
import Darkmode from "../components/functions/darkmodebutton";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

const Header = ({ project }) => {
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    if (window.location.href.substr(0, window.location.href.indexOf("en"))) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("nl");
    }
  }, []);

  return (
    <header>
      <TranslateButton />
      <nav>
        <NavLink
          to={t("nav.work_url")}
          isActive={() => {
            if (window.location.pathname === `${t("nav.work_url")}`) {
              return true;
            }
            if (
              window.location.pathname === `/project/${project.id}` ||
              window.location.pathname === `/en/project/${project.id}`
            ) {
              return true;
            }
          }}
        >
          <span>{t("nav.work")}</span>
        </NavLink>
        <Link className="logo" to={t("nav.home_url")}>
          <Logo />
        </Link>
        <NavLink
          to={t("nav.about_url")}
          isActive={() => {
            if (window.location.pathname === `${t("nav.about_url")}`) {
              return true;
            }
          }}
        >
          <span>{t("nav.about")}</span>
        </NavLink>
      </nav>
      <Darkmode />
    </header>
  );
};
const mapStateToProps = (state) => ({ project: state.global.project });

export default connect(mapStateToProps)(Header);
