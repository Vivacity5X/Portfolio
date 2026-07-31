import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: var(--text);
      padding: 0.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover {
        color: var(--primary);
      }

      &.button {
        padding: 0.8rem 2.2rem;
        border-radius: 30px;
        background: var(--primary);
        color: var(--text);
        transition: 0.3s;

        &:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
        }
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: var(--text);
    position: relative;
    cursor: pointer;
    display: none;
    transition: 0.3s;

    &:before {
      bottom: 0.5rem;
    }

    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background: transparent;
    }
  }

  .menu:before,
  .menu:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: var(--text);
    transition: 0.4s;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--primary);
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    transition: 0.3s;
  }

  label:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 4px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + label {
    background: var(--primary-hover);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      opacity: 0;
      visibility: hidden;
      overflow: hidden;

      position: fixed;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: var(--background);

      transition: 0.3s;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      a.button {
        background: var(--primary);

        &:hover {
          background: var(--primary-hover);
        }
      }
    }
  }
`;