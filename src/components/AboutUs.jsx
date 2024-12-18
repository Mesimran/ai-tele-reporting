// src/components/AboutUs.js

import React from 'react';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-heading">
        <h1>About Us</h1>
        <h2>Transforming Healthcare, One Diagnosis at a Time</h2>
      </div>
      <p>
        At <strong>SEPTUM</strong>, we are committed to revolutionizing the way chest diseases are detected and diagnosed.
        Our mission is simple: to make accurate, timely, and accessible healthcare diagnostics available to everyone,
        no matter where they are. Through the power of AI and cutting-edge tele-reporting technology, we are bridging
        the gap between patients and medical professionals, ensuring that the future of healthcare is within reach for all.
      </p>
      
      <h3>Who We Are</h3>
      <p>
        We are a team of passionate innovators, data scientists, healthcare professionals, and technologists driven by the belief 
        that AI has the power to save lives. Combining deep expertise in artificial intelligence, specifically in Convolutional 
        Neural Networks (CNN), and a dedication to healthcare innovation, we have developed a platform that redefines the way 
        chest diseases like pneumonia, tuberculosis, and COVID-19 are diagnosed remotely.
      </p>
      <p>
        Our approach blends the latest advancements in machine learning and medical imaging with a user-friendly tele-reporting system,
        providing fast, accurate diagnoses directly to healthcare providers and patients around the world.
      </p>

      <h3>What We Do</h3>
      <p>
        At the heart of our platform is an AI-powered diagnostic engine that scans chest X-rays and CT scans, identifies potential diseases,
        and delivers a comprehensive report—all in real time. Our technology enables healthcare providers to:
      </p>
      <ul>
        <li>Detect chest diseases early with high accuracy.</li>
        <li>Provide remote diagnosis for patients in underserved or remote areas.</li>
        <li>Receive instant, AI-generated reports that guide timely decision-making.</li>
        <li>Streamline the diagnostic process, reducing wait times and improving patient outcomes.</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <ul>
        <li><strong>Remote Convenience:</strong> Whether you're a healthcare provider or a patient, access our platform from anywhere in the world, at any time.</li>
        <li><strong>Rapid Results:</strong> AI-driven diagnostics reduce the time to diagnosis, ensuring early intervention for life-threatening conditions.</li>
        <li><strong>Expert Collaboration:</strong> Our platform allows healthcare professionals to collaborate with expert radiologists for an added layer of assurance.</li>
        <li><strong>Continuous Learning:</strong> Our AI models are constantly evolving, learning from new data to improve accuracy and efficiency over time.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
