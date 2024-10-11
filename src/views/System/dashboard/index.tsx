import React from "react";
import {useTranslation} from "react-i18next";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  return <div>{t("dashboard.welcome")} <button onClick={() => changeLanguage("en")}>EN</button> <button onClick={() => changeLanguage("zh_cn")}>中文</button></div>;
};

export default Dashboard;
