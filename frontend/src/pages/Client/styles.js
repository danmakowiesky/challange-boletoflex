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
  background: #f0f0f5;
  border-radius: 8px;
  margin-top: 50px;

  header {
    border-radius: 8px 8px 0px 0px;
    height: auto;
    overflow: hidden;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  button.btn {
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 42px;
    padding: 0 0 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #39b100;
    color: #fff;

    &:hover {
      background: ${darken(0.08, '#39b100')};
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }
  }
`;
