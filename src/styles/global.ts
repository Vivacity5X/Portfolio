import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    /* ===== Theme Colors ===== */
    --primary: #3B82F6;
    --primary-hover: #2563EB;

    --background: #0F172A;
    --surface: #1E293B;

    --text: #F8FAFC;
    --text-secondary: #94A3B8;

    --pink: #E31F71;

    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: .5s;
        background-color: #F5F5F5;
        color: #212121;
      }

      .logo{
        color: #212121;
      }

      header.header-fixed{
        transition: .5s;
        background-color: rgba(245,245,245,.85);
        backdrop-filter: blur(10px);

        a{
          transition: .5s;
          color: #212121;
        }

        .menu,
        .menu:before,
        .menu:after{
          background-color: #212121;
        }

        .menu.active{
          background-color: rgba(255,255,255,0);
        }
      }

      footer.footer{
        transition: .5s;
        background-color: rgba(0,0,0,.08);
        color: #212121;
      }

      form{
        input,
        textarea{
          transition: .5s;
          border: 1px solid #212121;
          color: #212121;

          &::placeholder{
            color: #666;
          }
        }
      }
    }
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size:62.5%;
    scroll-behavior:smooth;
  }

  body{
    font-size:1.6rem;
    -webkit-font-smoothing:antialiased;
    background:var(--background);
    color:var(--text);
  }

  body,
  input,
  textarea,
  button{
    font-family:'Red Hat Display',sans-serif;
    font-weight:400;
  }

  ul,
  li{
    list-style:none;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button,
  .button{
    border:none;
    cursor:pointer;
    background:var(--primary);
    color:var(--text);
    border-radius:2rem;
    font-weight:600;
    transition:.3s ease;

    &:hover{
      background:var(--primary-hover);
      transform:translateY(-2px);
      box-shadow:0 8px 20px rgba(59,130,246,.25);
    }
  }

  button:disabled,
  .button:disabled{
    opacity:.7;
    cursor:not-allowed;
    transform:none;
    box-shadow:none;
  }

  .logo{
    font-size:3rem;
    color:var(--text);
    font-weight:700;
  }
`;