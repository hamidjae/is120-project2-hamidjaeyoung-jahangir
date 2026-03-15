import React from "react";

export function Resume() {
  return (
    <>
      <section className="sectioned">
        <h2 className="section-title">Abridged Resume</h2>
        <a
          className="download-link"
          href={`${import.meta.env.BASE_URL}Hamid Resume.docx`}
          download
        >
          <img
            className="download-icon"
            src={`${import.meta.env.BASE_URL}link.svg`}
            alt=""
          />
          Click me to download the full version!
        </a>

        <section className="card">
          <h3>Education</h3>
          <p>
            <strong>Brigham Young University</strong> — Bachelor of Science in
            Computer Science, Minor in Information Systems
          </p>
          <p className="meta">Expected Graduation: August 2027</p>
          <ul>
            <li>GPA 4.0/4.0</li>
            <li>
              Full Academic Scholarship, and the BYU College of Physical and
              Mathematical Sciences Dean’s List recipient.
            </li>
            <li>
              Top 1% Performance in Mathematics, recognized by the BYU
              Department of Mathematics.
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Experience</h3>
          <p>
            <strong>Brigham Young University Broadcasting</strong> — Media
            Operations Specialist
          </p>
          <p className="meta">Aug 2024 - Present</p>
          <ul>
            <li>
              Developed and automated broadcasting logs using Wide Orbit, Dalet,
              and Louise platforms, improving workflow efficiency by 40% while
              ensuring 100% accuracy for optimal viewer experience.
            </li>
            <li>
              Standardized show listings with Nielsen in collaboration with
              multiple broadcasting companies such as Amazon Prime, enhancing
              consistency and reducing manual errors by 98%.
            </li>
          </ul>
          <br />

          <p>
            <strong>
              The University of Texas at Arlington Academic Success Center
            </strong>{" "}
            — Supplemental Instruction Leader
          </p>
          <p className="meta"> Jan 2024 - May 2024</p>
          <ul>
            <li>
              Collaborated with Professor Jonathan M. Steplyk to design lesson
              plans aligned with Bloom’s Taxonomy, enhancing academic rigor; 80%
              of consistent attendees achieved an A grade.
            </li>
            <li>
              Led peer review sessions for HIST 1302 and CSE 1310, increasing
              participation by 67% and facilitating active learning for groups
              of up to 25 students through interactive techniques (e.g., Verbal
              Volleyball, Jeopardy, Word Cloud).
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hamidjae@byu.edu"> hamidjae@byu.edu</a>
            <br />
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/hamidjae/"> hamidjae</a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/hamid-jaeyoung/">
              {" "}
              hamid-jaeyoung
            </a>
          </p>
        </section>
      </section>
    </>
  );
}
