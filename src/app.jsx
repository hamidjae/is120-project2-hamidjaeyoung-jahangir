import React, { useEffect, useState } from "react";
import "./app.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Projects } from "./projects/projects";
import { Resume } from "./resume/resume";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter basename="/is120-project2-hamidjaeyoung-jahangir">
      <header>
        <div className="brand">
          <h1 id="site-title">Hamid Jaeyoung Jahangir</h1>
          <p className="tagline">Creatively aspiring, aspiring to create.</p>

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
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
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
        <p className="fine-print">Hamid Jaeyoung Jahangir</p>
        <p>
          <a
            className="social-link"
            href="https://github.com/hamidjae"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="social-link"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <section className="sectioned">
      <h2 className="section-title">404: Return to sender. Address unknown.</h2>
    </section>
  );
}