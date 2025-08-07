import './App.css';

function App() {
  return (
    <div className="resume">
      <aside className="sidebar">
        <div className="profile">
          <img
            src="/images/shrutiimage.jpg"
            alt="Shruti Kathiriya"
            className="profile-img"
          />
          <h2>Shruti Kathiriya</h2>
          <p className="course">Full Stack Developer</p>
        </div>

        <div className="contact">
          <h3>Contact</h3>
          <p><a href="#">💼 shrutiikathiriya@gmail.com</a></p>
          <p><a href="#">📞 +91 8849844395</a></p>
          <p>🏠 Surat, India</p>
        </div>

        <div className="social">
          <h3>Links</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/shruti-kathiriya-00b8142ba/" >LinkedIn</a></li>
            <li><a href="https://github.com/ShrutiKathiriya-coder" >GitHub</a></li>
          </ul>
        </div>

        <div className="language">
          <h3>Languages</h3>
          <ul>
            <li>» English</li>
            <li>» Hindi</li>
            <li>» Gujarati</li>
          </ul>
        </div>
      </aside>


      <main className="content">
        <div className="about">
          <h2>About Me</h2>
          <p>
            Full Stack Developer experienced in building both front-end and back-end applications using modern technologies like React.js, Node.js, Express, and MongoDB. Passionate about creating user-friendly interfaces and scalable backend solutions. Strong problem-solving abilities, quick learner, and eager to take on real-world challenges. Experienced in working with teams, managing projects, and delivering high-quality, efficient solutions within deadlines.
          </p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Problem-solving</li>
            <li>Good Communication</li>
            <li>Adaptability</li>
            <li>Teamwork and collaboration</li>
          </ul>
        </div>

        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Sc in Information Technology</strong> <br />
              Swarrnim Startup & Innovation University (2024-2026)
            </li>
            <li>
              <strong>H.S.C Education</strong> <br />
              Kaushal Vidyabhavan, Surat (2022-2023)
            </li>
          </ul>
        </div>

        <div className="tech-skills">
          <h2>Relevant  Skills</h2>
          <ul>
            <li>Frountend : HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Backend :Node.js & Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <button className='print-btn' onClick={()=> window.print()}>Print Here</button>
      </main>
    </div>
  );
}

export default App;
