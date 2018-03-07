import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import video from "../assets/sajgal-bike-bg.mp4";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="grid">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    
    <Header />

    <video autoPlay loop muted src={video} />

    <main>{children()}</main>

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
