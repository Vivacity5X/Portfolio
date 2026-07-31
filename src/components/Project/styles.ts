import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--primary);
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;

    .project {
      padding: 2rem;
      background: var(--surface);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text);

      &:hover {
        transform: translateY(-8px);
        border-color: var(--primary);
        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.18);
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;

        color: var(--primary);

        .project-links {
          display: flex;
          gap: 1rem;
        }

        a {
          color: var(--primary);
          transition: 0.3s;

          &:hover {
            color: var(--primary-hover);
            transform: scale(1.1);
          }
        }

        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
        color: var(--text);
      }

      p {
        color: var(--text-secondary);
        line-height: 1.7;
        letter-spacing: 0.05rem;
        margin-bottom: 2rem;

        a {
          color: var(--primary);
          border-bottom: 1px solid transparent;
          transition: 0.3s;

          &:hover {
            border-color: var(--primary);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          gap: 1.5rem;
          font-size: 1.3rem;
          color: var(--text-secondary);
          opacity: 0.9;
          flex-wrap: wrap;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;