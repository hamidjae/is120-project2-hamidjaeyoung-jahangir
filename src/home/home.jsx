import React from 'react';

export function Home() {
  return (
  <main id="homepage">
    <section className="banner">
      <img className="banner-img" src="/is120-project1-hamidjaeyoung-jahangir/meanddad.jpg" alt="Picture of me and my father" />
      <div className="banner-text">
        <span className="banner-sticker">Incheon Airport</span>
        <h2>That's me!</h2>
        <p>That's a picture of me and my father, right before I left for America. I am a Pakistani-Korean international student currently studying at Brigham Young University.</p>
        <p>It's great to meet you!</p>
      </div>
    </section>
    <section className="sectioned">
    <h2 className="section-title">
      <span className="section-title-row">
      <img className="section-icon" src={`${import.meta.env.BASE_URL}info.svg`} alt="Image of an alert icon."/>
      About Me
      </span>
    </h2>

      <article className="card">
        <h3>Current Work</h3>
        <p>
            I'm currently working with Brigham Young University Broadcasting on a proof-of-concept project regarding some of their internal systems, where I am extensively using Python, specifically the Tkinter library.
        </p>
      </article>

      <article className="card">
        <h3>Goals</h3>
        <p>
            I am continuing to improve daily by building projects that I love, and preparing for internship opportunities to expand my knowledge.
        </p>
      </article>

      <article className="card">
        <h3>Hobbies</h3>
        <p>
            I love everything gaming. My favorite games are vast and varied, from RPGs such as <em>Warhammer 40,000: Rogue Trader</em> and <em>Baldur's Gate 3</em>, to action games such as the <em>Devil May Cry</em> series. If you can name it, I've probably played it!    
        </p>
      </article>
    </section>
  </main>
  );
}