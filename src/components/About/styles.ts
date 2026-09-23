import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  .about-text {
    h2 {
      display: inline-block;
      margin-bottom: 2rem;
      font-size: 3.4rem;
      color: var(--primary);
    }

    h3 {
      margin: 2rem 0 1rem;
      color: var(--primary);
      font-size: 2.2rem;
    }

    p {
      font-size: 1.7rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }
  }

  .hard-skills {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.6rem;
    background: var(--surface);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    transition: transform 0.3s ease, border-color 0.3s ease;

    h4 {
      color: var(--text);
      font-size: 1.5rem;
      margin-bottom: 0.7rem;
    }

    &:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
    }
  }

  .about-image {
    display: flex;
    justify-content: center;
    align-items: center;
    
    > div {
      width: min(42rem, 100%);
      overflow: hidden;
      border-radius: 24px;
      border: 2px solid rgba(59, 130, 246, 0.15);
      box-shadow: 0 20px 50px rgba(59, 130, 246, 0.12);
    }

    img {
      width: 100%;
      display: block;
      transition: transform 0.4s ease;
    }

    img:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    gap: 4rem;

    .about-image {
      width: 100%;
      max-width: 380px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;

    .about-text {
      h2 {
        font-size: 2.8rem;
      }

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    .about-image {
      max-width: 280px;

      > div {
        border-radius: 50%;
      }

      img {
        aspect-ratio: 1;
        object-fit: cover;
      }
    }

    .hard-skills {
      grid-template-columns: 1fr;
    }
  }
`;
