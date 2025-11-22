import React, {useContext} from "react";
import "./About.scss";
import {aboutMeSection, contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutMeSection || aboutMeSection.display === false) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
        <div className="about-main-div">
          <div className="about-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading about-heading"
                  : "heading about-heading"
              }
            >
              {aboutMeSection.title}
            </h1>
            {aboutMeSection.subtitle ? (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle about-subtitle"
                    : "subTitle about-subtitle"
                }
              >
                {aboutMeSection.subtitle}
              </p>
            ) : null}
          </div>
          <div className="about-content">
            {aboutMeSection.profileImage ? (
              <div className="about-image-card">
                <div className="about-image-ring"></div>
                <img
                  src={aboutMeSection.profileImage}
                  alt={aboutMeSection.imageAlt || "Profile"}
                  className="about-image"
                />
                <div className="about-image-gradient"></div>
                <div className="about-image-social">
                  <SocialMedia />
                </div>
              </div>
            ) : null}
            <div className="about-text-div">
              {aboutMeSection.description &&
                aboutMeSection.description.map((para, i) => (
                  <p
                    key={i}
                    className={
                      isDark ? "dark-mode about-paragraph" : "about-paragraph"
                    }
                  >
                    {para}
                  </p>
                ))}
              <div className="about-contact">
                <div className="about-contact-details">
                  {contactInfo.email_address && (
                    <a
                      className="about-contact-item"
                      href={`mailto:${contactInfo.email_address}`}
                    >
                      <i className="fas fa-envelope"></i>
                      <span>{contactInfo.email_address}</span>
                    </a>
                  )}
                  {contactInfo.number && (
                    <a
                      className="about-contact-item"
                      href={`tel:${contactInfo.number}`}
                    >
                      <i className="fas fa-phone"></i>
                      <span>{contactInfo.number}</span>
                    </a>
                  )}
                  {(aboutMeSection.website || socialMediaLinks.github) && (
                    <a
                      className="about-contact-item"
                      href={aboutMeSection.website || socialMediaLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-globe"></i>
                      <span>
                        {aboutMeSection.website || socialMediaLinks.github}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
