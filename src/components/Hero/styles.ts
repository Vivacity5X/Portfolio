import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12rem;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  .hero-text {
    flex: 1;

    > p {
      font-size: 1.8rem;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 6.5rem;
      line-height: 1.1;
      color: var(--primary);
      margin-bottom: 1.5rem;

      span {
        color: var(--primary);
      }
    }

    h3 {
      color: var(--text-secondary);
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    p.small-resume {
      max-width: 60rem;
      color: var(--text-secondary);
      line-height: 1.8;
      margin-bottom: 4rem;
    }
  }

  .social-media {
    display: flex;
    gap: 1.5rem;
    margin-top: 3rem;

    a {
      width: 4.5rem;
      height: 4.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      color: var(--text);

      transition: all 0.3s ease;

      &:hover {
        background: var(--primary);
        color: #fff;
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      }

      img,
      span {
        width: 2.3rem;
        height: 2.3rem;
        font-size: 2.3rem;
      }
    }
  }

  .button {
    display: inline-block;
    margin-top: 4rem;
    padding: 1.4rem 3.6rem;
    border-radius: 40px;
    background: var(--primary);
    color: var(--text);
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-hover);
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 300px;
      border-radius: 24px;
      border: 3px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15);
      transition: transform 0.4s ease;
    }

    img:hover {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 4rem;
    padding-top: 10rem;

    .hero-text {
      h1 {
        font-size: 5rem;
      }

      h3 {
        font-size: 2rem;
      }

      p.small-resume {
        margin: 0 auto 3rem;
      }
    }

    .social-media {
      justify-content: center;
    }

    .hero-image {
      img {
        max-width: 320px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-top: 8rem;

    .hero-text {
      h1 {
        font-size: 4rem;
      }

      h3 {
        font-size: 1.8rem;
      }

      p.small-resume {
        font-size: 1.5rem;
      }
    }

    .button {
      width: 100%;
      text-align: center;
    }

    .hero-image {
      img {
        max-width: 250px;
      }
    }
  }
`;