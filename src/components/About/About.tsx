import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src="/Images/Chaitanya%20Khandare.webp" alt="Chaitanya Khandare" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I'm Chaitanya Khandare, a final-year B.Tech CSBS student passionate about Java Backend Development. I enjoy building scalable REST APIs with Spring Boot, solving DSA problems, and continuously improving my software engineering skills. I'm currently preparing for software engineering roles while expanding my knowledge in cloud technologies and backend architecture.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Technology, Computer Science and Business Systems</h4>
            <p>JSPM's Rajarshi Shahu College of Engineering, Pune</p>
            <p>8.35 CGPA</p>
            <p>July 2023 - july 2027</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Java Full Stack Developer – Virtual Intern</h4>
            <p>EduSkills Academy (AICTE) | Oct 2025 - Dec 2025</p>
            <p>Remote, India</p>
            
            <p>• Completed a 10-week AICTE-certified virtual internship building enterprise web applications with the Java
Spring Boot ecosystem.</p>
<p>
• Developed and tested RESTful backend components following REST API design best practices, including
proper HTTP status codes, request validation, and structured error handling.
</p>

<p>• Gained practical experience in backend architecture patterns, Spring Data JPA for database integration, and
enterprise development workflows.</p>
            
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="skill-category"><h4>Languages</h4><p>Java, Python (basics), SQL</p></div>
          <div className="skill-category"><h4>Operating Systems</h4><p>Linux (daily development environment), Windows</p></div>
          <div className="skill-category"><h4>Backend Development</h4><p>Spring Boot, REST APIs, concurrent systems design</p></div>
          <div className="skill-category"><h4>Tools</h4><p>Git, GitHub, Docker, Maven</p></div>
          <div className="skill-category"><h4>Databases</h4><p>MySQL, PostgreSQL</p></div>
        </div>
      </div>
    </Container>
  )
}
