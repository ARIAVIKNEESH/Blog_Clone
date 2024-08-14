import React from 'react';
import './AboutPage.css';
import aboutImage from '../assets/about-image.png';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <img src={aboutImage} alt="About Us" className="about-image" />
      <p>
        Welcome to our blog! We are passionate about technology and dedicated to sharing our knowledge with the world. Our blog covers a wide range of topics, including web development, artificial intelligence, software engineering, and more.
      </p>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower and educate individuals through high-quality content and resources. We aim to provide valuable insights and practical advice to help our readers stay ahead in the ever-evolving tech landscape.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <h3>ARIA VIKNEESH</h3>
          <p>Aria is a senior software engineer with over 10 years of experience in web development. She specializes in React and Node.js.</p>
        </div>
        <div className="team-member">
          <h3>AKHIL</h3>
          <p>Akhil is a UI/UX designer with a keen eye for detail. He is passionate about creating intuitive and engaging user experiences.</p>
        </div>
      </section>
      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 2020, our blog started as a small project to share our tech insights and quickly grew into a popular platform for tech enthusiasts and professionals. We have continuously expanded our content and expertise to cover a broader range of topics and provide even more value to our readers.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
