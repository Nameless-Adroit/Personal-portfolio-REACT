import { Link } from "react-router";

import { skills } from "./EsterSkills";
import { educationData } from "./EsterEducation";
import {interestsData} from "./EsterInterest";
import { contactData } from "./EsterContact";

import { SkillCard } from "../../components/SkillCard/SkillCard";
import { Table } from "../../components/Table/Table";
import { Interests } from "../../components/Interests/Interests";
import { Contact } from "../../components/Contact/Contact";

import esterImage from "../../assets/images/ester.jpeg";
import "../../assets/styles/individualPage.css";

export function Ester() {
  return (
    <>
      <title>Ester Kabuka | Portfolio</title>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <section>
        <div className="hero">
          <div>
            <h1>
              <p className="hero-greeting"> Welcome to my portfolio</p>
            </h1>
            <h2 className="hero-name">
              <span>Ester Kabuka</span>
            </h2>
            <div className="hero-meta">
              <p>
                <strong>Field:</strong> Computer Science
              </p>
              <p>
                <strong>University:</strong> University of Dar es Salaam
              </p>
            </div>
          </div>
          <div className="avatar-ring">
            <div className="avatar-inner">EK</div>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section-label">01 — About</p>
        <h2>About Me</h2>
        <div className="about-card">
          I am a determined, motivated Computer Science student at the
          University of Dar es Salaam, passionate about learning new
          technologies, problem solving, and developing innovative solutions
          that create real-world impact...
        </div>
      </section>

      <section id="skills">
        <p className="section-label">02 — Skills</p>
        <h2>My Skills</h2>
        <p> Click a card to see specific details.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} skills={skill} />
          ))}
        </div>
      </section>

      <section id="education">
        <p className="section-label">03 — Education</p>
        <h2>Education Background</h2>
        <button className="btn-action">Sort by Year (Oldest to Newest)</button>
        <Table data={educationData} />
      </section>

      <section id="interests">
        <p className="section-label">04 — Interests</p>
        <h2>Interests</h2>
        <p>Click a pill to see why I love it.</p>

        <div className="interests-grid">
          {interestsData.map((interest, index) => (
            <Interests key={index} interests={interest} />
          ))}
        </div>
      </section>

      <section id="links">
        <p className="section-label">05 — Links</p>
        <h2>Find Me Online</h2>
        <div className="links-row">
          <Link
            to="https://www.linkedin.com/in/ester-kabuka-0805b536b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="link-btn"
            target="_blank"
          >
            View LinkedIn Profile →
          </Link>
        </div>
      </section>

      <section id="contact">
        <p className="section-label">06 — Contact</p>
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          {contactData.map((contact, index) => (
            <Contact key={index} contact={contact} />
          ))}
        </div>
      </section>

      <section>
        <div className="card">
          <h2>Gallery</h2>
          <img
            className="lightbox-image"
            src={esterImage}
            alt="Profile Photo"
          />
        </div>
      </section>
    </>
  );
}
