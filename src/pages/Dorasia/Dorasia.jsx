import { Link } from "react-router";
import "../../assets/styles/individualPage.css";

export function Dorasia() {
  return (
    <>
      <title>Dorasia Luvanda | Portfolio</title>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <section>
        <div className="hero">
          <div>
            <h1>
              <p className="hero-greeting"> Welcome to my portfolio</p>
            </h1>
            <h2 className="hero-name">
              <span>Dorasia Luvanda</span>
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
            <div className="avatar-inner">DL</div>
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
          <div className="skill-card">
            <div className="skill-label">Programming Languages</div>
            <div className="skill-list">Java · JavaScript · C</div>
            <div className="skill-details hidden">
              Object-Oriented Design, dynamic scripting, and system level
              application tracking.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-label">Web Development</div>
            <div className="skill-list">HTML · CSS · JavaScript</div>
            <div className="skill-details hidden">
              Building responsive, dynamic frontend platforms using CSS Grid,
              Flexbox, and native DOM API interactions.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-label">Networking</div>
            <div className="skill-list">
              TCP/IP · IP Addressing · Network Configuration
            </div>
            <div className="skill-details hidden">
              Subnetting mapping architectures, routing protocol deployments,
              and structured infrastructure maintenance.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-label">Tools</div>
            <div className="skill-list">Git · GitHub</div>
            <div className="skill-details hidden">
              Version control systems execution, remote branches collaboration
              workflows, and source tracking configurations.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-label">Soft Skills</div>
            <div className="skill-list">
              Problem Solving · Teamwork · Critical Thinking
            </div>
            <div className="skill-details hidden">
              Analytical problem solving under agile workflows, systemic
              structural investigation, and cooperative solution development.
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <p className="section-label">03 — Education</p>
        <h2>Education Background</h2>

        <button id="sort-education-btn" className="btn-action">
          Sort by Year (Oldest to Newest)
        </button>

        <table id="education-table" className="edu-table">
          <thead>
            <tr>
              <th>Education Level</th>
              <th>School / Institution</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSc in Computer Science</td>
              <td>University of Dar es Salaam</td>
              <td>
                <span className="badge">Currently enrolled</span>
              </td>
            </tr>
            <tr>
              <td>Advanced Secondary</td>
              <td>Tabora Girls Secondary School</td>
              <td>2023 – 2025</td>
            </tr>
            <tr>
              <td>Ordinary Secondary</td>
              <td>John Merlin High School</td>
              <td>2019 – 2022</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td>Chamwino B Primary School</td>
              <td>2011 – 2018</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="interests">
        <p className="section-label">04 — Interests</p>
        <h2>Interests</h2>
        <p>Click a pill to see why I love it.</p>

        <div className="interests-grid">
          <div className="interest-pill">
            <div className="interest-title"> Watching Anime</div>
            <div className="interest-details hidden">
              I enjoy immersive storytelling and artistic animation styles. Some
              of my favorites include thrillers and fantasy series like JJK,AOT
              and Solo leveling.
            </div>
          </div>

          <div className="interest-pill">
            <div className="interest-title"> Listening to Music</div>
            <div className="interest-details hidden">
              Helps me maintain focus during long coding sessions. My playlists
              feature a mix of slow and Lo-Fi beats, synthwave, and deep focus
              beats.
            </div>
          </div>

          <div className="interest-pill">
            <div className="interest-title"> Watching Documentaries</div>
            <div className="interest-details hidden">
              I love learning about real-world history, space exploration, and
              emerging deep-tech engineering breakthroughs.
            </div>
          </div>

          <div className="interest-pill">
            <div className="interest-title"> Playing Chess</div>
            <div className="interest-details hidden">
              A great way to exercise logical thinking, strategy planning, and
              mental stamina under different time constraints.
            </div>
          </div>

          <div className="interest-pill">
            <div className="interest-title"> Reading Tech Blogs</div>
            <div className="interest-details hidden">
              Keeps me updated on development frameworks, system architecture
              optimizations, and hardware infrastructure shifts.
            </div>
          </div>
        </div>
      </section>

      <section id="links">
        <p className="section-label">05 — Links</p>
        <h2>Find Me Online</h2>
        <div className="links-row">
          <Link to ="https://www.linkedin.com/in/ester-kabuka-0805b536b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-type">Email</div>
              <div className="contact-value">esterkabuka89@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-type">Phone</div>
              <div className="contact-value">+255 687 777 275</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card">
          <h2>Gallery</h2>
          <img
            className="lightbox-image"
            src="../images/ester.jpeg"
            alt="Profile Photo"
          />
        </div>
      </section>
    </>
  );
}
