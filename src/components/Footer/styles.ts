import styled from "styled-components";

export const Container = styled.footer`
  background: var(--surface);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem 10rem;
  margin-top: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text);

    span:last-child {
      color: var(--primary);
    }
  }

  p {
    color: var(--text-secondary);
    letter-spacing: 0.08rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
      width: 2.6rem;
      animation: spinning 8s linear infinite;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      width: 4.2rem;
      height: 4.2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      color: var(--text);
      background: rgba(255, 255, 255, 0.05);

      transition: all 0.3s ease;

      &:hover {
        background: var(--primary);
        color: #fff;
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      }
    }

    img,
    span {
      font-size: 2.2rem;
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 900px) {
    padding: 4rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 3rem 2rem;

    .logo {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.3rem;
      flex-direction: column;
      gap: 0.5rem;
    }

    .social-media {
      gap: 1rem;

      a {
        width: 3.8rem;
        height: 3.8rem;
      }

      img,
      span {
        font-size: 2rem;
      }
    }
  }
`;