import React from "react";
import Project from "./Project";
import wts from "../Styles/images/wts.JPG";

const pages = {
  template_1: "https://w-ts.com.ua",
};

const FullStackApp = () => {
  return (
    <div>
      <div>
        <Project
          pages_link={pages.template_1}
          image={wts}
          description="Fullstack website for online training center"
        >
          {" "}
        </Project>
      </div>
    </div>
  );
};

export default FullStackApp;
