import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 4rem;
      color: var(--primary);
      margin-bottom: 0.8rem;
    }

    p {
      color: #531561;
      font-weight: 600;
      font-size: 1.7rem;
      letter-spacing: 0.05rem;
    }
  }

  .contacts {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;

    div {
      width: 100%;
      max-width: 32rem;

      display: flex;
      align-items: center;
      gap: 2rem;

      padding: 2rem;

      background: var(--surface);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 18px;

      transition: all .3s ease;

      img {
        width: 4.2rem;
      }

      a {
        color: var(--text);
        font-weight: 600;
        transition: .3s;
        word-break: break-word;
      }

      &:hover {
        transform: translateY(-6px);
        border-color: var(--primary);
        box-shadow: 0 15px 30px rgba(59,130,246,.18);

        a {
          color: var(--primary);
        }
      }
    }
  }

  @media (max-width: 960px) {

    .contacts {
      flex-direction: column;
      align-items: center;

      div {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 600px) {

    .contacts {

      div {
        flex-direction: column;
        text-align: center;
        padding: 2.4rem;

        img {
          width: 5rem;
        }
      }
    }
  }
`;