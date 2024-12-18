import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './assests/images/logo.png';
import heroImage from './assests/images/pic1 (2).jpg';
import image1 from './assests/images/image1.png';
import image2 from './assests/images/image2.png';
import image3 from './assests/images/image3.png';
import image4 from './assests/images/image4.png';
import image5 from './assests/images/image5.png';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Box/>
        
        <Routes>
       
          <Route path="/" element={
            <>
          
              <HeroSection />
              <HowItWorks />
              <WhyChooseUs />
              
            </>
          } /> 
         
          <Route path="/about" element={<AboutUs />} /> {/* About Us Page */}
          <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element ={<Login/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

/*function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar">
        <img src={logo} className ="image" alt="Logo" />
      </div>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
      <div>
      <button className="visit-button">Tele-Reporting</button>
      </div>
    </nav>
  );
}
  */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="image" alt="Logo" />
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Navigation Links */}
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="#resources">Resources</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>

      <div>
        <button className="visit-button">Tele-Reporting</button>
      </div>
    </nav>
  );
}


function Box() {
  return (
    <section className="box">
      <div className="box-content">
        <div className="box-text">
          <h2>GET AN APPROPRIATE APPROACH REGARDING YOUR HEALTH!</h2>
        </div>
        <button className="visit-button">Visit Us</button>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <img src={heroImage} className="hero-image" alt="Hero" />
      <div className="label">
        <h1 className="hero-text">The future of reporting lies not in the distance we travel, but in the technology that brings the story to us.</h1>
        <button className="visit-button">Visit Us</button>
      </div>
    </section>
  );
}


function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>Fast. Accurate. Remote.</h2>
      <div className="steps">
        <div className="step">
          <img src={image1} alt="Step 1" />
          <h3>1. Capture Chest X-rays or CT Scans</h3>
          <p>Simply upload your chest images through our secure, cloud-based platform. No need to travel far—whether you're at home or in a local clinic, our technology works anywhere.</p>
        </div>
        <div className="step">
          <img src={image2} alt="Step 2" />
          <h3>2. AI-Powered Image Analysis</h3>
          <p>Our cutting-edge Convolutional Neural Network (CNN) scans your images for abnormalities. It detects patterns linked to diseases like pneumonia, tuberculosis, and COVID-19 with remarkable precision, identifying critical features even a human eye might miss.</p>
        </div>
        <div className="step">
          <img src={image3} alt="Step 3" />
          <h3>3. Instant Diagnosis & Confidence Score</h3>
          <p>Receive an automated diagnosis with confidence scores in just minutes. Our AI system delivers detailed insights into the likelihood of specific chest diseases, giving you peace of mind quickly.</p>
        </div>
        <div className="step">
          <img src={image4} alt="Step 4" />
          <h3>4. Real-Time Reporting</h3>
          <p>A detailed report, complete with analysis and recommendations, is sent directly to your healthcare provider. Our system alerts medical professionals immediately if a disease is detected, ensuring timely intervention.</p>
        </div>
        <div className="step">
          <img src={image5} alt="Step 5" />
          <h3>5. Optional Expert Review</h3>
          <p>For added assurance, your results can be reviewed by a certified radiologist, providing expert validation before you receive your final diagnosis.</p>
        </div>
      </div>
    </section>
  );
}


function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="left-content">
          <h2>Why Choose Our AI Tele-Reporting?</h2>
        </div>
        <div className="right-content">
          <ul>
            <li><strong>Rapid Results:</strong> Get diagnostic results within minutes.</li>
            <li><strong>AI Accuracy:</strong> Leverages the power of AI to detect chest diseases with high accuracy.</li>
            <li><strong>Remote Convenience:</strong> No waiting rooms or long trips—access your diagnosis remotely.</li>
            <li><strong>Expert Oversight:</strong> Digital reports reviewed by board-certified radiologists.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


/*function Footer() {
  return (
    
    <footer className="footer">
       <div className="navbar">
        <img src={logo} className ="image" alt="Logo" />
      </div>
      <frame>
      <div className="contact-form">
        <h3 >NEED HELP?</h3><br></br>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        
      </div>
      </frame>

      <div className="contact-section">
        <ul>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Health Topics</li>
        <li>Services</li>
        </ul>
      </div>

      <div className="contact-info">
        <h2>Contact Us</h2><br></br>
        <ul>
          <li>Phone: +91986574322</li>
          <li>Email: support@tele-reporting.com</li>
        </ul>
      </div>
    </footer>
  );
}
  */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} className="image" alt="Logo" />
      </div>

      <div className="contact-form">
        <h3>NEED HELP?</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-section">
        
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#health">Health Topics</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>

      <div className="contact-info">
        <h2>Contact Us</h2><br></br>
        <ul>
          <li>Phone: +91986574322</li>
          <li>Email: support@tele-reporting.com</li>
        </ul>
      </div>
    </footer>
  );
}



export default App;
