import './App.css'
import React, { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = parseInt(target);
          if (start === end) return;
          const increment = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span className="count" ref={ref}>{count}</span>;
}

function Carousel({ images }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>←</button>
      <div className="carousel" ref={scrollRef}>
        {images.map((src, idx) => (
          <img src={src} alt={`carousel ${idx + 1}`} key={idx} />
        ))}
      </div>
      <button className="carousel-button right" onClick={scrollRight}>→</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <img src="/logo.jpg" alt="Saviours Logo" className="org-logo" />
          <h1 className="hero-title">Saviours Voluntary Organization </h1>
        <p className="hero-subtitle">Reg.no :- 147/2019</p>
          <p className="hero-subtitle">Empowering Lives | Spreading Hope | Building Communities</p>
          <button
            className="btn btn-secondary"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScDX1YZ01XMoJtD5WEJHs4ybbJRTpKo2XRQkepGMGu2tmZK7Q/viewform?usp=header', '_blank')}
          >
            Join Us
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Saviours is a passionate, community-driven organization committed to creating meaningful change in society through
          its four impactful wings — <strong>Awareness</strong>, <strong>Food</strong>, <strong>Medical Aid</strong>, and
          <strong> Blood Donation</strong>.
        </p>
        <p>
          We aim to uplift communities, support the underprivileged, and foster a sense of social responsibility. From
          conducting awareness campaigns in villages, schools, colleges, and public areas, to organizing food drives for the
          hungry and offering medical support to those in need — every step we take is driven by compassion and unity.
        </p>
        <p>
          Our blood donation efforts have saved countless lives, with major drives collecting hundreds of units. We continue
          to grow with the strength of our volunteers and the trust of the people.
        </p>
        <p><em>Join us in our mission — because together, we are stronger.</em></p>
      </section>

      {/* Wings Section */}
     <div className="wing">
  <h3>Awareness Wing</h3>
  <p>
    We actively conduct awareness campaigns on critical social topics such as education, health,
    environment, gender equality, and personal hygiene...
  </p>
  <Carousel images={["a00.jpg","a2.jpg", "a9.jpg", "a4.jpg", "a02.jpg","a5.jpg", "a6.jpg", "a1.jpg", "a8.jpg", "a3.jpg", "a10.jpg","a11.jpg","a12.jpg"]} />
  <details className="wing-details">
    <summary>How This Wing Works</summary>
    <ul>
      <li>We organize meetings with wing members to decide the venue, topic, and date of the event.</li>
      <li> The topics include women’s safety and empowerment, character building and career guidance for students, 
      overcoming backwardness in lower communities, and the importance of blood donation.</li>
      <li>We seek permission from authorities (like school heads or village leaders). </li>
      <li>After getting approval, we conduct the awareness drive at the scheduled time.</li>
      <li>We share photos and updates on our WhatsApp and Instagram pages.</li>
    </ul>
  </details>
</div>

<div className="wing">
  <h3>Food Wing</h3>
  <p>Our food distribution initiatives are dedicated to eradicating hunger...</p>
  <Carousel images={["f001.jpg","f00.jpg","f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg","f5.jpg","f6.jpg","f7.jpg","f8.jpg","f9.jpg","f10.jpg","f11.jpg"]} />
  <details className="wing-details">
    <summary>How This Wing Works</summary>
    <ul>
      <li>We prioritize donating food to victims of natural calamities, and we also donate food on random occasions 
        of our supporters and donors. Since 2018, we have conducted more than 1,200 food donation drives in kavali as well in surrounding areas.</li>
      <li>If someone wants to donate, we collect their preferences and plan accordingly.</li>
    </ul>
  </details>
</div>

<div className="wing">
  <h3>Medical Aid Wing</h3>
  <p>Through our medical aid wing, we provide essential healthcare services...</p>
  <Carousel images={["m00.jpg","m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg", "m6.jpg","m7.jpg","m8.jpg","m9.jpg","m10.jpg","m12.jpg"]} />
  <details className="wing-details">
    <summary>How This Wing Works</summary>
    <ul>
      <li>We verify the request made by the patient’s family by checking their medical reports, income sources, and the patient’s identity.</li>
      <li>We first try to get treatment with less expenses through known doctors or  sources. </li>
      <li>If not feasible, we start fundraising and send the amount to the family.</li>
    </ul>
  </details>
</div>

<div className="wing">
  <h3>Blood Wing</h3>
  <p>We organize regular blood donation camps and maintain a donor network...</p>
  <Carousel images={["b00.jpg","b01.jpg","b1.jpg", "b2.jpg","b000.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg","b7.jpg"]} />
  <details className="wing-details">
    <summary>How This Wing Works</summary>
    <ul>
      <li>Our first camp was organized on January 27, 2018, with 16 members. We later resumed our journey in collaboration with IRCS (Red Cross).
         So far, we have contributed over 3,000 units of blood to the IRCS Kavali Blood Bank.</li>
        <h4>Top Blood Donation Camps:</h4>
        <li>1.January 26, 2025 – Conducted a mega blood donation camp with 777 units in Kavali.</li>
        <li>2.October 12, 2023 – 614 units donated.</li>
        <li>3.January 26, 2024 – 502 units donated.</li>
        <li>4.December 9, 2022 – 370 units donated</li>
      <li>We verify the authenticity of the blood request and collect patient details.</li>
      <li>We contact our donor network or blood banks to arrange the required units.</li>
      <li>We have seperate wing for emergency blood requriements and we are capable to full fill various 
        blood requests from  vraiours locations from India
      </li>
    </ul>
  </details>
</div>


      {/* Impact Section */}
<section className="impact-section">
  <h2>Our Impact</h2>
  <div className="impact-counters">
    <div className="counter">
      <AnimatedCounter target={3500} duration={4000} />+
      <p>Units of Blood Donated</p>
    </div>
    <div className="counter">
      <AnimatedCounter target={1200} duration={4000} />+
      <p>Food Drives Conducted</p>
    </div>
    <div className="counter">
      <AnimatedCounter target={250} duration={4000} />+
      <p>Awareness Camps Held</p>
    </div>
    <div className="counter">
      <AnimatedCounter target={280} duration={4000} />+
      <p>Medical Cases Supported</p>
    </div>
  </div>
</section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Get Involved</h2>
        <p>Become a volunteer or support our cause to make a difference today.</p>
        <div className="cta-buttons">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScDX1YZ01XMoJtD5WEJHs4ybbJRTpKo2XRQkepGMGu2tmZK7Q/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Volunteer Now
          </a>
      
        </div>
      </section>
     <section className="contact-section">
  <h2>Contact Us</h2>
  <div className="social-icons">
    <a href="https://www.instagram.com/teamsaviours?igsh=MWFoMDdqc3c0ejlmMA==" target="_blank" rel="noopener noreferrer">
      <img src="i.jpg" alt="Instagram" className="social-icon" />
    </a>
    <a href="https://chat.whatsapp.com/C3cKFK4xIfy3w6GHyCLcaP?source_surface=21" target="_blank" rel="noopener noreferrer">
      <img src="ww.png" alt="WhatsApp" className="social-icon" />
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Saviours Organization | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App