import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      <p className="profile-intro">
        Hello! I am <b>Rucha Chavan</b>, a passionate software developer who enjoys
        solving real-world problems with clean and efficient code.
      </p>
      <hr />
      <section>
        <h2>Personal Information</h2>
        <ul>
          <li><b>Name:</b> Rucha Ranjit Chavan</li>
          <li><b>Email:</b> rucharanjit10@email.com</li>
          <li><b>Phone:</b> +91-1234567890</li>
          <li><b>Location:</b> Kolhapur, Maharashtra, India</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <b>B.Tech in Computer Science</b> - Shivaji University (2022 - 2026)
          </li>
          <li>
            <b>Higher Secondary</b> - Vidyapeeth Junior College, Kolhapur (2020 - 2022)
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Skills</h2>
        <ul>
          <li>React.js, JavaScript, HTML, CSS</li>
          <li>Node.js, Express, MongoDB, MySQL</li>
          <li>Python, Java</li>
          <li>Problem Solving & Data Structures</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Experience</h2>
        <div className="experience">
          <h3>Software Engineer - Softron Company</h3>
          <p><i>June 2024 - July 2024</i></p>
          <p>
            - Developed and maintained web applications using React and Node.js.<br />
            - Worked with REST APIs and improved performance by 25%.<br />
            - Collaborated with team members on large-scale projects.
          </p>
        </div>
        <div className="experience">
          <h3>Intern - IIT Bombay</h3>
          <p><i>May 2025 - November 2025</i></p>
          <p>
            - Assisted in frontend development using React.<br />
            - Learned about agile methodology and software lifecycle.<br />
            - Built a mini project for internal use.
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Medicine Expiry Tracker:</b> A web app to track medicine expiry dates using PHP and MySQL.
          </li>
          <li>
            <b>Pharmacy Waste Management System:</b> A role-based system for managing medical waste collection and processing.
          </li>
          <li>
            <b>Placement Management System:</b> Portal for managing student placements with admin, company, and student dashboards.
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Hobbies</h2>
        <ul>
          <li>Reading tech blogs</li>
          <li>Exploring AI tools</li>
          <li>Photography</li>
          <li>Traveling</li>
        </ul>
      </section>
    </div>
  );
}
