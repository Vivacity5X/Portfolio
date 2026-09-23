import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <article className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a href="https://github.com/diagni-ai/diagni-ai-backend" target="_blank" rel="noreferrer" aria-label="DiagniAI GitHub repository">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>DiagniAI — AI-Assisted Chest X-Ray Triage System</h3>
              <p><em>Capstone Project</em></p>
              <ul className="project-description">
                <li>Developed the <strong>Spring Boot backend</strong> with REST APIs, MySQL integration, patient/case management, and business logic.</li>
                <li>Implemented <strong>JWT authentication and RBAC</strong> for Patient, Nurse, and Doctor roles.</li>
                <li>Integrated Spring Boot with a <strong>FastAPI DenseNet121 ML service</strong> for TB probability prediction and case prioritization.</li>
                <li>Integrated <strong>Grad-CAM explainability</strong> into the doctor dashboard to visualize regions contributing to model predictions.</li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li><li>Spring Boot</li><li>Python</li><li>FastAPI</li><li>PyTorch</li><li>DenseNet121</li><li>MySQL</li><li>JWT</li><li>REST API</li><li>Grad-CAM</li>
              </ul>
            </footer>
          </article>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <article className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a href="https://github.com/Vivacity5X/factory-backend" target="_blank" rel="noreferrer" aria-label="Factory backend GitHub repository">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Factory Backend Event Ingestion &amp; Analytics System</h3>
              <p>Built a backend system for batch ingestion and processing of machine-generated factory events using Spring Boot and MySQL.</p>
              <p>Implemented validation, deduplication, and concurrent event handling using ConcurrentHashMap and Spring Data JPA.</p>
              <p>Designed analytics REST APIs for event counts, defect metrics, and machine health monitoring; benchmarked with 1000+ simulated events.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li><li>Spring Boot</li><li>REST APIs</li><li>MySQL</li><li>ConcurrentHashMap</li><li>Spring Data JPA</li>
              </ul>
            </footer>
          </article>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
