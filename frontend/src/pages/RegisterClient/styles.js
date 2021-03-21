import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    button {
      font-weight: 600;
      border-radius: 8px;
      border: 0;
      background: #39b100;
      color: #fff;

      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        padding: 16px 24px;
        text-decoration: none;
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }
`;

export const Container = styled.div`
  margin: 0 auto 0;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 35px;
      padding: 0 15px;
    }

    button.btn {
      border: 0;
      border-radius: 2px;
      width: 100%;
      height: 42px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      background: #39b100;
      color: #fff;

      &:hover {
        background: ${darken(0.08, '#39b100')};
      }
    }

    input {
      background: transparent;
      border: 1px solid #444;
      border-radius: 5px;
      color: #000;
      &:hover {
        color: #b7b7cc;
        border: 1px solid #39b100;
        border-radius: 5px;
      }
      &::placeholder {
        color: #b7b7cc;
      }
    }
  }
`;
