import { Container } from "./styles";
import python from "../../assets/python.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
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
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={shopify} alt="Shopify" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}
