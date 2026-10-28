import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

import './style.css';

const sections = ['Profile', 'Skills', 'Projects', 'Find me'];

const skillGroups = [
  {
    number: '01',
    title: 'Design',
    skills: [{ name: 'Figma', icon: FaFigma }],
  },
  {
    number: '02',
    title: 'Frontend development',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
    ],
  },
  {
    number: '03',
    title: 'Backend & database',
    skills: [
      { name: 'PHP', icon: FaPhp },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
];

function getSectionId(section) {
  return section.toLowerCase().replaceAll(' ', '-');
}

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('profile');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      revealObserver.observe(element);
    });

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -55% 0px' }
    );

    document.querySelectorAll('main > section').forEach((section) => {
      navObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <>
      <header>
        <a
          className="logo"
          href="#profile"
          aria-label="Alexander Magno home"
        >
          am<span>®</span>
        </a>

        <button
          type="button"
          className="menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? 'Close −' : 'Menu +'}
        </button>

        <nav
          id="main-navigation"
          className={open ? 'open' : ''}
          aria-label="Main navigation"
        >
          {sections.map((section) => {
            const sectionId = getSectionId(section);

            return (
              <a
                key={sectionId}
                className={active === sectionId ? 'active' : ''}
                href={`#${sectionId}`}
                aria-current={active === sectionId ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {section}
              </a>
            );
          })}
        </nav>

        <a
          className="header-contact"
          href="mailto:magnoalexander91@gmail.com"
        >
          Let’s talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* Profile */}
        <section id="profile" className="hero">
          <div className="hero-top">
            <span className="eyebrow">
              <i /> PERSONAL PORTFOLIO
            </span>

            <span className="edition">
              A LITTLE ABOUT ME / {new Date().getFullYear()}
            </span>
          </div>

          <div className="hero-grid">
            <div>
              <p className="intro">Hi there, I’m Alexander.</p>

              <h1>
                Curiosity.
                <br />
                Code.
                <br />
                <span className="outline">Possibility.</span>
              </h1>

              <p className="hero-copy">
                Exploring the space between data and design.
                <br />
                Learning, building, and getting a little better every day.
              </p>

              <a className="button" href="#find-me">
                Let’s connect <span>↗</span>
              </a>
            </div>

            <div
              className="art"
              role="img"
              aria-label="Abstract Alexander Magno monogram"
            >
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="art-cross cross-one">+</div>
              <div className="art-cross cross-two">+</div>

              <div className="monogram">
                a<span>m</span>
                <b>✳</b>
              </div>

              <span className="art-label">
                ALWAYS A WORK IN PROGRESS.
              </span>

              <span className="coordinate">14° N / 121° E</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>Based in the Philippines</span>

            <a href="#skills">
              SCROLL TO EXPLORE <span>↓</span>
            </a>

            <span>OPEN TO NEW CONNECTIONS ↗</span>
          </div>
        </section>

        {/* Animated tools ticker */}
        <div
        className="ticker tools-ticker"
        role="img"
        aria-label="Tools I use: Figma, HTML, CSS, JavaScript, React, PHP, and MySQL"
        >
        <div className="tools-track" aria-hidden="true">
            {[0, 1].map((copy) => (
            <div className="tools-group" key={copy}>
                <FaFigma title="Figma" />
                <FaHtml5 title="HTML" />
                <FaCss3Alt title="CSS" />
                <FaJs title="JavaScript" />
                <FaReact title="React" />
                <FaPhp title="PHP" />
                <SiMysql title="MySQL" />
            </div>
            ))}
        </div>
        </div>

        {/* Skills */}
        <section id="skills" className="skills section-pad">
          <div className="section-head reveal">
            <span className="eyebrow">01 / MY TOOLKIT</span>

            <h2>
              A growing set
              <br />
              of possibilities<span className="muted">.</span>
            </h2>

            <p>
              Tools I’m exploring and putting into practice, one idea
              at a time.
            </p>
          </div>

          <div className="skill-list">
            {skillGroups.map(({ number, title, skills }) => (
              <div className="skill-row reveal" key={number}>
                <span className="row-num">{number}</span>

                <h3>{title}</h3>

                <div className="tags">
                  {skills.map(({ name, icon: Icon }) => (
                    <span key={name}>
                      <Icon aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>

                <span className="row-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects section-pad">
          <div className="section-head reveal">
            <span className="eyebrow">02 / SELECTED WORK</span>

            <h2>
              Good things
              <br />
              take building.
            </h2>
          </div>

          <div className="project-placeholder reveal">
            <div className="project-graphic" aria-hidden="true">
              <span className="star">✳</span>
              <span className="ghost-number">01</span>
            </div>

            <div className="project-note">
              <span className="pill">
                <i /> COMING SOON
              </span>

              <h3>
                The next chapter
                <br />
                is in the works.
              </h3>

              <p>
                This space will soon be home to my projects.
                <br />
                A little curiosity. A lot of learning. Stay tuned.
              </p>

              <a href="mailto:magnoalexander91@gmail.com">
                Have an idea? Let’s talk <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="find-me" className="contact section-pad">
          <div className="contact-top reveal">
            <span className="eyebrow">03 / FIND ME</span>
            <span>GREAT THINGS START WITH A HELLO.</span>
          </div>

          <div className="reveal">
            <h2>
              Let’s make
              <br />
              <span>connections.</span>{' '}
              <a
                href="mailto:magnoalexander91@gmail.com"
                aria-label="Email Alexander"
                className="big-arrow"
              >
                ↗
              </a>
            </h2>

            <p>
              Have a question, an idea, or just want to say hi?
              <br />
              I’d love to hear from you.
            </p>
          </div>

          <div className="contact-links reveal">
            <a
              href="https://www.facebook.com/alexvicmudo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-kind">FACEBOOK</span>
              <span>alexvicmudo</span>
              <b aria-hidden="true">↗</b>
            </a>

            <a href="mailto:magnoalexander91@gmail.com">
              <span className="contact-kind">EMAIL</span>
              <span>magnoalexander91@gmail.com</span>
              <b aria-hidden="true">↗</b>
            </a>

            <a href="tel:+639625399458">
              <span className="contact-kind">PHONE</span>
              <span>0962 539 9458</span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>

          <footer>
            <a
              className="logo"
              href="#profile"
              aria-label="Alexander Magno home"
            >
              am<span>®</span>
            </a>

            <span>
              © {new Date().getFullYear()} Alexander Magno
            </span>

            <a href="#profile">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);