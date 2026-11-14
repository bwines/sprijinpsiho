const phone = "+40744506779";
const phoneDisplay = "+40 744 506 779";

const services = [
  {
    number: "01",
    title: "Psihologie clinică",
    description:
      "Înțelegerea dificultăților emoționale, cognitive și comportamentale, printr-o abordare atentă și adaptată persoanei.",
  },
  {
    number: "02",
    title: "Consiliere psihologică",
    description:
      "Un spațiu de reflecție și sprijin pentru gestionarea emoțiilor, stresului, relațiilor și perioadelor dificile.",
  },
  {
    number: "03",
    title: "Psihoterapie",
    description:
      "Un proces de explorare și schimbare, construit în jurul nevoilor și obiectivelor fiecărei persoane.",
  },
  {
    number: "04",
    title: "Evaluare psihologică",
    description:
      "Evaluare realizată cu metode și instrumente adecvate scopului solicitării și cadrului profesional.",
  },
  {
    number: "05",
    title: "Consiliere pentru adulți",
    description:
      "Sprijin în perioade de tranziție, provocări personale, dificultăți relaționale și dezvoltare personală.",
  },
  {
    number: "06",
    title: "Consiliere pentru adolescenți",
    description:
      "Un cadru de ascultare și susținere pentru emoții, relații, încredere în sine și provocările adolescenței.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#acasa" aria-label="SprijinPsiho — Acasă">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M21 4.5c-8.9 0-16.1 7.2-16.1 16.1S12.1 36.7 21 36.7s16.1-7.2 16.1-16.1" />
              <path d="M12.1 22.2c3.2-5.3 6.2-7.8 9.1-7.8 4.4 0 6.8 5.4 8.7 11.2" />
              <path d="M14.5 28.1c2.1-2.4 4.2-3.6 6.4-3.6 2.6 0 4.8 1.7 6.8 4.8" />
            </svg>
          </span>
          <span className="brand-word">sprijin<span>psiho</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Navigare principală">
          <a href="#acasa">Acasă</a>
          <a href="#despre">Despre mine</a>
          <a href="#servicii">Servicii</a>
          <a href="#abordare">Abordare</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href={`tel:${phone}`}>Sună pentru programare <span>↗</span></a>
      </header>

      <section className="hero" id="acasa">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> CABINET DE PSIHOLOGIE</p>
          <h1>Un pas mai aproape<br />de <em>tine.</em></h1>
          <p className="hero-lead">
            Uneori, primul pas spre echilibru este să vorbești cu cineva.
            Să fii ascultat, înțeles și însoțit în ritmul tău.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={`tel:${phone}`}>Programează o întâlnire <span>↗</span></a>
            <a className="text-link" href="#servicii">Descoperă serviciile <span>↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-dot" />
            Pentru adulți și adolescenți
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustrație abstractă inspirată de echilibru și conexiune">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-shape art-shape-one" />
          <div className="art-shape art-shape-two" />
          <div className="art-shape art-shape-three" />
          <div className="art-caption"><span>01 / 03</span><span>Un loc pentru a începe</span></div>
        </div>
      </section>

      <section className="intro section-wrap" id="despre">
        <div className="section-kicker">BINE AI VENIT LA SPRIJINPSIHO</div>
        <div className="intro-content">
          <h2>Fiecare poveste<br />merită <em>înțelegere.</em></h2>
          <div className="intro-text">
            <p>
              Sunt Mihaela Claudia Aungurence, psihoterapeut, iar în cabinetul
              SprijinPsiho îmi propun să ofer un cadru bazat pe ascultare,
              respect și încredere.
            </p>
            <p>
              Cu o experiență profesională de peste 10 ani, însoțesc adulții
              și adolescenții în explorarea dificultăților și a resurselor
              personale, într-un ritm potrivit fiecăruia.
            </p>
            <a className="text-link" href="#contact">Hai să vorbim <span>↗</span></a>
          </div>
        </div>
        <div className="experience-line">
          <strong>10<span>+</span></strong>
          <span>ani de experiență<br />profesională</span>
          <i />
          <span>Ascultare atentă<br />și sprijin autentic</span>
        </div>
      </section>

      <section className="services-section" id="servicii">
        <div className="section-wrap">
          <div className="services-heading">
            <div>
              <div className="section-kicker">CU CE TE POT SPRIJINI</div>
              <h2>Servicii construite<br />în jurul <em>nevoilor tale.</em></h2>
            </div>
            <p>Fiecare întâlnire începe cu o conversație. Împreună putem clarifica ce ai nevoie și care ar putea fi următorul pas.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach section-wrap" id="abordare">
        <div className="approach-art">
          <div className="approach-circle circle-large" />
          <div className="approach-circle circle-small" />
          <span className="approach-art-label">CONEXIUNE · CONTEXT · RESURSE</span>
        </div>
        <div className="approach-copy">
          <div className="section-kicker">FELUL ÎN CARE PRIVIM LUCRURILE</div>
          <h2>Omul este mai mult decât <em>o dificultate.</em></h2>
          <p>
            În activitatea mea profesională, perspectiva familială și sistemică,
            alături de abordarea pozitivă, aduc în atenție persoana, relațiile
            și contextul în care apar experiențele de viață.
          </p>
          <p>
            Procesul de sprijin se adaptează fiecărei persoane, cu respect
            pentru ritmul, povestea și resursele sale.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="section-kicker">PRIMUL PAS POATE ÎNCEPE AICI</div>
          <h2>Ai vrea să<br />stăm de <em>vorbă?</em></h2>
          <p>Pentru informații și programări, mă poți contacta telefonic sau prin WhatsApp.</p>
          <div className="contact-actions">
            <a className="button button-light" href={`tel:${phone}`}>Sună: {phoneDisplay} <span>↗</span></a>
            <a className="button button-outline" href={`https://wa.me/${phone.replace("+", "")}`} target="_blank" rel="noreferrer">Scrie pe WhatsApp <span>↗</span></a>
          </div>
          <div className="contact-footnote">Cabinet de Psihologie Aungurence Mihaela Claudia</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#acasa">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none"><path d="M21 4.5c-8.9 0-16.1 7.2-16.1 16.1S12.1 36.7 21 36.7s16.1-7.2 16.1-16.1" /><path d="M12.1 22.2c3.2-5.3 6.2-7.8 9.1-7.8 4.4 0 6.8 5.4 8.7 11.2" /><path d="M14.5 28.1c2.1-2.4 4.2-3.6 6.4-3.6 2.6 0 4.8 1.7 6.8 4.8" /></svg>
          </span>
          <span className="brand-word">sprijin<span>psiho</span></span>
        </a>
        <div className="footer-membership">
          <a className="footer-copsi-logo" href="https://www.copsi.ro/" target="_blank" rel="noreferrer" aria-label="Colegiul Psihologilor din România">
            <img src="/copsi-logo.webp" alt="Colegiul Psihologilor din România" />
          </a>
          <span className="membership-label">Membru al</span>
          <a href="https://www.copsi.ro/" target="_blank" rel="noreferrer">
            Colegiului Psihologilor din România <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span>© {new Date().getFullYear()} SprijinPsiho. Toate drepturile rezervate.</span>
        <a href={`tel:${phone}`}>{phoneDisplay}</a>
      </footer>
    </main>
  );
}
