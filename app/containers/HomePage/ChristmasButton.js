import styled from 'styled-components';

const Button = styled.button`
  background: #ff5252;
  border: none;
  border-radius: 37.5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Montserrat, serif;
  font-size: 16px;
  font-weight: bold;
  height: 60px;
  letter-spacing: 0.29px;
  margin: 40px auto 0;
  outline: 0;
  text-transform: uppercase;
  width: 280px;

  &:hover {
    background: #ff755f;
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export default Button;
