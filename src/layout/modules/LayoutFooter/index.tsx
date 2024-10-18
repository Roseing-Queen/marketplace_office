import { Footer } from "antd/lib/layout/layout";
import React from "react";
import "./index.scss";

const LayoutFooter = () => {
  const getCopyrightInformation = () => {
    let CopyrightInformation = localStorage.getItem("public_configuration");
    if (CopyrightInformation) {
      return JSON.parse(atob(CopyrightInformation)).CopyrightInformation;
    } else {
      return "© 2021 Marketplace. All rights reserved.";
    }
  };
  return <Footer className={"footerStyle"}>{getCopyrightInformation()}</Footer>;
};
export default LayoutFooter;
