import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <main className="projects-page">
      <section className="sectioned projects-intro">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="lead">
          A collection of projects focused on web development, UI design, and
          practical problem solving. As a Computer Science major, I have the
          opportunity of presenting several different domains of expertise!
        </p>
      </section>

      <section className="project-grid">
        <Link className="project-card featured" to="/">
          <div className="project-thumb">
            <div className="project-thumb">
              <img
                className="project-icon"
                src={`${import.meta.env.BASE_URL}star.svg`}
                alt="Star icon"
              />
            </div>
          </div>
          <div className="project-badge">Featured</div>
          <h3>Portfolio Website</h3>
          <p className="project-summary">
            A three-page portfolio focused on layout consistency, hover effects,
            and responsive structure. The project is continually being updated
            with each new iteration to reflect my own mastery.
          </p>
          <p className="meta">HTML · CSS · React · Vite</p>
          <span className="project-cta">View project →</span>
        </Link>

        <a
          className="project-card"
          href="https://startup.keeptalkingandthestorycontinues.click/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-thumb">
            <img
              className="project-icon"
              src={`${import.meta.env.BASE_URL}sliders.svg`}
              alt="Sliders icon"
            />
          </div>
          <div className="project-badge in-progress">In Progress</div>
          <h3>Keep Talking and the Story Continues</h3>
          <p className="project-summary">
            A fullstack class project built in React, designed as an interactive
            story-based game.
          </p>
          <p className="meta">HTML · CSS · JavaScript · React · Vite</p>
          <span className="project-cta">Visit site →</span>
        </a>

        <a
          className="project-card"
          href="https://teamnamesalonwebsite.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-thumb">
            <img
              className="project-icon"
              src={`${import.meta.env.BASE_URL}scissors.svg`}
              alt="Scissors icon"
            />
          </div>
          <div className="project-badge">Full Stack</div>
          <h3>Salon Management App</h3>
          <p className="project-summary">
            A multi-page Streamlit app for salon check-in and management backed
            by Supabase/PostgreSQL.
          </p>
          <p className="meta">Streamlit · Supabase · Python</p>
          <span className="project-cta">Visit site →</span>
        </a>

        <a
          className="project-card"
          href="https://github.com/hamidjae/Dalet-Smatsheet-Comparison-Parser"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-thumb">
            <img
              className="project-icon"
              src={`${import.meta.env.BASE_URL}layout.svg`}
              alt="Page layout icon"
            />
          </div>
          <div className="project-badge tooling">Tooling</div>
          <h3>Dalet Smartsheet Comparison Parser</h3>
          <p className="project-summary">
            A Python/Tkinter proof-of-concept tool that exports structured CSV
            output from form input.
          </p>
          <p className="meta">Python · Tkinter · CSV</p>
          <span className="project-cta">View code →</span>
        </a>
      </section>
    </main>
  );
}
