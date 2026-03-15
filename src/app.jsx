import React from "react";
import "./app.css";

import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Projects } from "./projects/projects";
import { Resume } from "./resume/resume";

export default function App() {
  return (
    <HashRouter>
      <header>
        <div className="brand">
          <h1 id="site-title">Hamid Jaeyoung Jahangir</h1>
          <p className="tagline">Creatively aspiring, aspiring to create.</p>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>
          <strong>Hamid Jaeyoung Jahangir</strong>
        </p>

        <div className="fine-print">
          <a
            className="social-link"
            href="https://github.com/hamidjae/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={`${import.meta.env.BASE_URL}github.svg`}
              alt=""
            />
            GitHub
          </a>

          <span>|</span>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/hamid-jaeyoung/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={`${import.meta.env.BASE_URL}linkedin.svg`}
              alt=""
            />
            LinkedIn
          </a>
        </div>
      </footer>
    </HashRouter>
  );
}

function NotFound() {
  return <div>404: Return to sender. Address unknown.</div>;
}